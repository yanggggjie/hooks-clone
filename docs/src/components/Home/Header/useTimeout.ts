import { useEffect, useRef } from 'react'

export function useTimeout(cb: (...args: any[]) => any, delay: number) {
  const timeoutRef = useRef<number>()
  useEffect(() => {
    timeoutRef.current = setTimeout(cb, delay)
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [cb, delay])
}
