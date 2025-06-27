<template>
  <div class="bg-white py-24 sm:py-32 relative">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Titre et texte -->
      <div class="mx-auto max-w-5xl text-center">
        <h2 class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
          Nos actions
        </h2>
      </div>

      <!-- Cartes -->
      <div class="mt-16 flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
        <div
          v-for="(item, index) in incentives"
          :key="index"
          class="relative overflow-hidden rounded-3xl shadow-lg group transition-transform hover:scale-105 w-80 h-80 md:w-64 md:h-[450px]"
        >
        <img
          :src="item.imgSrc"
          :alt="item.name"
          loading="eager"
          decoding="async"
          class="w-full h-full object-cover"
        />

          <div
            class="absolute inset-0 flex items-center justify-center px-4 text-center text-white text-lg font-semibold md:text-xl z-10 bg-black/30"
          >
            <span>{{ item.name }}</span>
          </div>

          <!-- 🎉 Emoji only for "Communauté" -->
          <!-- <div
            v-if="item.name === 'Communauté'"
            @click="openModalWithFireworks"
            class="absolute bottom-24 right-32 text-lg cursor-pointer opacity-60 hover:opacity-100 transition-opacity z-20"
            title="Surprise !"
          >
            🎉
          </div> -->
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
          src="/img/agustin.png"
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
  { name: 'Évènements & Compétitions', imgSrc: '/img/actions/action_evenements_&_competitions.jpg' },
  { name: 'Cours & Formations tous niveaux', imgSrc: '/img/actions/action_formations_tous_niveaux.jpg' },
  { name: 'Communauté', imgSrc: '/img/actions/action_communaute.jpg' },
  { name: 'Shows & Animations', imgSrc: '/img/actions/action_show_&_spectacles.jpg' }
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

