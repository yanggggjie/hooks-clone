export function useClipboard() {
  async function setToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      return {
        success: true,
      }
    } catch (e) {
      console.error(e)
      return {
        success: false,
      }
    }
  }
  return {
    setToClipboard,
  }
}
