import { useEffect, useState } from 'react'

export function useSessionStorage(key: string, initialValue: any) {
  const [localState, setLocalState] = useState(() => {
    const storedValue = window.sessionStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(localState))
  }, [localState, key])
  return {
    localState,
    setLocalState,
  }
}
