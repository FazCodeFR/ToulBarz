<template>
  <div class="bg-white text-primary">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 sm:py-28 lg:px-8">
      <!-- Title -->
      <h2 class="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
        Qu'est-ce que le
        <span class="text-accent">Street Workout</span> ?
      </h2>

      <!-- Mobile : vidéo puis texte empilés — Desktop : vidéo (3/5) à gauche, texte (2/5) à droite -->
      <div class="mt-10 grid grid-cols-1 items-center gap-10 sm:mt-14 lg:grid-cols-5 lg:gap-14">
        <!-- Video Section -->
        <div class="w-full lg:col-span-3">
          <!-- Cadre 16:9 rendu dès le SSR pour éviter le décalage de mise en page -->
          <div class="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
            <ClientOnly>
              <!-- eslint-disable vue/no-deprecated-slot-attribute -- slots natifs du web component, pas des slots Vue -->
              <media-theme-halloween
                v-if="isHalloween"
                class="block h-full w-full"
                :class="isFullscreen ? '[--media-object-fit:contain]' : '[--media-object-fit:cover]'"
              >
                <video
                  slot="media"
                  :src="VIDEO_URL"
                  playsinline
                  preload="metadata"
                  class="h-full w-full"
                ></video>
                <media-poster-image
                  slot="poster"
                  :src="POSTER_URL"
                  class="h-full w-full"
                ></media-poster-image>
              </media-theme-halloween>

              <media-theme-x-mas
                v-else-if="isChristmas"
                class="block h-full w-full"
                :class="isFullscreen ? '[--media-object-fit:contain]' : '[--media-object-fit:cover]'"
              >
                <video
                  slot="media"
                  :src="VIDEO_URL"
                  playsinline
                  preload="metadata"
                  class="h-full w-full"
                ></video>
                <media-poster-image
                  slot="poster"
                  :src="POSTER_URL"
                  class="h-full w-full"
                ></media-poster-image>
              </media-theme-x-mas>

              <media-theme-sutro
                v-else
                class="block h-full w-full [--media-accent-color:#ff7f11] [--media-primary-color:#ff7f11]"
                :class="isFullscreen ? '[--media-object-fit:contain]' : '[--media-object-fit:cover]'"
              >
                <video
                  slot="media"
                  :src="VIDEO_URL"
                  playsinline
                  preload="metadata"
                  class="h-full w-full"
                ></video>
                <media-poster-image
                  slot="poster"
                  :src="POSTER_URL"
                  class="h-full w-full"
                ></media-poster-image>
              </media-theme-sutro>
              <!-- eslint-enable vue/no-deprecated-slot-attribute -->
            </ClientOnly>
          </div>
        </div>

        <!-- Text Section -->
        <div class="text-center lg:col-span-2 lg:text-left">
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
            Le street workout ou calisthenics, du grec <em>Khalos Sthenos</em> (« beauté de la force »),<br />
            est un sport-spectacle en pleine explosion, mêlant force, agilité et équilibre.<br />
            Utilisant uniquement le poids du corps, il transforme la performance en un spectacle vivant, où les athlètes repoussent les limites de leurs corps.
          </p>
          <div class="mt-8">
            <RouterLink
              to="/street-workout"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              En savoir plus
              <i class="i-mdi-arrow-right transition-transform group-hover:translate-x-1"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import tous les thèmes
import 'player.style/sutro'
import 'player.style/x-mas'
import 'player.style/halloween'

const VIDEO_URL = 'https://pub-6adac5dd42e04ef5bc9df5e5e87fcee8.r2.dev/video_home_street_workout.mp4'
// Aperçu affiché via le slot "poster" du thème (le poster natif de <video> est masqué par media-chrome)
const POSTER_URL = '/img/actions/action_shows_&_animations.webp'

const { isFullscreen } = useFullscreenVideo()

const currentTheme = ref('default')

// Fonction pour déterminer la période actuelle
const getCurrentPeriod = () => {
  const now = new Date()
  const month = now.getMonth() // 0-11 (0 = janvier, 11 = décembre)
  const day = now.getDate()

  // Halloween : du 15 octobre au 5 novembre
  if ((month === 9 && day >= 15) || (month === 10 && day <= 5)) {
    return 'halloween'
  }

  // Noël : du 23 novembre au 5 janvier
  if (
    (month === 10 && day >= 23) || // 23 → 30 novembre (mois 10)
    month === 11 ||                // décembre
    (month === 0 && day <= 5)      // jusqu'au 5 janvier
  ) {
    return 'christmas'
  }

  return 'default'
}

onMounted(() => {
  currentTheme.value = getCurrentPeriod()
})

const isHalloween = computed(() => currentTheme.value === 'halloween')
const isChristmas = computed(() => currentTheme.value === 'christmas')</script>
