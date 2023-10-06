import { useState } from 'react'

export function useDefault(initialValue: any, defaultValue: any) {
  const [state, setState] = useState(() => {
    return initialValue || defaultValue
  })

  return {
    state,
    setState,
  }
}
