<template>
  <div class="bg-white py-20 sm:py-28 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
      <!-- Titre -->
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Nos <span class="text-accent">actions</span>
      </h2>

      <!-- Grille asymétrique -->
      <div class="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
        <div
          v-for="(item, index) in incentives"
          :key="index"
          :class="item.class"
          class="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            :src="item.imgSrc"
            :alt="item.name"
            loading="lazy"
            decoding="async"
            class="absolute inset-0 w-full h-full object-cover"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>

          <!-- Content -->
          <span class="absolute bottom-0 left-0 p-4 sm:p-6 text-white text-lg md:text-xl font-bold drop-shadow-lg">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const incentives = [
  {
    name: 'Évènements & Compétitions',
    imgSrc: '/img/actions/action_evenements_&_competitions.webp',
    class: 'col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto',
  },
  {
    name: 'Cours & Formations tous niveaux',
    imgSrc: '/img/actions/action_formations_tous_niveaux.webp',
    class: 'aspect-square',
  },
  {
    name: 'Communauté',
    imgSrc: '/img/actions/action_communaute.webp',
    class: 'aspect-square',
  },
  {
    name: 'Shows & Animations',
    imgSrc: '/img/actions/action_shows_&_animations.webp',
    class: 'col-span-2 aspect-[2/1] lg:aspect-auto',
  },
]
</script>
