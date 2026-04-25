<template>
  <Transition name="fade">
    <button
      v-if="isVisible && !isMobileMenuOpen"
      @click="scrollToTop"
      class="fixed z-40 bottom-4 right-4 group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-110"
      aria-label="Retour en haut"
    >
      <i class="i-mdi-chevron-up text-2xl transition-transform duration-300 group-hover:-translate-y-0.5"></i>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'

const { isMobileMenuOpen } = storeToRefs(useStore())

const isVisible = ref(false)

const scrollToTop = () => {
  const startY = window.scrollY
  if (startY === 0) return
  const duration = 1200
  const startTime = performance.now()
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY - startY * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
