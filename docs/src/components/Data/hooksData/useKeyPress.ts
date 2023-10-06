//
import { useEffect } from 'react'

interface Options {
  events?: string[]
  target?: HTMLElement
  eventOptions?: boolean | AddEventListenerOptions
}
export function useKeyPress(
  key: string,
  cb: (...args: any) => any,
  options: Options = {},
) {
  useEffect(() => {
    window.addEventListener('keydown', (evt) => {
      if (evt.key === key) cb(evt)
    })
    return () => {
      window.removeEventListener('keydown', cb)
    }
  }, [cb, key])
}
