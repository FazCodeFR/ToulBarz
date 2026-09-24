<template>
  <div class="relative h-[calc(100svh-5rem)] overflow-hidden">
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
      v-show="videoLoaded"
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      preload="none"
      class="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500"
      @loadeddata="videoLoaded = true"
    >
      <source :src="videoSrc" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>

    <!-- Gradient overlay for better contrast -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]"></div>

    <!-- Contenu principal -->
    <div class="relative z-10 mx-auto max-w-2xl h-full flex flex-col items-center px-4">
      <div class="flex flex-1 w-full flex-col items-center justify-center text-center">
        <!-- Logo - CSS animation -->
        <img
          class="h-36 sm:h-64 w-auto drop-shadow-2xl animate-hero-logo"
          src="/img/logo.webp"
          alt="Logo Toul'Barz"
          width="320"
          height="320"
        />

        <!-- Titre - CSS animation -->
        <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-8xl lg:text-9xl font-display drop-shadow-lg animate-hero-title">
          TOUL'BARZ
        </h1>

        <!-- Slogan - CSS animation -->
        <p class="mt-2 sm:mt-3 text-lg sm:text-xl leading-8 text-white/90 font-medium tracking-wide animate-hero-slogan">
          Street Workout Toulouse
        </p>

        <!-- Boutons CTA - CSS animation -->
        <div class="mt-6 sm:mt-8 flex w-full max-w-xs sm:max-w-none flex-col sm:flex-row justify-center gap-3 animate-hero-cta">
          <router-link
            to="/adhesions"
            class="group relative inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 sm:px-8 sm:py-2.5 text-primary font-semibold shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Je m'inscris"
          >
            <span class="text-sm sm:text-base tracking-wide">Rejoins-nous</span>
            <i class="i-mdi-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
          </router-link>
          <a
            href="https://chat.whatsapp.com/E0ywhsRd8Hu6l8qhScf8t9?mode=ems_copy_t"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-5 py-3 sm:px-8 sm:py-2.5 text-white font-semibold transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <i class="i-mdi-whatsapp text-xl"></i>
            <span class="text-sm sm:text-base tracking-wide">Séance d'essai</span>
          </a>
        </div>
      </div>

      <!-- Flèche vers le bas animée - CSS animation -->
      <a
        href="#event-section"
        class="mb-6 sm:mb-8 shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors animate-hero-arrow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Aller à la section événements"
        @click.prevent="scrollToEvents"
      >
        <i class="i-mdi-chevron-down text-2xl text-white animate-bounce"></i>
      </a>
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

const scrollToEvents = () => {
  const target = document.getElementById('event-section')
  if (!target) return
  const startY = window.scrollY
  const headerOffset = 80
  const targetY = target.getBoundingClientRect().top + startY - headerOffset
  const distance = targetY - startY
  const duration = 1200
  const startTime = performance.now()
  const easeInOutCubic = (time: number) =>
    time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2
  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
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
