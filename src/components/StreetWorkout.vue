<template>
  <div class="text-primary">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-4xl px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div class="relative order-2 lg:order-1 h-full w-full">
            <media-theme-sutro
              style="--media-primary-color: #ff7f11;  --media-accent-color: #ff7f11;"
              class="h-full w-full"
            >
              <youtube-video
                slot="media"
                src="https://www.youtube-nocookie.com/embed/-S6mYskysIk"
                playsinline
                crossorigin
                class="h-full w-full"
                style="aspect-ratio: 16/9; max-height: 80vh;"
              ></youtube-video>
            </media-theme-sutro>
          </div>
          <div class="order-1 lg:order-2">
            <h2
              class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
              Qu'est-ce que le Street Workout ?
            </h2>
            <p class="mt-6 text-lg">Le street workout ou calisthenics, du grec Khalos Sthenos (« beauté de la force »), est un sport-spectacle en pleine explosion, mêlant force, agilité et équilibre. Utilisant uniquement le poids du corps, il transforme la performance en un spectacle vivant, où les athlètes repoussent les limites de leurs corps.</p>
            <p class="mt-4 text-3xl">
              <RouterLink
                to="/street-workout"
                class="text-orange-600 hover:underline text-lg font-medium"
              >
                En savoir plus
              </RouterLink>
            </p>
          

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