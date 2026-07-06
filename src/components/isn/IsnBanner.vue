<script setup lang="ts">
import { BILLETTERIE_URL } from '@/data/isn'
</script>

<template>
  <section class="relative border-b border-white/10 bg-neutral-950 px-6 py-16 sm:py-20">
    <!-- Fondu doux avec le bas du hero -->
    <div class="pointer-events-none absolute inset-x-0 -top-40 z-[2] h-40 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
    <!-- Fond : dégradé subtil + halos accent -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
      <div class="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
    </div>
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,127,17,0.12),transparent)]"></div>
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"></div>

    <div class="relative mx-auto max-w-4xl text-center">
      <span class="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        3ème édition — Toulouse
      </span>

      <h2 class="mt-6 font-black uppercase leading-none tracking-wide">
        <span class="block text-3xl text-white sm:text-5xl">International</span>
        <span class="block text-3xl text-transparent [-webkit-text-stroke:1.5px_white] sm:text-5xl">Strength Nights</span>
      </h2>

      <div class="mt-6 flex items-center justify-center gap-4 text-base font-bold tracking-widest text-white sm:text-xl">
        <time datetime="2026-08-01">01.08.26</time>
        <i aria-hidden="true" class="i-mdi-web text-accent"></i>
        <time datetime="2026-08-02">02.08.26</time>
      </div>

      <div class="mx-auto mt-6 h-px w-48 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <p class="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        Le show international de street workout revient au Grand Palais des Sports :
        battles spectaculaires, athlètes venus du monde entier — et le public pour seul juge.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link
          to="/isn-2026"
          class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
        >
          Découvrir ISN 2026
          <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
        </router-link>
        <a
          :href="BILLETTERIE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          Billetterie
          <i class="i-mdi-ticket-outline"></i>
        </a>
      </div>
    </div>
  </section>
</template>
