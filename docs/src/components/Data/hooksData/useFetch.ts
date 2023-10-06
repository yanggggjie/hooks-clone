import { useEffect, useState } from 'react'

export function useFetch(
  url: string,
  options: Record<string, string | number | boolean>,
) {
  const [state, setState] = useState({
    data: null,
    error: null,
  })
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url, options)
        const data = await res.json()
        setState({ data, error: null })
      } catch (e) {
        setState({ data: null, error: e })
      }
    }

    getData()
  }, [url, options])

  return {
    state,
  }
}
