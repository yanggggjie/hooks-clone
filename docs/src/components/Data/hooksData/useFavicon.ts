import { useEffect } from 'react'

export function useFavicon(url: string) {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = url
    document.body.append(link)
  }, [url])
}
