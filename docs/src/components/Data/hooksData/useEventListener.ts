import { DOMElement, Ref, RefObject, useEffect } from 'react'

interface Options {
  capture?: boolean
  once?: boolean
  passive?: boolean
}

export function useEventListener(
  target: HTMLElement | RefObject<HTMLElement>,
  eventName: string,
  handler: (...args: any) => any,
  options: Options = {},
) {
  useEffect(() => {
    const targetElement =
      target instanceof HTMLElement ? target : target.current
    targetElement.addEventListener(eventName, handler, options)
    return () => {
      targetElement.removeEventListener(eventName, handler, options)
    }
  }, [eventName, handler, options, target])
}
