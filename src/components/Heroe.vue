<template>
  <div class="relative h-[100vh] overflow-hidden">
    <!-- Image de fond -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style="background-image: url('/img/home_heroe.webp');"
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

    <!-- Gradient overlay for better contrast -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]"></div>

    <!-- Contenu principal -->
    <div class="relative z-10 mx-auto max-w-2xl h-full flex items-center justify-center px-4">
      <div class="flex flex-col items-center text-center">
        <!-- Logo -->
        <Motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          transition="{ delay: 0.2, duration: 0.8, easing: 'ease-out' }"
        >
          <img class="h-64 sm:h-80 w-auto drop-shadow-2xl" src="/img/logo.webp" alt="Logo Toul'Barz" />
        </Motion>

        <!-- Titre -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 300, duration: 0.7 }"
        >
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-display drop-shadow-lg">
            TOUL'BARZ
          </h1>
        </Motion>

        <!-- Slogan -->
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          transition="{ delay: 0.6, duration: 0.6 }"
        >
          <p class="mt-3 text-lg sm:text-xl leading-8 text-white/90 font-medium tracking-wide">
            Street Workout Toulouse
          </p>
        </Motion>

        <!-- Bouton CTA -->
        <Motion
          tag="div"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          transition="{ delay: 0.8, duration: 0.6 }"
          :whileHover="{ scale: 1.05 }"
        >
          <router-link
            to="/adhesions"
            class="mt-8 group relative inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-white font-semibold shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5"
            aria-label="Je m'inscris"
          >
            <span class="text-base tracking-wide">Rejoins-nous</span>
            <i class="i-mdi-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
          </router-link>
        </Motion>

        <!-- Flèche vers le bas animée -->
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="{ delay: 1.1, duration: 0.6 }"
          class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
          aria-label="Aller à la section événements"
        >
          <a href="#vision-section" class="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <i class="i-mdi-chevron-down text-4xl text-white"></i>
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
    ? 'https://pub-6adac5dd42e04ef5bc9df5e5e87fcee8.r2.dev/video_hero_mobile_the_roof.mp4'
    : 'https://pub-6adac5dd42e04ef5bc9df5e5e87fcee8.r2.dev/video_hero_pc_basket.mp4'
}
// Hébergement des vidéos temporaire sur R2

onMounted(() => {
  updateVideoSrc()
  window.addEventListener('resize', updateVideoSrc)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVideoSrc)
})
</script>
