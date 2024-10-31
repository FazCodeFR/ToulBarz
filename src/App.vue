<script setup lang="ts">
// See vite.config.ts for details about automatic imports
const route = useRoute()

useHead({
  title: () => route.meta.title || "Toul'Barz - Street Workout Toulouse",
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title,
    },
  ],
})

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()

</script>

<template>

  <Header/>

  <main>
    <router-view />
  </main>
  <!-- Footer here -->

</template>
