import { useEffect, useRef } from 'react'

export function useInterval(cb: (...args: any) => any, ms: number) {
  const intervalRef = useRef(null)

  function clear() {
    if (!intervalRef.current) return
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      cb()
    }, ms)

    return () => {
      clear()
    }
  }, [cb, ms])

  return clear
}
