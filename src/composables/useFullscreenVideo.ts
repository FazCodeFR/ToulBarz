import { onMounted, onUnmounted, ref } from 'vue'

type WebkitDocument = Document & { webkitFullscreenElement?: Element | null }
type LockableOrientation = ScreenOrientation & {
  lock?: (orientation: 'landscape') => Promise<void>
}

// Suit l'état plein écran pour passer les lecteurs de "cover" (cadre arrondi) à "contain" (plein écran)
export function useFullscreenVideo() {
  const isFullscreen = ref(false)

  const onChange = () => {
    const doc = document as WebkitDocument
    isFullscreen.value = !!(doc.fullscreenElement || doc.webkitFullscreenElement)

    // Mobile : bascule en paysage pendant le plein écran (ignoré là où ce n'est pas supporté, ex. iOS)
    const orientation = screen.orientation as LockableOrientation | undefined
    if (isFullscreen.value) {
      orientation?.lock?.('landscape').catch(() => {})
    } else {
      orientation?.unlock?.()
    }
  }

  onMounted(() => {
    document.addEventListener('fullscreenchange', onChange)
    document.addEventListener('webkitfullscreenchange', onChange)
  })

  onUnmounted(() => {
    document.removeEventListener('fullscreenchange', onChange)
    document.removeEventListener('webkitfullscreenchange', onChange)
  })

  return { isFullscreen }
}
