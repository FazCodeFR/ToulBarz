<template>
<div class="bg-gradient-to-br from-gray-900 via-gray-900 to-black py-20 sm:py-28 relative overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 class="mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        L'asso en quelques <span class="text-accent">chiffres</span>
      </h2>
      <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
        <li
          v-for="stat in stats"
          :key="stat.id"
          v-intersect="() => startAnimation(stat.id)"
          class="flex flex-col items-start border-l border-white/15 pl-4 sm:pl-6"
        >
          <span class="text-6xl lg:text-8xl font-extrabold tracking-tighter tabular-nums text-accent">
            {{ animatedValues.get(stat.id) }}
          </span>
          <span class="mt-3 text-base font-medium text-white/70">{{ stat.name }}</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Éléments décoratifs améliorés -->
  <div class="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-accent/20 to-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none"></div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Directive } from 'vue'
const stats = [
  { id: 1, name: 'Adhérents', value: 50 },
  { id: 2, name: 'Bénévoles', value: 15 },
  { id: 3, name: 'Personnes initiées', value: 2500 },
  { id: 4, name: 'Évènements réalisés', value: 350 },
]

// Valeurs animées
const animatedValues = ref(new Map<number, number>(stats.map(stat => [stat.id, 0])))

const startAnimation = (id: number) => {
  const targetValue = stats.find(stat => stat.id === id)?.value ?? 0
  let currentValue = 0
  const step = Math.ceil(targetValue / 100)
  const interval = setInterval(() => {
    currentValue += step
    if (currentValue >= targetValue) {
      currentValue = targetValue
      clearInterval(interval)
    }
    animatedValues.value.set(id, currentValue)
  }, 20)
}

const vIntersect: Directive<HTMLElement, () => void> = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        binding.value()
        observer.disconnect()
      }
    })
    observer.observe(el)
  }
}
</script>

