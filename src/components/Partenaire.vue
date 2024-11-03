<template> 
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="mt-2 text-4xl font-bold tracking-tight  underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
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
                    <div class="flex gap-x-2.5">
                        <p class="text-sm leading-6 text-gray-600">{{ partenaire.description }}</p>
                    </div>
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
    link: 'https://sw-official.com/',
    description: 'Marque de Street Workout française'
  },
  {
    name: 'Via Fortis',
    imgSrc: '/img/partenaires/viafortis.svg',
    link: 'https://viafortis.fr/',
    description: 'Marque de Street Workout française'
  },
  {
    name: "Centre Chiropratique Connexion",
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
]
</script> 
