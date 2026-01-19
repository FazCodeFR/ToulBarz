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
    {
      name: 'description',
      content: 'Toul\'Barz est une association toulousaine qui place le street workout au cœur de ses projets. Toul\'Barz propose des cours pour tous, débutants comme avancés, et organise des événements pour promouvoir cette discipline sportive.',
    },
    {
      property: 'og:description',
      content: 'Toul\'Barz - Street Workout Toulouse',
    },
    {
      name: 'twitter:description',
      content: 'Toul\'Barz - Street Workout Toulouse',
    },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: ""
    },
    {
      rel: "preload",
      as: "style",
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
      media: "print",
      onload: "this.media='all'"
    }
  ],
  script: [
    {
      // Google Analytics - chargé après interaction
      innerHTML: `
        window.addEventListener('load', function() {
          setTimeout(function() {
            var script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JNS3NEMVE0';
            script.async = true;
            document.head.appendChild(script);
            script.onload = function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JNS3NEMVE0');
            };
          }, 3000);
        });
      `
    },
    {
      // Instagram feed - chargé après interaction
      innerHTML: `
        window.addEventListener('load', function() {
          setTimeout(function() {
            var script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.head.appendChild(script);
          }, 4000);
        });
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
  <main class="overflow-x-hidden">
    <Header/>
    <ScrollTopButton />
    <InstaBouton />
    <router-view />
    <Footer/>
  </main>

</template>
