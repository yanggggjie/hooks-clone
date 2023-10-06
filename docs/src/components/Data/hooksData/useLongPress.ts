interface Options {
  threshold: number
  onStart: (...args: any) => any
  onEnd: (...args: any) => any
  onCancel: (...args: any) => any
}

export function useLongPress(
  callback: (...args: any) => any,
  options: Options,
) {
  const { threshold, onStart, onEnd, onCancel } = options

  function onMouseDown(event: MouseEvent) {
    onStart(event)
    const timeout = setTimeout(() => {
      callback(event)
      onEnd(event)
    }, threshold)
    event.currentTarget.addEventListener('mouseup', () => {
      clearTimeout(timeout)
      onCancel(event)
    })
  }
  function onMouseUp(event: MouseEvent) {
    onEnd(event)
  }
  function onMouseLeave(event: MouseEvent) {
    onEnd(event)
  }
  function onTouchStart(event: TouchEvent) {
    onStart(event)
    const timeout = setTimeout(() => {
      callback(event)
      onEnd(event)
    }, threshold)
    event.currentTarget.addEventListener('touchend', () => {
      clearTimeout(timeout)
      onCancel(event)
    })
  }
  function onTouchEnd(event: TouchEvent) {
    onEnd(event)
  }

  return {
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
  }
}
