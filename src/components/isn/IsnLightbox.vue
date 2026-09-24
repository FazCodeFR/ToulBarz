<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { galleryFull } from '@/data/isn'
import type { GalleryPhoto } from '@/data/isn'

const props = defineProps<{ photos: GalleryPhoto[] }>()
const index = defineModel<number | null>('index', { required: true })

const navButtonClass = 'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

const dialogRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
let returnFocusTo: HTMLElement | null = null

const current = computed(() => (index.value === null ? null : props.photos[index.value]))
const pad = (value: number) => String(value).padStart(2, '0')
const position = computed(() => pad((index.value ?? 0) + 1))
const photoCount = pad(props.photos.length)

const close = () => {
  index.value = null
}
const go = (delta: number) => {
  if (index.value === null) return
  const total = props.photos.length
  index.value = (index.value + delta + total) % total
}

// Garde le focus dans la boîte de dialogue
const trapFocus = (event: KeyboardEvent) => {
  const focusables = dialogRef.value?.querySelectorAll<HTMLElement>('button')
  if (!focusables?.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowLeft') go(-1)
  else if (event.key === 'ArrowRight') go(1)
  else if (event.key === 'Tab') trapFocus(event)
}

let touchStart: { clientX: number, clientY: number } | null = null
const onTouchStart = (event: TouchEvent) => {
  const touch = event.changedTouches[0]
  touchStart = { clientX: touch.clientX, clientY: touch.clientY }
}
const onTouchEnd = (event: TouchEvent) => {
  if (!touchStart) return
  const touch = event.changedTouches[0]
  const dx = touch.clientX - touchStart.clientX
  const dy = touch.clientY - touchStart.clientY
  touchStart = null
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1)
}

const setOpen = (open: boolean) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
}

watch(
  () => index.value !== null,
  async (open) => {
    setOpen(open)
    if (open) {
      returnFocusTo = document.activeElement as HTMLElement | null
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      returnFocusTo?.focus()
      returnFocusTo = null
    }
  },
)

// Précharge les photos voisines pour une navigation instantanée
watch(index, (value) => {
  if (value === null) return
  const total = props.photos.length
  for (const delta of [-1, 1]) {
    new Image().src = galleryFull(props.photos[(value + delta + total) % total].id)
  }
})

onUnmounted(() => {
  if (index.value !== null) setOpen(false)
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-to-class="opacity-0"
      >
        <div
          v-if="current"
          ref="dialogRef"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photos ISN 2026"
          class="fixed inset-0 z-[100] flex flex-col bg-black/95 text-white backdrop-blur-sm"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <div class="flex items-center justify-between px-4 py-4 sm:px-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-white/60 tabular-nums" aria-live="polite">
              <span class="text-accent">{{ position }}</span> / {{ photoCount }}
            </p>
            <button
              ref="closeButtonRef"
              type="button"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Fermer"
              @click="close"
            >
              <i class="i-mdi-close"></i>
            </button>
          </div>

          <div class="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" @click.self="close">
            <Transition
              mode="out-in"
              enter-active-class="transition-opacity duration-200 ease-out"
              enter-from-class="opacity-0"
              leave-active-class="transition-opacity duration-150 ease-in"
              leave-to-class="opacity-0"
            >
              <img
                :key="current.id"
                :src="galleryFull(current.id)"
                :alt="current.alt"
                class="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl shadow-black/60"
              >
            </Transition>

            <button
              type="button"
              :class="[navButtonClass, 'left-2 sm:left-6']"
              aria-label="Photo précédente"
              @click="go(-1)"
            >
              <i class="i-mdi-chevron-left"></i>
            </button>
            <button
              type="button"
              :class="[navButtonClass, 'right-2 sm:right-6']"
              aria-label="Photo suivante"
              @click="go(1)"
            >
              <i class="i-mdi-chevron-right"></i>
            </button>
          </div>

          <p class="mx-auto max-w-3xl px-6 py-5 text-center text-sm leading-relaxed text-white/70 sm:text-base">
            {{ current.alt }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
