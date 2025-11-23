<template>
  <div class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
          <i class="i-mdi-handshake"></i>
          Partenariats
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Nos <span class="text-accent">partenaires</span>
        </h2>
      </div>

      <!-- Section de logos avec défilement infini -->
      <div class="logos relative overflow-hidden whitespace-nowrap py-8 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div class="animate-slide-left-infinite hover:animation-pause inline-block w-max">
          <!-- Génère dynamiquement les logos et détails des partenaires -->
          <div
            v-for="partenaire in partenaires"
            :key="partenaire.name"
            class="inline-flex flex-col items-center mx-6 group"
          >
            <div class="relative p-4 rounded-2xl bg-gray-50 group-hover:bg-accent/5 transition-colors duration-300">
              <img
                :src="partenaire.imgSrc"
                :alt="partenaire.name"
                class="h-20 w-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <!-- Nom avec lien et styles -->
            <a
              :href="partenaire.link"
              target="_blank"
              class="mt-3 text-sm text-center font-semibold text-gray-700 hover:text-accent transition-colors duration-300"
            >
              {{ partenaire.name }}
            </a>
            <!-- Description visibles uniquement au survol -->
            <p class="text-xs text-center text-gray-500">
              {{ partenaire.description }}
            </p>
          </div>
        </div>

        <!-- Duplicate pour l'effet de défilement infini -->
        <div class="animate-slide-left-infinite hover:animation-pause inline-block w-max">
          <div
            v-for="partenaire in partenaires"
            :key="partenaire.name + '-duplicate'"
            class="inline-flex flex-col items-center mx-6 group"
          >
            <div class="relative p-4 rounded-2xl bg-gray-50 group-hover:bg-accent/5 transition-colors duration-300">
              <img
                :src="partenaire.imgSrc"
                :alt="partenaire.name"
                class="h-20 w-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <!-- Nom avec lien et styles -->
            <a
              :href="partenaire.link"
              target="_blank"
              class="mt-3 text-sm text-center font-semibold text-gray-700 hover:text-accent transition-colors duration-300"
            >
              {{ partenaire.name }}
            </a>
            <!-- Description visibles uniquement au survol -->
            <p class="text-xs text-center text-gray-500">
              {{ partenaire.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <a
          href="https://www.instagram.com/toulbarz_tlb/"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
        >
          <i class="i-mdi-plus"></i>
          Devenir partenaire
        </a>
      </div>


    </div>
  </div>
</template>


<script setup>
const partenaires = [
  {
    name: 'SWO',
    imgSrc: '/img/partenaires/swo.webp',
    link: 'https://sw-official.com/',
    description: 'Street Workout'
  },
  {
    name: 'Via Fortis',
    imgSrc: '/img/partenaires/viafortis.svg',
    link: 'https://viafortis.fr/',
    description: 'Street Workout'
  },
  {
    name: "Chiropratique Connexion",
    imgSrc: '/img/partenaires/centrechiroconnexion.webp',
    link: 'https://centrechiroconnexion.com/',
    description: 'Centre de chiropratique'
  },
 {
    name: 'FocaFoca',
    imgSrc: '/img/partenaires/focafoca.webp',
    link: 'https://focafoca.fr/fr',
    description: 'Cuisine italienne'
  },
  {
    name: 'Gorletic',
    imgSrc: '/img/partenaires/gorletic.webp',
    link: 'https://gorletic.com',
    description: 'Matériel de sport'
  },
  {
    name : 'Peanut',
    imgSrc: '/img/partenaires/peanutcoffeee.webp',
    link: 'https://www.instagram.com/peanutcoffeee',
    description: 'Coffee shop'
  },
  {
    name: 'CTGym',
    imgSrc: '/img/partenaires/ctgym.webp',
    link: 'https://ctgym.fr/',
    description: 'Salle de gym'
  }
]
</script> 
