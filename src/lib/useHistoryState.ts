import { useEffect, useState } from 'react'

interface IState {
  [key: string]: string | number
}

export function useHistoryState(initialPresent: IState = {}) {
  const [stateArr, setStateArr] = useState<IState[]>([initialPresent])
  const [currentIndex, setCurrentIndex] = useState(0)

  const canUndo = currentIndex > 0
  const canRedo = currentIndex < stateArr.length - 1

  function set(state: IState) {
    const newStateArr = stateArr.slice(0, currentIndex + 1).concat(state)
    setStateArr(newStateArr)
    setCurrentIndex(newStateArr.length - 1)
  }

  function undo() {
    if (canUndo) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function redo() {
    if (canRedo) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function clear() {
    setStateArr([initialPresent])
    setCurrentIndex(0)
  }

  return {
    state: stateArr[currentIndex],
    set,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  }
}
