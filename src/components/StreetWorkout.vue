<template>
  <div class="bg-white text-primary">
    <div class="mx-auto max-w-7xl py-20 px-4 sm:px-6 sm:py-28 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 items-center gap-12 lg:gap-16 lg:grid-cols-2">
          <!-- Video Section -->
          <div class="relative order-2 lg:order-1">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <media-theme-sutro
                style="--media-primary-color: #ff7f11; --media-accent-color: #ff7f11;"
                class="w-full"
              >
                <youtube-video
                  slot="media"
                  src="https://www.youtube-nocookie.com/embed/-S6mYskysIk"
                  playsinline
                  crossorigin
                  class="w-full"
                  style="aspect-ratio: 16/9;"
                ></youtube-video>
              </media-theme-sutro>
            </div>
            <!-- Decorative element -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10"></div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl -z-10"></div>
          </div>

          <!-- Text Section -->
          <div class="order-1 lg:order-2">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <i class="i-mdi-help-circle-outline"></i>
              Découvrir
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Qu'est-ce que le
              <span class="text-accent">Street Workout</span> ?
            </h2>
            <p class="mt-6 text-lg text-gray-600 leading-relaxed">
              Le street workout ou calisthenics, du grec <em>Khalos Sthenos</em> (« beauté de la force »), est un sport-spectacle en pleine explosion, mêlant force, agilité et équilibre. Utilisant uniquement le poids du corps, il transforme la performance en un spectacle vivant, où les athlètes repoussent les limites de leurs corps.
            </p>
            <div class="mt-8">
              <RouterLink
                to="/street-workout"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg group"
              >
                En savoir plus
                <i class="i-mdi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import 'youtube-video-element';
  import 'player.style/sutro';
</script>