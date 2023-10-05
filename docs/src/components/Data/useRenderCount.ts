import { useEffect, useRef, useState } from 'react'

export function useRenderCount() {
  const renderCountRef = useRef(0)
  useEffect(() => {
    renderCountRef.current++
  })

  return renderCountRef.current
}
