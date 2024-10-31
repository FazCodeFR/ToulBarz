<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-3xl font-bold leading-8 text-gray-900">
                Les sponsors et partenaires
            </h2>
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <img 
                    v-for="partenaire in partenaires" 
                    :key="partenaire.name" 
                    :src="partenaire.imgSrc" 
                    :alt="partenaire.name" 
                    class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" 
                    width="158" 
                    height="48" 
                />
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
    name: 'Gorletic',
    imgSrc: '/img/partenaires/gorletic.jpg',
  },
]
</script>

