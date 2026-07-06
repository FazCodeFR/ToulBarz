<script setup lang="ts">
import { BILLETTERIE_URL, LIEU } from '@/data/isn'
</script>

<template>
  <section class="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
    <!-- Halos décoratifs -->
    <div class="pointer-events-none absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
    <div class="pointer-events-none absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
    <div class="pointer-events-none absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

    <div class="relative mx-auto max-w-4xl">
      <span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/80">
        ✦ 3ème édition
      </span>

      <h1 class="mt-8 font-black uppercase leading-none tracking-wide">
        <span class="block text-4xl text-white sm:text-6xl lg:text-7xl">International</span>
        <span class="block text-4xl text-transparent [-webkit-text-stroke:2px_white] sm:text-6xl lg:text-7xl">Strength Nights</span>
      </h1>

      <div class="mx-auto mt-8 flex items-center justify-center gap-4 text-lg font-bold tracking-widest text-white sm:text-2xl">
        <time datetime="2026-08-01">01.08.26</time>
        <i aria-hidden="true" class="i-mdi-web text-white/60"></i>
        <time datetime="2026-08-02">02.08.26</time>
      </div>

      <div class="mx-auto mt-6 h-px w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

      <p class="mt-6 text-sm font-semibold uppercase tracking-widest text-white/70 sm:text-base">
        ✧ Au Grand Palais des Sports | Toulouse, FR
      </p>

      <p class="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
        Pendant un week-end entier, ISN 2026 réunira des athlètes internationaux de street workout,
        des passionnés venus du monde entier et un public à la recherche d'un show sportif immersif
        et spectaculaire. Et cette année encore, le public sera le seul juge.
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          :href="BILLETTERIE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
        >
          Réserve ta place
          <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
        <a
          href="#programme"
          class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          Voir le programme
          <i class="i-mdi-chevron-down"></i>
        </a>
      </div>

      <p class="mt-8 text-xs uppercase tracking-widest text-white/40">{{ LIEU.name }} — {{ LIEU.address }}</p>
    </div>
  </section>
</template>
