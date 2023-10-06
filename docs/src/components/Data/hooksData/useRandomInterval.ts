import { useEffect, useRef } from 'react'

interface Options {
  minDelay: number
  maxDelay: number
}
function randomInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function useRandomInterval(cb: (...args: any) => any, options: Options) {
  const timerRef = useRef(null)

  useEffect(() => {
    function set() {
      timerRef.current = setTimeout(
        () => {
          cb()
          set()
        },
        randomInterval(options.minDelay, options.maxDelay),
      )
    }
    set()

    return () => {
      if (!timerRef.current) return
      clearTimeout(timerRef.current)
    }
  }, [cb, options.maxDelay, options.minDelay])

  function destory() {
    if (!timerRef.current) return
    clearTimeout(timerRef.current)
  }

  return destory
}
