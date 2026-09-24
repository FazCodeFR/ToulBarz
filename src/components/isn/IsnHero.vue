<template>
  <!-- Pas d'overflow-hidden : les halos débordent sur la section suivante pour un fond continu (clip géré par IsnEvent) -->
  <section class="relative px-6 pt-16 pb-8 text-center sm:pt-20 sm:pb-10">
    <!-- Halos décoratifs -->
    <div class="pointer-events-none absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-40 -bottom-48 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-4xl">
      <span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/80">
        ✦ 3ème édition — Événement terminé
      </span>

      <h1 class="mt-6 font-black uppercase leading-none tracking-wide">
        <span class="block text-4xl text-white sm:text-5xl lg:text-6xl">International</span>
        <span class="block text-4xl text-transparent [-webkit-text-stroke:2px_white] sm:text-5xl lg:text-6xl">Strength Nights</span>
      </h1>

      <p class="mt-6 text-sm font-semibold uppercase tracking-widest text-white/70 sm:text-base">
        <time datetime="2026-08-01">01</time>-<time datetime="2026-08-02">02.08.26</time>
        · Grand Palais des Sports, Toulouse
      </p>
    </div>
  </section>
</template>
