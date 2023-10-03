import { useEffect } from 'react'

export function UsePageLeave(cb: (...args: any) => any) {
  useEffect(() => {
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        cb()
      }
    }
    window.addEventListener('mouseout', handleMouseLeave)
    return () => {
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [cb])
}
