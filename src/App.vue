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
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-JNS3NEMVE0",
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JNS3NEMVE0');
      `
    }
  ]
});

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()

</script>

<template>
  <main>
    <Header/>
    <ScrollTopButton />
    <router-view />
    <Footer/>
  </main>

 
</template>
