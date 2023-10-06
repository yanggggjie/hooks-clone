import { useEffect, useState } from 'react'

export function useOrientation() {
  const [type, setType] = useState(window.screen.orientation.type)
  const [angle, setAngle] = useState(window.screen.orientation.angle)
  useEffect(() => {
    const handleOrientationChange = () => {
      setType(window.screen.orientation.type)
      setAngle(window.screen.orientation.angle)
    }

    window.screen.orientation.addEventListener(
      'change',
      handleOrientationChange,
    )
    return () => {
      window.screen.orientation.removeEventListener(
        'change',
        handleOrientationChange,
      )
    }
  }, [])

  return {
    angle,
    type,
  }
}
