<template> 
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Les sponsors et partenaires
            </h2>
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div 
                    v-for="partenaire in partenaires" 
                    :key="partenaire.name" 
                    class="flex flex-col items-center col-span-3 sm:col-span-1">
                    <img 
                        :src="partenaire.imgSrc" 
                        :alt="partenaire.name" 
                        class="h-24 w-24 object-contain"
                    />
                    <p class=" text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ partenaire.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const partenaires = [
  {
    name: 'SWO',
    imgSrc: '/img/partenaires/swo.avif',
  },
  {
    name: 'Via Fortis',
    imgSrc: '/img/partenaires/viafortis.svg',
  },
  {
    name: "Centre Chiropratique Connexion",
    imgSrc: '/img/partenaires/centrechiroconnexion.png',
  },
 {
    name: 'FocaFoca',
    imgSrc: '/img/partenaires/focafoca.webp',
  },
  {
    name: 'Gorletic',
    imgSrc: '/img/partenaires/gorletic.jpg',
  },
]
</script> 
