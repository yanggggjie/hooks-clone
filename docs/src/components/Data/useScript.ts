import { useEffect, useState } from 'react'

interface Options {
  removeOnUnmount?: boolean
}
type Status = 'idle' | 'loading' | 'ready' | 'error'
export function useScript(src: string, options: Options) {
  const [status, setStatus] = useState<Status>('idle')
  useEffect(() => {
    setStatus('loading')
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => {
      setStatus('ready')
    }
    script.onerror = () => {
      setStatus('error')
    }
    document.body.appendChild(script)
  }, [src])

  return status
}
