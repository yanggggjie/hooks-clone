import { useEffect, useState } from 'react'

export function useVisibilityChange() {
  const [documentVisible, setDocumentVisible] = useState(true)
  useEffect(() => {
    function handleVisibilityChange() {
      setDocumentVisible(!document.hidden)
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  })

  return documentVisible
}
