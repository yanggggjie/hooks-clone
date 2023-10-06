import { useEffect, useRef } from 'react'

export function useLogger(name: string) {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) {
      console.log('Component ' + name + ' mounted')
    } else {
      console.log('Component ' + name + ' updated')
    }

    return () => {
      console.log('Component ' + name + ' unmounted')
    }
  }, [name])
}
