<template>
  <div class="relative h-[100vh] overflow-hidden">
    <!-- Image de fond -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style="background-image: url('/img/home_heroe.png');"
    ></div>
    <!-- Vidéo de fond (mobile ou desktop selon contexte) -->
    <video
      v-show="videoLoaded"
      @loadeddata="videoLoaded = true"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500"
    >
      <source :src="videoSrc" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>

    <!-- Contenu principal -->
    <div class="relative z-10 mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
      <div class="flex flex-col items-center text-center">
        <!-- Logo -->
        <Motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          transition="{ delay: 0.2, duration: 0.8, easing: 'ease-out' }"
        >
          <img class="h-80 w-auto" src="/img/logo.webp" alt="Logo Toul'Barz" />
        </Motion>

        <!-- Titre -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 300, duration: 0.7 }"
        >
          <h1 class="text-3xl font-bold tracking-tight text-white sm:text-5xl font-display">
            TOUL'BARZ
          </h1>
        </Motion>

        <!-- Slogan -->
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          transition="{ delay: 0.6, duration: 0.6 }"
        >
          <p class="mt-4 text-lg leading-8 text-gray-100 font-serif">
            Street Workout Toulouse
          </p>
        </Motion>

        <!-- Bouton CTA -->
        <Motion
          tag="div"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          transition="{ delay: 0.8, duration: 0.6 }"
          :whileHover="{ scale: 1.1 }"
        >
          <router-link
            to="/adhesions"
            class="mt-4 group relative inline-flex items-center justify-center rounded-full border-2 backdrop-blur-sm border-white p-3 text-white transition-all duration-200 hover:bg-white hover:text-black disabled:bg-gray-300 disabled:text-gray-500"
            aria-label="Je m'inscris"
          >
            <span class="text-base font-light tracking-wide">Rejoins-nous</span>
          </router-link>
        </Motion>

        <!-- Flèche vers le bas animée -->
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="{ delay: 1.1, duration: 0.6 }"
          class="mt-10 flex flex-col items-center justify-center gap-y-2"
        >
          <a href="#vision-section" class="animate-bounce text-6xl font-semibold leading-6 text-white">
            <span aria-hidden="true">↓</span>
          </a>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoLoaded = ref(false)
const videoSrc = ref('')

// Fonction de détection responsive
const updateVideoSrc = () => {
  const isMobile = window.innerWidth < 768 || window.innerHeight > window.innerWidth
  videoSrc.value = isMobile
    ? 'https://fazcode.com/video/video_hero_mobile_the_roof.mov'
    : 'https://fazcode.com/video/video_hero_pc_basket.mov'
}

onMounted(() => {
  updateVideoSrc()
  window.addEventListener('resize', updateVideoSrc)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVideoSrc)
})
</script>
