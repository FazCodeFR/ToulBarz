<script setup lang="ts">
import 'player.style/sutro'
import { VIDEO_URL, galleryFull } from '@/data/isn'

// Aperçu affiché via le slot "poster" du thème (le poster natif de <video> est masqué par media-chrome)
const POSTER_URL = galleryFull(12)
</script>

<template>
  <section class="relative px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-4xl">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl">
          <span class="text-white/40">&gt;</span> Le film
        </h2>
        <p class="mt-4 text-sm font-semibold uppercase tracking-widest text-white/50">
          ✦ The Competition That Changed Calisthenics Forever
        </p>
      </div>

      <!-- Cadre 16:9 rendu dès le SSR pour éviter le décalage de mise en page -->
      <div class="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50">
        <ClientOnly>
          <media-theme-sutro
            class="block h-full w-full [--media-accent-color:#ff7f11] [--media-object-fit:cover] [--media-primary-color:#ff7f11]"
          >
            <!-- eslint-disable vue/no-deprecated-slot-attribute -- slots natifs du web component, pas des slots Vue -->
            <video
              slot="media"
              :src="VIDEO_URL"
              playsinline
              preload="metadata"
              class="h-full w-full object-cover"
            ></video>
            <media-poster-image
              slot="poster"
              :src="POSTER_URL"
              class="h-full w-full"
            ></media-poster-image>
            <!-- eslint-enable vue/no-deprecated-slot-attribute -->
          </media-theme-sutro>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
