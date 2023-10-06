import { useEffect } from 'react'

export function usePreferredLanguage() {
  return navigator.language
}
