<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'

const store = useStore()

const description = "Toul'Barz, association toulousaine de Street Workout : entraînements hebdomadaires pour tous niveaux, événements, cohésion d'équipe et promotion de la calisthénie à Toulouse."

useSeoMeta({
  title: "Toul'Barz - Street Workout Toulouse",
  description,
  keywords: 'street workout, calisthénie, Toulouse, association sportive, musculation au poids du corps, figures, entraînement, communauté',
  ogTitle: "Toul'Barz - Association de Street Workout à Toulouse",
  ogDescription: description,
  ogImage: 'https://toulbarz.fr/img/home_heroe.webp',
  ogImageAlt: "Toul'Barz en action - Street Workout à Toulouse",
  ogUrl: 'https://toulbarz.fr/',
  twitterTitle: "Toul'Barz - Association de Street Workout à Toulouse",
  twitterDescription: description,
  twitterImage: 'https://toulbarz.fr/img/home_heroe.webp',
})
</script>
<template>
  <Heroe/>
  <div class="bg-gray-50">
    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }">
      <EventSection></EventSection>
    </div>
  </div>
  <div class="bg-white">
    <div v-scroll-animate="{ animation: 'fade-up', delay: 100 }">
      <Vision></Vision>
    </div>
  </div>
  <div class="bg-white">
    <div v-scroll-animate="{ animation: 'fade-left', delay: 0 }">
      <Action></Action>
    </div>
  </div>
  <div class="bg-white">
    <div v-scroll-animate="{ animation: 'fade-right', delay: 0 }">
      <StreetWorkout></StreetWorkout>
    </div>
  </div>
  <div class="bg-gray-50">
    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }">
      <Contact></Contact>
    </div>
  </div>
  <div class="bg-gray-900">
    <div v-scroll-animate="{ animation: 'zoom-in', delay: 0 }">
      <Stats></Stats>
    </div>
  </div>
  <div class="bg-white">
    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }">
      <Partenaire></Partenaire>
    </div>
  </div>
  <div class="bg-white">
    <div v-scroll-animate="{ animation: 'fade-up', delay: 100 }">
      <Insta></Insta>
    </div>
  </div>
</template>
