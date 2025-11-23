<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'

const store = useStore()
</script>
<template>
  <Heroe/>
  <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }">
    <EventSection></EventSection>
  </div>
  <div v-scroll-animate="{ animation: 'fade-up', delay: 100 }">
    <Vision></Vision>
  </div>
  <div v-scroll-animate="{ animation: 'fade-left', delay: 0 }">
    <Action></Action>
  </div>
  <div v-scroll-animate="{ animation: 'fade-right', delay: 0 }">
    <StreetWorkout></StreetWorkout>
  </div>
  <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }">
    <Contact></Contact>
  </div>
  <div v-scroll-animate="{ animation: 'zoom-in', delay: 0 }">
    <Stats></Stats>
  </div>
  <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }">
    <Partenaire></Partenaire>
  </div>
  <div v-scroll-animate="{ animation: 'fade-up', delay: 100 }">
    <Insta></Insta>
  </div>
  <div v-scroll-animate="{ animation: 'fade-up', delay: 200 }">
    <InstaBouton></InstaBouton>
  </div>
</template>
