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
    'fade-up': 'opacity-0 translate-y-8',
    'fade-down': 'opacity-0 -translate-y-8',
    'fade-left': 'opacity-0 translate-x-8',
    'fade-right': 'opacity-0 -translate-x-8',
    'zoom-in': 'opacity-0 scale-95',
    'zoom-out': 'opacity-0 scale-105',
  }

  onMounted(() => {
    if (!elementRef.value) return

    // Set initial state
    const initialClassList = initialClasses[animation].split(' ')
    elementRef.value.classList.add(...initialClassList, 'transition-all', 'duration-700', 'ease-out')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Remove initial classes and add visible state
            const el = entry.target as HTMLElement
            initialClassList.forEach(cls => el.classList.remove(cls))
            el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')

            if (once && observer) {
              observer.unobserve(el)
            }
          } else if (!once) {
            isVisible.value = false
            const el = entry.target as HTMLElement
            el.classList.remove('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
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

// Directive for easier use in templates
export const vScrollAnimate = {
  mounted(el: HTMLElement, binding: { value?: { animation?: AnimationType; delay?: number; threshold?: number } }) {
    const { animation = 'fade-up', delay = 0, threshold = 0.1 } = binding.value || {}

    const initialClasses: Record<AnimationType, string[]> = {
      'fade-up': ['opacity-0', 'translate-y-8'],
      'fade-down': ['opacity-0', '-translate-y-8'],
      'fade-left': ['opacity-0', 'translate-x-8'],
      'fade-right': ['opacity-0', '-translate-x-8'],
      'zoom-in': ['opacity-0', 'scale-95'],
      'zoom-out': ['opacity-0', 'scale-105'],
    }

    const initialClassList = initialClasses[animation]
    el.classList.add(...initialClassList, 'transition-all', 'duration-700', 'ease-out')

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initialClassList.forEach(cls => el.classList.remove(cls))
            el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
            observer.unobserve(el)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
  }
}
