import { useEffect, useRef } from 'react'

export function useTimeout(cb: (...args: any) => any, ms: number) {
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(cb, ms)
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [cb, ms])

  function destory() {
    clearTimeout(timeoutRef.current)
  }

  return destory
}
