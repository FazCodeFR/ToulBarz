<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { LIEU } from '@/data/isn'
</script>

<template>
  <section class="relative px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-3xl">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl">
          <span class="text-white/40">&gt;</span> Le lieu
        </h2>
      </div>

      <div
        v-scroll-animate="{ animation: 'fade-up', delay: 0 }"
        class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-10"
      >
        <i class="i-mdi-map-marker mx-auto block h-10 w-10 text-accent"></i>
        <h3 class="mt-4 text-xl font-black uppercase tracking-widest text-white sm:text-2xl">{{ LIEU.name }}</h3>
        <p class="mt-2 text-sm text-white/60 sm:text-base">{{ LIEU.address }}</p>

        <div class="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <p class="mt-6 text-sm leading-relaxed text-white/60">
          Le Grand Palais des Sports de Toulouse accueillera le show principal dans une ambiance
          sombre, cinématographique et spectaculaire mêlant lumières, fumée, DJ set, scénographie
          et performances de très haut niveau.
        </p>
        <p class="mt-4 text-xs font-semibold uppercase tracking-widest text-white/40">
          ✧ Face-Off du vendredi : Salle du Sénéchal | Toulouse, FR
        </p>

        <a
          :href="LIEU.mapLink"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-accent/50 hover:bg-white/10"
        >
          <i class="i-mdi-navigation-variant-outline text-accent"></i>
          Itinéraire
        </a>
      </div>
    </div>
  </section>
</template>
