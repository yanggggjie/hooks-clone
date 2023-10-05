import { useEffect, useRef } from 'react'

interface Options {
  ms: number
  when: boolean
  startImmediately: boolean
}
export function useIntervalWhen(cb: (...args: any) => any, options: Options) {
  const intervalReff = useRef(null)

  useEffect(() => {
    if (options.when) {
      if (options.startImmediately) cb()
      intervalReff.current = setInterval(() => {
        cb()
      }, options.ms)
    } else {
      clearInterval(intervalReff.current)
    }
    return () => {
      if (!intervalReff.current) return
      clearInterval(intervalReff.current)
    }
  }, [cb, options.when, options.startImmediately, options.ms])

  function destory() {
    if (!intervalReff.current) return
    clearInterval(intervalReff.current)
  }

  return destory
}
