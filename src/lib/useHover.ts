import { useEffect, useRef, useState } from 'react'

export function useHover() {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const currentRef = ref.current

    function handleMouseOver() {
      setIsHovered(true)
    }

    function handleMouseOut() {
      setIsHovered(false)
    }

    if (currentRef) {
      currentRef.addEventListener('mouseover', handleMouseOver)
      currentRef.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseover', handleMouseOver)
        currentRef.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return { ref, isHovered }
}
