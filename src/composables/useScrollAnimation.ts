import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation(
  elementRef: Ref<HTMLElement | null>,
  animation: AnimationType = 'fade-up',
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const animationClasses: Record<AnimationType, string> = {
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'zoom-in': 'animate-zoom-in',
    'zoom-out': 'animate-zoom-out',
  }

  const initialClasses: Record<AnimationType, string> = {
    'fade-up': 'translate-y-4',
    'fade-down': '-translate-y-4',
    'fade-left': 'translate-x-8',
    'fade-right': '-translate-x-8',
    'zoom-in': 'scale-95',
    'zoom-out': 'scale-105',
  }

  onMounted(() => {
    if (!elementRef.value) return

    // Set initial state
    const initialClassList = initialClasses[animation].split(' ')
    elementRef.value.classList.add(...initialClassList, 'transition-transform', 'duration-700', 'ease-out', 'will-change-transform')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            const el = entry.target as HTMLElement
            initialClassList.forEach(cls => el.classList.remove(cls))
            el.classList.add('translate-y-0', 'translate-x-0', 'scale-100')

            if (once && observer) {
              observer.unobserve(el)
            }
          } else if (!once) {
            isVisible.value = false
            const el = entry.target as HTMLElement
            el.classList.remove('translate-y-0', 'translate-x-0', 'scale-100')
            el.classList.add(...initialClassList)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible,
    animationClass: animationClasses[animation],
  }
}

const directiveInitialClasses: Record<AnimationType, string[]> = {
  'fade-up': ['translate-y-4'],
  'fade-down': ['-translate-y-4'],
  'fade-left': ['translate-x-8'],
  'fade-right': ['-translate-x-8'],
  'zoom-in': ['scale-95'],
  'zoom-out': ['scale-105'],
}

type ScrollAnimateBinding = {
  value?: { animation?: AnimationType; delay?: number; threshold?: number }
}

// Transform-only animation: the element stays fully opaque so the parent's
// background never bleeds through. Animation runs on GPU (compositor-only)
// for smooth motion. Horizontal translates are clipped by main's
// `overflow-x-clip`; vertical offsets are kept small (16px) to minimise the
// brief layout gap during the slide-in.
export const vScrollAnimate = {
  // Bake the initial offset state into the SSR-rendered HTML so the
  // animation starts from the same position the server rendered, avoiding
  // any post-hydration snap.
  getSSRProps(binding: ScrollAnimateBinding) {
    const { animation = 'fade-up', delay = 0 } = binding.value || {}
    const classes = [
      ...directiveInitialClasses[animation],
      'transition-transform',
      'duration-700',
      'ease-out',
      'will-change-transform',
    ].join(' ')
    return {
      class: classes,
      style: delay > 0 ? `transition-delay:${delay}ms` : undefined,
    }
  },
  mounted(el: HTMLElement, binding: ScrollAnimateBinding) {
    const { animation = 'fade-up', delay = 0, threshold = 0.1 } = binding.value || {}

    const initialClassList = directiveInitialClasses[animation]
    el.classList.add(...initialClassList, 'transition-transform', 'duration-700', 'ease-out', 'will-change-transform')

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const reveal = () => {
      initialClassList.forEach(cls => el.classList.remove(cls))
      el.classList.add('translate-y-0', 'translate-x-0', 'scale-100')
    }

    // If the element is already in view at mount (above the fold after
    // hydration), reveal it on the next frame so the transition runs from
    // the SSR'd hidden state instead of snapping in.
    const rect = el.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (inViewport) {
      requestAnimationFrame(() => requestAnimationFrame(reveal))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal()
            observer.unobserve(el)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
  }
}
