import { useState } from 'react'

export function useToggle(initialValue: boolean = false) {
  const [toggle, setToggle] = useState(initialValue)
  return {
    toggle,
    setToggle,
  }
}
