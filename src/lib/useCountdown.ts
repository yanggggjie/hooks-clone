import { useEffect, useRef, useState } from 'react'

interface Options {
  interval: number
  onComplete: (...args: any) => any
  onTick: (...args: any) => any
}
export function useCountdown(endTime: number, options: Options) {
  const { interval, onComplete, onTick } = options

  const [count, setCount] = useState(() => {
    return Math.max(0, endTime - Date.now())
  })

  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      onTick()
      setCount(Math.max(0, count - interval))
      if (count <= 0) {
        clearInterval(intervalRef.current)
        onComplete()
      }
    }, interval)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [onTick, interval, count, onComplete])

  return count
}
