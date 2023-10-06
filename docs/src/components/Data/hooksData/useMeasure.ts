import { useRef } from 'react'

export function useMeasure() {
  const ref = useRef(null)
  const rect = ref.current ? ref.current.getBoundingClientRect() : null

  return {
    ref,
    rect,
  }
}
