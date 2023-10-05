import { useEffect, useState } from 'react'

export function useWindowScroll() {
  const [state, setState] = useState({
    x: document.body.clientWidth,
    y: document.body.clientHeight,
  })
  useEffect(() => {
    function handleScroll() {
      setState({
        x: window.scrollX,
        y: window.scrollY,
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      return window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollTo(x: number, y: number) {
    window.scrollTo(x, y)
  }

  return {
    state,
    scrollTo,
  }
}
