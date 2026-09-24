<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
</script>

<template>
  <!-- Pas d'overflow-hidden : fond continu avec le hero (clip géré par IsnEvent) -->
  <section class="relative px-6 pt-8 pb-14 sm:pt-10 sm:pb-16">
    <!-- Halos décoratifs -->
    <div class="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/15 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
      <h2 class="text-2xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl">
        Une seule
        <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">division</span>
      </h2>

      <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
        En 2026, des athlètes féminines sont entrées dans l'arène parmi les meilleurs athlètes
        du monde, dans une seule et même division.
      </p>

      <p class="mx-auto mt-5 text-sm font-black uppercase tracking-wide text-white sm:text-base">
        Une seule scène. Un seul public. <span class="text-accent">Une seule nuit.</span>
      </p>
    </div>
  </section>
</template>
