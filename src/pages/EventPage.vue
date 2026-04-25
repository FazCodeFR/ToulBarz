<script setup lang="ts">
const description = "Découvrez le calendrier des événements Toul'Barz : compétitions, entraînements, shows, sorties et rencontres de l'association de Street Workout de Toulouse."

useSeoMeta({
  title: "Événements - Toul'Barz",
  description,
  ogTitle: "Événements & Calendrier - Toul'Barz Street Workout",
  ogDescription: description,
  ogUrl: 'https://toulbarz.fr/evenements',
  twitterTitle: "Événements & Calendrier - Toul'Barz Street Workout",
  twitterDescription: description,
})

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'événements, calendrier, compétitions, street workout, Toulouse, sorties, rencontres, Toul\'Barz',
    },
  ],
})
</script>

<template>
    <Event></Event>
</template>
