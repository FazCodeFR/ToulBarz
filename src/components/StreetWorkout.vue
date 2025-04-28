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
                src="https://www.youtube.com/watch?v=-S6mYskysIk"
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

            <p class="mt-6 text-lg">Le Street Workout (littéralement « entraînement de rue ») est un sport à mi-chemin entre la gymnastique et la musculation. Mélangeant figures de force, de souplesse et d’équilibre, c’est un sport qui se pratique essentiellement en extérieur.</p>
            <h3 class="mt-8 text-3xl font-semibold">Et le statique ?</h3>
            <p class="mt-4 text-lg">Le statique est une catégorie de mouvements de force qui requièrent souvent des années de travail intense et régulier pour être maîtrisés. Ces mouvements permettent de libérer tout le potentiel de son corps en adoptant des positions statiques telles que le drapeau ou la planche.</p>
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