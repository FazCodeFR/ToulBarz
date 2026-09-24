<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { INSTAGRAM_URL } from '@/data/isn'
</script>

<template>
  <section class="relative overflow-hidden px-6 py-20 sm:py-28">
    <!-- Halo accent -->
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"></div>

    <div v-scroll-animate="{ animation: 'zoom-in', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
      <p class="text-sm font-bold uppercase tracking-[0.3em] text-white/50">✦ Merci à tous ✦</p>
      <h2 class="mt-6 text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
        Merci d'avoir vécu<br>
        <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">ISN 2026 avec nous</span>
      </h2>
      <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
        ISN 2026 a proposé une nouvelle manière de vivre le street workout : plus immersive, plus
        intense, plus spectaculaire. Bien plus qu'une compétition, ISN est devenu un rendez-vous
        international où performance sportive, scénographie, communauté et émotions se sont rencontrées
        pour créer une expérience unique.
      </p>
      <p class="mx-auto mt-4 max-w-2xl text-base font-semibold text-white">
        Pendant un week-end entier, près de 1 900 passionnés ont vécu l'un des plus grands shows de street workout au monde.
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          <i class="i-bxl-instagram text-xl"></i>
          @isn_calisthenics
        </a>
        <a
          href="https://www.instagram.com/toulbarz_tlb/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          <i class="i-bxl-instagram text-xl"></i>
          @toulbarz_tlb
        </a>
      </div>
    </div>
  </section>
</template>
