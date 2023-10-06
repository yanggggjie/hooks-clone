import { RefObject, useEffect, useState } from 'react'

export function useMouse(
  state: Record<string, any>,
  ref: RefObject<HTMLElement>,
) {
  const [mouseState, setMouseState] = useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  })
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const element = ref.current
      if (element) {
        const elementPosition = element.getBoundingClientRect()
        setMouseState({
          x: e.pageX,
          y: e.pageY,
          elementX: e.pageX - elementPosition.left,
          elementY: e.pageY - elementPosition.top,
          elementPositionX: elementPosition.left,
          elementPositionY: elementPosition.top,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseState, ref])

  return {
    mouseState,
  }
}
