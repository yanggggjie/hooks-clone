import { useEffect, useRef } from 'react'

export function useIntersectionObserver(
  threshold: number = 1,
  root: HTMLElement | null = null,
  rootMargin: string = '0px',
) {
  const targetRef = useRef(null)
  const entryRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (targetRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entryRef.current = entries[0]
        },
        {
          threshold,
          root,
          rootMargin,
        },
      )
      observer.observe(targetRef.current)
      observerRef.current = observer
    }
    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [root, rootMargin, threshold])

  return {
    ref: targetRef,
    entry: entryRef.current,
  }
}
