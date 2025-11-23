<template>
<div class="bg-gradient-to-br from-gray-900 via-gray-900 to-black py-20 sm:py-28 relative overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
          <i class="i-mdi-chart-line"></i>
          Nos chiffres
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          L'asso en quelques <span class="text-accent">chiffres</span>
        </h2>
      </div>
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="group relative flex flex-col items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-accent/50 transition-all duration-300"
          v-intersect="() => startAnimation(stat.id)"
        >
          <dd class="text-5xl sm:text-6xl font-extrabold tracking-tight text-accent drop-shadow-lg">
            {{ animatedValues[stat.id] }}
          </dd>
          <dt class="mt-3 text-base font-medium text-gray-300 text-center">{{ stat.name }}</dt>
          <!-- Hover glow effect -->
          <div class="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </dl>
    </div>
  </div>

  <!-- Éléments décoratifs améliorés -->
  <div class="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-accent/20 to-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none"></div>
</div>

</template>

<script setup>
import { ref } from 'vue'
const stats = [
  { id: 1, name: 'Adhérents', value: 68 },
  { id: 2, name: 'Bénévoles', value: 15 },
  { id: 3, name: 'Personnes initiées', value: 1785 },
  { id: 4, name: 'Évènements réalisés en 2 ans', value: 192 },
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

