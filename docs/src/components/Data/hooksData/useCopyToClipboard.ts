import { useState } from 'react'

export function useCopyToClipboard() {
  const [lastCopiedValue, setLastCopiedValue] = useState(null)

  async function copyToClipboard(value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setLastCopiedValue(value)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return {
    lastCopiedValue,
    copyToClipboard,
  }
}
