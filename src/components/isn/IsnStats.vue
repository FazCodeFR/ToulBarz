<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import type { Directive } from 'vue'
import { stats } from '@/data/isn'

const animatedValues = ref(new Map<number, number>(stats.map(stat => [stat.id, 0])))

const intervals = new Set<ReturnType<typeof setInterval>>()
onUnmounted(() => intervals.forEach(clearInterval))

const startAnimation = (id: number) => {
  const targetValue = stats.find(stat => stat.id === id)?.value ?? 0
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animatedValues.value.set(id, targetValue)
    return
  }
  let currentValue = 0
  const step = Math.max(1, Math.ceil(targetValue / 100))
  const interval = setInterval(() => {
    currentValue += step
    if (currentValue >= targetValue) {
      currentValue = targetValue
      clearInterval(interval)
      intervals.delete(interval)
    }
    animatedValues.value.set(id, currentValue)
  }, 20)
  intervals.add(interval)
}

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

const vIntersect: Directive<HTMLElement, () => void> = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        binding.value()
        observer.disconnect()
        observers.delete(el)
      }
    })
    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
</script>

<template>
  <section class="relative px-6 py-16 sm:py-20">
    <ul role="list" class="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
      <li
        v-for="stat in stats"
        :key="stat.id"
        v-intersect="() => startAnimation(stat.id)"
        class="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-accent/50"
      >
        <span
          class="text-4xl font-black tracking-tight text-white sm:text-5xl"
          :aria-label="`${stat.prefix ?? ''}${stat.value}${stat.suffix ?? ''}`"
        >
          {{ stat.prefix ?? '' }}{{ animatedValues.get(stat.id) }}<span v-if="stat.suffix" class="text-2xl sm:text-3xl">{{ stat.suffix }}</span>
        </span>
        <span class="mt-3 text-center text-sm font-semibold uppercase tracking-widest text-white/50">{{ stat.name }}</span>
        <span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-2xl bg-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </li>
    </ul>
  </section>
</template>
