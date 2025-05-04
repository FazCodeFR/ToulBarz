<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Titre et texte -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
          Nos actions
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Le Street Workout, bien que non reconnu comme sport officiel par les ministères, gagne en popularité et se développe de façon autonome. Toul'Barz croit fermement en son potentiel et s'engage à accélérer son développement à l'échelle internationale et locale, en se concentrant sur quatre axes principaux.
        </p>
      </div>

      <!-- Cartes -->
      <div class="mt-16 flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
        <div
          v-for="(item, index) in incentives"
          :key="index"
          class="relative overflow-hidden rounded-3xl shadow-lg group transition-transform hover:scale-105
                 w-80 h-80 md:w-64 md:h-[450px]"
        >
          <img
            :src="item.imgSrc"
            :alt="item.name"
            class="object-cover w-full h-full"
          />
          <div
            class="absolute inset-0 flex items-center justify-center px-4 text-center text-white text-lg font-semibold md:text-xl z-10 bg-black/30"
          >
            <span>
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const incentives = [
  {
    name: 'Évènements & Compétitions',
    imgSrc: '/img/actions/action_evenements_&_competitions.jpg',
  },
  {
    name: 'Formations tous niveaux',
    imgSrc: '/img/actions/action_formations_tous_niveaux.jpg',
  },
  {
    name: 'Communauté',
    imgSrc: '/img/actions/action_communaute.jpg',
  },
  {
    name: 'Show & Spectacles',
    imgSrc: '/img/actions/action_show_&_spectacles.jpg',
  }
]
</script>
