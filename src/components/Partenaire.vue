<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
        Nos partenaires
      </h2>

      <!-- Section de logos avec défilement infini -->
      <div class="logos group relative overflow-hidden whitespace-nowrap py-6 mt-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <!-- Génère dynamiquement les logos et détails des partenaires -->
          <div
            v-for="partenaire in partenaires"
            :key="partenaire.name"
            class="inline-flex flex-col items-center mx-4 relative group"
          >
            <img
              :src="partenaire.imgSrc"
              :alt="partenaire.name"
              class="h-24 w-24 object-contain"
            />
            <!-- Nom avec lien et styles -->
            <a
              :href="partenaire.link"
              class="text-base text-center font-semibold leading-6 text-gray-900 border-b-2 border-accent hover:text-accent-dark hover:border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {{ partenaire.name }}
            </a>
            <!-- Description visibles uniquement au survol -->
            <p class="text-sm text-center leading-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ partenaire.description }}
            </p>
          </div>
        </div>

        <!-- Duplicate pour l'effet de défilement infini -->
        <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <div
            v-for="partenaire in partenaires"
            :key="partenaire.name + '-duplicate'"
            class="inline-flex flex-col items-center mx-4 relative group"
          >
            <img
              :src="partenaire.imgSrc"
              :alt="partenaire.name"
              class="h-24 w-24 object-contain"
            />
            <!-- Nom avec lien et styles -->
            <a
              :href="partenaire.link"
              class="text-base text-center font-semibold leading-6 text-gray-900 border-b-2 border-accent hover:text-accent-dark hover:border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-800"
            >
              {{ partenaire.name }}
            </a>
            <!-- Description visibles uniquement au survol -->
            <p class="text-sm text-center leading-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-800">
              {{ partenaire.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a
          href="https://www.instagram.com/toulbarz_tlb/"
          target="_blank"
          class="text-base items-center font-semibold leading-6 text-gray-900 border-b-2 border-accent hover:text-accent-dark hover:border-accent"
        >
          [Devenir partenaire ?]
        </a>
      </div>
      
      
    </div>
  </div>
</template>


<script setup>
const partenaires = [
  {
    name: 'SWO',
    imgSrc: '/img/partenaires/swo.avif',
    link: 'https://sw-official.com/',
    description: 'Marque de Street Workout'
  },
  {
    name: 'Via Fortis',
    imgSrc: '/img/partenaires/viafortis.svg',
    link: 'https://viafortis.fr/',
    description: 'Marque de Street Workout'
  },
  {
    name: "Chiropratique Connexion",
    imgSrc: '/img/partenaires/centrechiroconnexion.png',
    link: 'https://centrechiroconnexion.com/',
    description: 'Centre de chiropratique'
  },
 {
    name: 'FocaFoca',
    imgSrc: '/img/partenaires/focafoca.webp',
    link: 'https://focafoca.fr/fr',
    description: 'Cuisine italienne authentique'
  },
  {
    name: 'Gorletic',
    imgSrc: '/img/partenaires/gorletic.jpg',
    link: 'https://gorletic.com',
    description: 'Matériel de sport'
  },
  {
    name : 'S&B',
    imgSrc: '/img/partenaires/strengthandbalance.jpg',
    link: 'https://strength-and-balance.fr/',
    description: 'Vêtement de street workout'
  },
  {
    name: 'CTGym',
    imgSrc: '/img/partenaires/ctgym.jpg',
    link: 'https://ctgym.fr/',
    description: 'Salle de gym'
  }
]
</script> 
