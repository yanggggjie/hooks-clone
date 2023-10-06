import { useEffect, useRef } from 'react'

export function usePrevious(newValue: any) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current = newValue
  }, [newValue])
  return ref.current
}
