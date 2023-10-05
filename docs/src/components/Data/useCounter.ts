//
import { useState } from 'react'

interface Options {
  min?: number
  max?: number
}
export function useCounter(startingValue: number, options: Options = {}) {
  const [count, setCount] = useState(startingValue)

  function increment() {
    setCount((prev) => {
      if (options.max !== undefined && prev >= options.max) {
        return prev
      }
      return prev + 1
    })
  }
  function decrement() {
    setCount((prev) => {
      if (options.min !== undefined && prev <= options.min) {
        return prev
      }
      return prev - 1
    })
  }

  function reset() {
    setCount(startingValue)
  }

  return {
    count,
    increment,
    decrement,
    set: setCount,
    reset,
  }
}
