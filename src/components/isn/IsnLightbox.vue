<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { galleryFull, galleryThumb } from '@/data/isn'
import type { GalleryPhoto } from '@/data/isn'

const props = defineProps<{ photos: GalleryPhoto[] }>()
const index = defineModel<number | null>('index', { required: true })

const navButtonClass = 'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

const dialogRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const thumbRefs: (HTMLButtonElement | null)[] = []
let returnFocusTo: HTMLElement | null = null

const current = computed(() => (index.value === null ? null : props.photos[index.value]))
const pad = (value: number) => String(value).padStart(2, '0')
const position = computed(() => pad((index.value ?? 0) + 1))
const photoCount = computed(() => pad(props.photos.length))

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

// Swipe : la photo suit le doigt, l'axe est verrouillé dès 10px et les gestes à plusieurs doigts (pinch-zoom) sont ignorés
const dragX = ref(0)
const dragging = ref(false)
let touchStart: { clientX: number, clientY: number, axis: 'x' | 'y' | null } | null = null

const resetDrag = () => {
  touchStart = null
  dragX.value = 0
  dragging.value = false
}
const onTouchStart = (event: TouchEvent) => {
  if (event.touches.length > 1) return resetDrag()
  const touch = event.touches[0]
  touchStart = { clientX: touch.clientX, clientY: touch.clientY, axis: null }
}
const onTouchMove = (event: TouchEvent) => {
  if (event.touches.length > 1) return resetDrag()
  if (!touchStart) return
  const touch = event.touches[0]
  const dx = touch.clientX - touchStart.clientX
  const dy = touch.clientY - touchStart.clientY
  if (!touchStart.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 10) {
    touchStart.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
  }
  if (touchStart.axis === 'x') {
    dragging.value = true
    dragX.value = dx
  }
}
const onTouchEnd = () => {
  const dx = dragX.value
  const swiped = touchStart?.axis === 'x' && Math.abs(dx) > 50
  resetDrag()
  if (swiped) go(dx < 0 ? 1 : -1)
}

const setOpen = (open: boolean) => {
  const { style } = document.body
  if (open) {
    // Compense la barre de défilement masquée pour éviter que la page ne se décale
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    style.paddingRight = scrollbar > 0 ? `${scrollbar}px` : ''
    style.overflow = 'hidden'
  } else {
    style.overflow = ''
    style.paddingRight = ''
  }
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
watch(index, async (value, previous) => {
  if (value === null) return
  const total = props.photos.length
  for (const delta of [-1, 1]) {
    new Image().src = galleryFull(props.photos[(value + delta + total) % total].id)
  }

  // Centre la miniature active (instantané à l'ouverture ou si l'utilisateur limite les animations)
  await nextTick()
  const smooth = previous !== null && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  thumbRefs[value]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: smooth ? 'smooth' : 'auto' })
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

          <div
            class="relative flex min-h-0 flex-1 touch-pan-y touch-pinch-zoom items-center justify-center px-4 sm:px-20"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend.passive="onTouchEnd"
            @touchcancel.passive="resetDrag"
          >
            <!-- Le déplacement est porté par ce wrapper pour ne pas interférer avec les transitions d'opacité de l'image -->
            <div
              class="flex h-full w-full items-center justify-center"
              :class="!dragging && 'transition-transform duration-300 ease-out motion-reduce:transition-none'"
              :style="{ transform: `translateX(${dragX}px)` }"
              @click.self="close"
            >
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
                  draggable="false"
                  class="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl shadow-black/60"
                >
              </Transition>
            </div>

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

          <!-- Sur les écrans peu hauts (mobile en paysage), on libère de la place pour la photo -->
          <p class="mx-auto line-clamp-2 max-w-3xl px-6 pb-3 pt-5 text-center text-sm leading-relaxed text-white/70 sm:text-base [@media(max-height:500px)]:py-2">
            {{ current.alt }}
          </p>

          <ul role="list" class="flex gap-2 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-8 [@media(max-height:500px)]:hidden">
            <li v-for="(photo, i) in photos" :key="photo.id" class="shrink-0 first:ml-auto last:mr-auto">
              <button
                :ref="(el) => { thumbRefs[i] = el as HTMLButtonElement | null }"
                type="button"
                class="block h-14 w-20 overflow-hidden rounded-md border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                :class="i === index ? 'border-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'"
                :aria-label="`Voir la photo ${i + 1} : ${photo.alt}`"
                :aria-current="i === index ? 'true' : undefined"
                @click="index = i"
              >
                <img :src="galleryThumb(photo.id)" alt="" loading="lazy" decoding="async" class="h-full w-full object-cover">
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
