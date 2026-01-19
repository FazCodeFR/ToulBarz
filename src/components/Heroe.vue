<template>
  <div class="relative h-[100vh] overflow-hidden">
    <!-- Image de fond (LCP) -->
    <img
      src="/img/home_heroe.webp"
      alt="Street Workout Toulouse"
      fetchpriority="high"
      decoding="async"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <!-- Vidéo de fond (mobile ou desktop selon contexte) -->
    <video
      ref="videoRef"
      v-show="videoLoaded"
      @loadeddata="videoLoaded = true"
      autoplay
      muted
      loop
      playsinline
      preload="none"
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
        <!-- Logo - CSS animation -->
        <img
          class="h-64 sm:h-80 w-auto drop-shadow-2xl animate-hero-logo"
          src="/img/logo.webp"
          alt="Logo Toul'Barz"
          width="320"
          height="320"
        />

        <!-- Titre - CSS animation -->
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-display drop-shadow-lg animate-hero-title">
          TOUL'BARZ
        </h1>

        <!-- Slogan - CSS animation -->
        <p class="mt-3 text-lg sm:text-xl leading-8 text-white/90 font-medium tracking-wide animate-hero-slogan">
          Street Workout Toulouse
        </p>

        <!-- Bouton CTA - CSS animation -->
        <router-link
          to="/adhesions"
          class="mt-8 group relative inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-white font-semibold shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 hover:scale-105 animate-hero-cta"
          aria-label="Je m'inscris"
        >
          <span class="text-base tracking-wide">Rejoins-nous</span>
          <i class="i-mdi-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
        </router-link>

        <!-- Flèche vers le bas animée - CSS animation -->
        <a
          href="#vision-section"
          class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors animate-hero-arrow"
          aria-label="Aller à la section événements"
        >
          <i class="i-mdi-chevron-down text-2xl text-white"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoLoaded = ref(false)
const videoSrc = ref('')
const videoRef = ref<HTMLVideoElement | null>(null)

// Fonction de détection responsive
const getVideoUrl = () => {
  const isMobile = window.innerWidth < 768 || window.innerHeight > window.innerWidth
  return isMobile
    ? 'https://pub-6adac5dd42e04ef5bc9df5e5e87fcee8.r2.dev/video_hero_mobile_the_roof.mp4'
    : 'https://pub-6adac5dd42e04ef5bc9df5e5e87fcee8.r2.dev/video_hero_pc_basket.mp4'
}

const updateVideoSrc = () => {
  const newSrc = getVideoUrl()
  if (newSrc !== videoSrc.value) {
    videoSrc.value = newSrc
    // Recharger et lancer la vidéo quand le src change
    if (videoRef.value) {
      videoRef.value.load()
      videoRef.value.play().catch(() => {
        // Ignorer les erreurs d'autoplay (restrictions navigateur)
      })
    }
  }
}

// Différer le chargement de la vidéo pour prioriser le LCP
const loadVideoDeferred = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => updateVideoSrc(), { timeout: 2000 })
  } else {
    setTimeout(updateVideoSrc, 1000)
  }
}

onMounted(() => {
  loadVideoDeferred()
  window.addEventListener('resize', updateVideoSrc)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVideoSrc)
})
</script>

<style scoped>
@keyframes hero-logo {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes hero-title {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-slogan {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-cta {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-arrow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-hero-logo {
  animation: hero-logo 0.8s ease-out 0.2s both;
}

.animate-hero-title {
  animation: hero-title 0.7s ease-out 0.4s both;
}

.animate-hero-slogan {
  animation: hero-slogan 0.6s ease-out 0.6s both;
}

.animate-hero-cta {
  animation: hero-cta 0.6s ease-out 0.8s both;
}

.animate-hero-arrow {
  animation: hero-arrow 0.6s ease-out 1.1s both;
}
</style>
