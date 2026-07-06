<script setup lang="ts">
const description = "ISN 2026 - International Strength Nights, 3ème édition : le plus grand show de street workout au monde, les 1er et 2 août 2026 au Grand Palais des Sports de Toulouse. Battles internationales, vote du public en direct, workshop et rassemblement communautaire."

useSeoMeta({
  title: "ISN 2026 - International Strength Nights | Toul'Barz",
  description,
  ogTitle: 'ISN 2026 - International Strength Nights | Toulouse',
  ogDescription: description,
  ogImage: 'https://toulbarz.fr/img/isn/og-isn-2026.jpg',
  ogImageAlt: 'ISN 2026 - International Strength Nights - 01-02.08.26 - Grand Palais des Sports, Toulouse',
  ogUrl: 'https://toulbarz.fr/isn-2026',
  twitterTitle: 'ISN 2026 - International Strength Nights | Toulouse',
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
        eventStatus: 'https://schema.org/EventScheduled',
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
        offers: [
          {
            '@type': 'Offer',
            name: 'Standard Pass',
            url: 'https://my.weezevent.com/isn2026',
            price: '19.90',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Premium Pass',
            url: 'https://my.weezevent.com/isn2026',
            price: '34.90',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          },
        ],
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
