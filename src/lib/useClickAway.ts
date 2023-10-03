import { useEffect, useRef } from 'react'

export function useClickAway(callback: (...args: any) => any) {
  const ref = useRef(null)
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // 点击对象不被包含在ref.current中
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e)
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [callback])

  return {
    ref,
  }
}
