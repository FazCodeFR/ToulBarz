<template>
  <div class="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-28 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
      <!-- Titre et texte -->
      <div class="mx-auto max-w-5xl text-center">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
          <i class="i-mdi-lightning-bolt"></i>
          Ce que nous faisons
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Nos <span class="text-accent">actions</span>
        </h2>
      </div>

      <!-- Cartes -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in incentives"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[3/4]"
        >
          <img
            :src="item.imgSrc"
            :alt="item.name"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

          <!-- Content -->
          <div class="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
            <span class="text-white text-lg md:text-xl font-bold drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {{ item.name }}
            </span>
            <div class="h-0.5 w-0 bg-accent group-hover:w-16 transition-all duration-500 mt-2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 🎉 Popup -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
    >
      <div class="bg-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 space-y-2  p-6 rounded-2xl shadow-xl max-w-sm text-center relative overflow-hidden z-10">
        <button @click="closeModal" class="absolute top-2 right-3 text-gray-500 hover:text-black text-xl">
          ✖
        </button>
        <div class="text-center text-white ">
          <h3 class="text-3xl font-extrabold">🎉🎉🎉</h3>
          <h3 class="text-3xl font-extrabold">Joyeux anniversaire</h3>
          <h3 class="text-2xl font-bold">Monsieur le Président Agustin</h3>
          <h3 class="text-xl font-medium">Merci pour tout 🙏</h3>
        </div>

        <img
          src="/img/agustin.webp"
          alt="Happy Birthday"
          class="rounded-lg mb-4 z-10"
        />
      </div>
    </div>

    <!-- 🌟 Fireworks on whole screen -->
    <Fireworks
      v-if="showFireworks"
      class="fixed inset-0 z-[9999] pointer-events-none"
      :options="{
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        rocketsPoint: { min: 50, max: 50 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        traceLength: 5,
        explosion: 6
      }"
    />
  </div>
</template>



<script setup>
import { ref } from 'vue'
import { Fireworks } from '@fireworks-js/vue'

const incentives = [
  { name: 'Évènements & Compétitions', imgSrc: '/img/actions/action_evenements_&_competitions.webp' },
  { name: 'Cours & Formations tous niveaux', imgSrc: '/img/actions/action_formations_tous_niveaux.webp' },
  { name: 'Communauté', imgSrc: '/img/actions/action_communaute.webp' },
  { name: 'Shows & Animations', imgSrc: '/img/actions/action_show_&_spectacles.webp' }
]

const showModal = ref(false)
const showFireworks = ref(false)

const openModalWithFireworks = () => {
  showModal.value = true
  showFireworks.value = true

  setTimeout(() => {
    showFireworks.value = false
  }, 11000)
}

const closeModal = () => {
  showModal.value = false
}
</script>

