<template>
<div class="bg-gradient-to-br from-gray-900 to-black py-24 sm:py-32 relative overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center">
        <h2 class="text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-white sm:text-5xl">L'asso en quelques chiffres</h2>
      </div>
      <dl class="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="flex flex-col bg-gray-900 p-8"
          v-intersect="() => startAnimation(stat.id)"
        >
          <dt class="text-lg font-semibold leading-7 text-gray-300">{{ stat.name }}</dt>
          <dd class="order-first text-5xl font-bold tracking-tight text-accent">
            {{ animatedValues[stat.id] }}
          </dd>
        </div>
      </dl>
    </div>
  </div>

  <!-- Éléments décoratifs -->
  <div class="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
  <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
</div>

</template>

<script setup>
import { ref } from 'vue'
const stats = [
  { id: 1, name: 'Adhérents', value: 56 },
  { id: 2, name: 'Bénévoles', value: 18 },
  { id: 3, name: 'Élèves rencontrés', value: 426 },
  { id: 4, name: 'Personnes initiées', value: 368 },
]

// Valeurs animées
const animatedValues = ref(stats.reduce((acc, stat) => {
  acc[stat.id] = 0
  return acc
}, {}))

const startAnimation = (id) => {
  const targetValue = stats.find(stat => stat.id === id).value
  let currentValue = 0
  const step = Math.ceil(targetValue / 100)
  const interval = setInterval(() => {
    currentValue += step
    if (currentValue >= targetValue) {
      currentValue = targetValue
      clearInterval(interval)
    }
    animatedValues.value[id] = currentValue
  }, 20)
}

const vIntersect = {
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

