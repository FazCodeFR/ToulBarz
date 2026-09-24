<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { LIEU, programme } from '@/data/isn'
</script>

<template>
  <section id="programme" class="relative scroll-mt-24 px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-5xl">
      <h2 class="text-center text-3xl font-black uppercase tracking-wide text-transparent [-webkit-text-stroke:1.5px_white] sm:text-5xl">
        &gt; Le programme
      </h2>
      <p class="mt-4 text-center text-sm uppercase tracking-[0.3em] text-white/50">3 jours · 5 temps forts</p>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div
          v-for="(day, dayIndex) in programme"
          :key="day.day"
          v-scroll-animate="{ animation: 'fade-up', delay: dayIndex * 100 }"
          class="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
            <h3 class="text-2xl font-black uppercase tracking-widest text-white">{{ day.day }}</h3>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{{ day.date }}</p>
          </div>

          <ol class="mt-5 space-y-5 border-l border-white/15 pl-5">
            <li v-for="slot in day.slots" :key="slot.title" class="relative">
              <span aria-hidden="true" class="absolute -left-6.25 top-1.5 h-2 w-2 rounded-full bg-accent"></span>
              <p class="text-xs font-bold tracking-widest text-white/50">{{ slot.time }}</p>
              <h4 class="mt-1 text-lg font-black uppercase leading-tight tracking-wide text-white">{{ slot.title }}</h4>
              <p class="mt-1 text-sm leading-snug text-white/70">{{ slot.summary }}</p>
              <p class="mt-2 flex items-center gap-1.5 text-xs text-white/50">
                <i class="i-mdi-map-marker-outline shrink-0 text-accent/80"></i>
                {{ slot.place }}
              </p>
            </li>
          </ol>
        </div>
      </div>

      <a
        v-scroll-animate="{ animation: 'fade-up', delay: 300 }"
        :href="LIEU.mapLink"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-accent/40 sm:p-6"
      >
        <i class="i-mdi-map-marker h-8 w-8 shrink-0 text-accent"></i>
        <div class="flex-1">
          <h3 class="text-lg font-black uppercase tracking-widest text-white sm:text-xl">{{ LIEU.name }}</h3>
          <p class="mt-1 text-sm text-white/60">{{ LIEU.address }}</p>
        </div>
        <i class="i-mdi-arrow-top-right h-5 w-5 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-accent"></i>
      </a>
    </div>
  </section>
</template>
