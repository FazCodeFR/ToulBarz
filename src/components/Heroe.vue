<template>
  <div class="bg-gray-900">
    <div
      class="relative isolate overflow-hidden h-[100vh] bg-fixed bg-cover bg-center"
      style="background-image: url('/img/home_heroe.png');"
    >
      <!-- Dégradé flou décoratif haut -->
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>

      <!-- Contenu principal -->
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
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
            :transition="{ type: 'spring', stiffness: 300, duration: 0.7  }"
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
              Quand la force devient une œuvre
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
              to="/boutique"
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
            <a href="#vision-section" class="animate-bounce  text-6xl font-semibold leading-6 text-white">
              <span aria-hidden="true">↓</span>
            </a>
          </Motion>

        </div>
      </div>

      <!-- Dégradé flou décoratif bas -->
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
