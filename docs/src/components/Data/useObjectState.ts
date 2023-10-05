import { useState } from 'react'

export function useObjectState(initialValue: Record<string, any>) {
  const [state, setState] = useState(initialValue)

  function setPartialState(partialState: Record<string, any>) {
    setState((prevState) => {
      return {
        ...prevState,
        ...partialState,
      }
    })
  }

  return {
    state,
    setPartialState,
  }
}
