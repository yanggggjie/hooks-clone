import { useEffect, useRef, useState } from 'react'

interface Options {
  maxRetries: number
}

export function useContinuousRetry(
  callback: (...args: any) => any,
  interval: number = 100,
  options: Options = {
    maxRetries: Infinity,
  },
) {
  const [success, setSuccess] = useState(false)
  const retryCount = useRef(0)
  const timer = useRef(null)
  useEffect(() => {
    timer.current = setInterval(() => {
      callback()
      retryCount.current += 1
      if (retryCount.current >= options.maxRetries) {
        clearInterval(timer.current)
        setSuccess(true)
      }
    }, interval)

    return () => {
      clearInterval(timer.current)
    }
  }, [interval, callback, options.maxRetries])

  return success
}
