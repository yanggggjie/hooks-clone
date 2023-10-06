import { useState } from 'react'

export function useList(defaultList: any[] = []) {
  const [list, setList] = useState(defaultList)

  function push(item: any) {
    setList((prev) => {
      return [...prev, item]
    })
  }

  function removeAt(index: number) {
    setList((prev) => {
      return prev.filter((_, i) => {
        return i !== index
      })
    })
  }

  function insertAt(index: number, item: any) {
    setList((prev) => {
      return [...prev.slice(0, index), item, ...prev.slice(index)]
    })
  }

  function updateAt(index: number, item: any) {
    setList((prev) => {
      return [...prev.slice(0, index), item, ...prev.slice(index + 1)]
    })
  }

  function clear() {
    setList([])
  }

  return {
    list,
    set: setList,
    push,
    removeAt,
    insertAt,
    updateAt,
    clear,
  }
}
