import { useEffect, useState } from 'react'

export function useLocalStorage(key: string, initialValue: any) {
  const [localState, setLocalState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localState))
  }, [key, localState])

  return {
    localState,
    setLocalState,
  }
}
