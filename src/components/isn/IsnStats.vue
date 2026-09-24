<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import type { Directive } from 'vue'
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { stats } from '@/data/isn'

// Séparateur de milliers déterministe (évite les écarts toLocaleString Node / navigateur)
const formatNumber = (value: number) => {
  const digits = String(value)
  return digits.length > 3 ? `${digits.slice(0, -3)} ${digits.slice(-3)}` : digits
}

const totalPeople = Math.round(
  stats.filter(stat => stat.highlight).reduce((sum, stat) => sum + stat.value, 0) / 100,
) * 100

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
  <section class="relative overflow-hidden px-6 py-16 sm:py-24">
    <div class="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>

    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
      <p class="text-sm font-bold uppercase tracking-[0.3em] text-white/50">✦ Le bilan ✦</p>
      <h2 class="mt-4 text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
        ISN 2026 <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">en chiffres</span>
      </h2>
    </div>

    <ul role="list" class="relative mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-6">
      <li
        v-for="(stat, index) in stats"
        :key="stat.id"
        v-intersect="() => startAnimation(stat.id)"
        v-scroll-animate="{ animation: 'fade-up', delay: index * 100 }"
        class="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300"
        :class="stat.highlight
          ? 'col-span-2 items-start border-accent/30 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-8 hover:border-accent/60 sm:p-10 lg:col-span-3'
          : ['items-center border-white/10 bg-white/5 p-8 text-center hover:border-accent/50 lg:col-span-2', index === stats.length - 1 ? 'col-span-2' : 'col-span-1']"
      >
        <span v-if="stat.highlight" aria-hidden="true" class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl"></span>

        <span
          aria-hidden="true"
          class="relative flex items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/30"
          :class="stat.highlight ? 'h-14 w-14 text-3xl' : 'h-11 w-11 text-2xl'"
        >
          <i :class="stat.icon"></i>
        </span>

        <span
          class="relative font-black tabular-nums tracking-tight text-white"
          :class="stat.highlight ? 'mt-6 text-6xl sm:text-7xl lg:text-8xl' : 'mt-4 text-4xl sm:text-5xl'"
          :aria-label="formatNumber(stat.value)"
        >
          {{ formatNumber(animatedValues.get(stat.id) ?? 0) }}
        </span>
        <span
          class="relative font-semibold uppercase tracking-widest"
          :class="stat.highlight ? 'mt-2 text-base text-white/70 sm:text-lg' : 'mt-2 text-xs text-white/50 sm:text-sm'"
        >
          {{ stat.name }}
        </span>

        <span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-3xl bg-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </li>
    </ul>

    <p class="relative mx-auto mt-10 max-w-2xl text-center text-sm font-semibold uppercase tracking-widest text-white/50">
      Près de <span class="text-accent">{{ formatNumber(totalPeople) }}</span> personnes réunies sur le week-end
    </p>
  </section>
</template>
