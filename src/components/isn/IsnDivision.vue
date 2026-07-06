<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
</script>

<template>
  <section class="relative overflow-hidden px-6 py-20 sm:py-28">
    <!-- Halos décoratifs -->
    <div class="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
      <span class="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
        ✦ Une première dans l'histoire d'ISN
      </span>

      <h2 class="mt-6 text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
        Une seule<br>
        <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">division</span>
      </h2>

      <p class="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
        En 2026, des athlètes féminines entreront dans l'arène parmi les meilleurs athlètes
        du monde, dans une seule et même division.
      </p>

      <div class="mx-auto mt-8 flex flex-col items-center gap-1 text-lg font-black uppercase tracking-wide text-white sm:text-2xl">
        <span>Une seule scène.</span>
        <span>Un seul public.</span>
        <span class="text-accent">Une seule nuit.</span>
      </div>

      <p class="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70">
        À ISN, il n'y aura pas de standard différent. Pas de distinction. Seulement des athlètes,
        des performances et un public pour décider.
      </p>

      <p class="mx-auto mt-4 max-w-2xl text-base font-semibold text-white">
        Le 1er août au Grand Palais des Sports de Toulouse, la performance parlera d'elle-même.
      </p>
    </div>
  </section>
</template>
