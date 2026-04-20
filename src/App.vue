<script setup lang="ts">

// See vite.config.ts for details about automatic imports
const route = useRoute()

const SITE_URL = 'https://toulbarz.fr'
const DEFAULT_DESCRIPTION = "Toul'Barz est une association toulousaine qui place le Street Workout au cœur de ses projets. Cours pour tous niveaux, événements et communauté pour promouvoir cette discipline sportive à Toulouse."
const DEFAULT_OG_IMAGE = `${SITE_URL}/img/logo_fond_blanc.webp`

useSeoMeta({
  title: () => (route.meta.title as string) || "Toul'Barz - Street Workout Toulouse",
  description: DEFAULT_DESCRIPTION,
  author: "Toul'Barz",
  ogSiteName: "Toul'Barz",
  ogType: 'website',
  ogLocale: 'fr_FR',
  ogTitle: () => (route.meta.title as string) || "Toul'Barz - Street Workout Toulouse",
  ogDescription: DEFAULT_DESCRIPTION,
  ogImage: DEFAULT_OG_IMAGE,
  ogImageAlt: "Logo Toul'Barz - Street Workout Toulouse",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: () => `${SITE_URL}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => (route.meta.title as string) || "Toul'Barz - Street Workout Toulouse",
  twitterDescription: DEFAULT_DESCRIPTION,
  twitterImage: DEFAULT_OG_IMAGE,
  twitterImageAlt: "Logo Toul'Barz - Street Workout Toulouse",
  robots: 'index, follow',
  themeColor: '#ff7f11',
})

useHead({
  htmlAttrs: { lang: 'fr' },
  link: [
    {
      rel: 'canonical',
      href: () => `${SITE_URL}${route.path}`,
    },
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
