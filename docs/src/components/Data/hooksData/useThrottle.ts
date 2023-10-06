import { useEffect, useRef, useState } from 'react'

export function useThrottle(value: any, interval: number) {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastThrottledValueRef = useRef(value)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (value !== lastThrottledValueRef.current && !timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        setThrottledValue(value)
        lastThrottledValueRef.current = value
        timeoutRef.current = null
      }, interval)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [value, interval])

  return throttledValue
}
