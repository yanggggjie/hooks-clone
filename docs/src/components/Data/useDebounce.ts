import { useEffect, useRef, useState } from 'react'

export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const timeRef = useRef<number | null>(null) // specify the type here

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }

    timeRef.current = setTimeout(() => {
      setDebouncedValue(value)
    }, delay) as any as number

    return () => {
      if (timeRef.current) clearTimeout(timeRef.current)
    }
  }, [value, delay])

  return {
    debouncedValue,
  }
}
