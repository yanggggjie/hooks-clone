import { useState } from 'react'

export function useQueue(initialValue: any[] = []) {
  const [arr, setArr] = useState(initialValue)

  function add(item: any) {
    setArr((prevArr) => {
      return [...prevArr, item]
    })
  }

  function remove() {
    let removedItem
    setArr((prevArr) => {
      removedItem = prevArr[0]
      return prevArr.slice(1)
    })
    return removedItem
  }

  function clear() {
    setArr([])
  }

  function first() {
    return arr[0]
  }

  function last() {
    return arr[arr.length - 1]
  }

  return {
    add,
    remove,
    clear,
    first,
    last,
    size: arr.length,
    queue: arr,
  }
}
