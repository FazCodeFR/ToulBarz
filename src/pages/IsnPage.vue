<script setup lang="ts">
const description = "ISN 2026 - International Strength Nights, 3ème édition : le plus grand show de street workout au monde s'est tenu les 1er et 2 août 2026 au Grand Palais des Sports de Toulouse. Retour sur les battles internationales, le vote du public en direct, le workshop et le rassemblement communautaire."

useSeoMeta({
  title: "ISN 2026 - International Strength Nights (édition passée) | Toul'Barz",
  description,
  ogTitle: 'ISN 2026 - International Strength Nights | Retour sur l\'édition Toulouse',
  ogDescription: description,
  ogImage: 'https://toulbarz.fr/img/isn/thumb/isn-2026-06.webp',
  ogImageAlt: 'ISN 2026 - International Strength Nights - 01-02.08.26 - Grand Palais des Sports, Toulouse',
  ogUrl: 'https://toulbarz.fr/isn-2026',
  twitterTitle: 'ISN 2026 - International Strength Nights | Retour sur l\'édition Toulouse',
  twitterDescription: description,
  twitterImage: 'https://toulbarz.fr/img/isn/og-isn-2026.jpg',
})

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'ISN 2026, International Strength Nights, street workout, calisthénie, compétition, battles, Toulouse, Grand Palais des Sports, août 2026',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        name: 'ISN 2026 - International Strength Nights',
        startDate: '2026-07-31T18:00:00+02:00',
        endDate: '2026-08-02T23:00:00+02:00',
        image: 'https://toulbarz.fr/img/isn/og-isn-2026.jpg',
        eventStatus: 'https://schema.org/EventCompleted',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Palais des Sports André Brouat',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3 Rue Pierre Laplace',
            postalCode: '31000',
            addressLocality: 'Toulouse',
            addressCountry: 'FR',
          },
        },
        description,
        organizer: {
          '@type': 'Organization',
          name: "Toul'Barz",
          url: 'https://toulbarz.fr',
        },
      }),
    },
  ],
})
</script>

<template>
  <IsnEvent />
</template>
