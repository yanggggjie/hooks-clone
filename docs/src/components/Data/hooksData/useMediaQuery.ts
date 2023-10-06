export function useMediaQuery(query: string) {
  return window.matchMedia(query).matches
}
