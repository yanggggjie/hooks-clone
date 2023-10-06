import { useEffect, useRef } from 'react'

export function useRenderInfo() {
  const infoRef = useRef({
    name: 'useRenderInfo',
    renders: 0,
    sinceLastRender: 0,
    timestamp: Date.now(),
  })

  useEffect(() => {
    infoRef.current.renders++
    const now = Date.now()
    infoRef.current.sinceLastRender = now - infoRef.current.timestamp
    infoRef.current.timestamp = now
  })

  return infoRef.current
}
