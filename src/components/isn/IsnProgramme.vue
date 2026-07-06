<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { programme } from '@/data/isn'
</script>

<template>
  <section id="programme" class="relative scroll-mt-24 px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="text-center text-3xl font-black uppercase tracking-wide text-transparent [-webkit-text-stroke:1.5px_white] sm:text-5xl">
        &gt; Au programme
      </h2>

      <div v-for="(day, dayIndex) in programme" :key="day.day" class="mt-16">
        <!-- Titre du jour -->
        <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="text-center">
          <div class="relative inline-block px-14 py-6">
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -rotate-3 rounded-[50%] border border-white/15"></div>
            <h3 class="relative text-3xl font-black uppercase tracking-widest text-white sm:text-4xl">{{ day.day }}</h3>
            <p class="relative mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">✦ {{ day.date }} ✦</p>
          </div>
        </div>

        <!-- Créneaux -->
        <div class="mt-10 space-y-8">
          <article
            v-for="(slot, slotIndex) in day.slots"
            :key="slot.title"
            v-scroll-animate="{ animation: 'fade-up', delay: slotIndex * 100 }"
            class="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-accent/40 sm:p-8"
          >
            <div class="flex items-start gap-3">
              <span class="mt-1 text-accent">✦</span>
              <div class="flex-1">
                <h4 class="text-xl font-black uppercase tracking-wide text-white sm:text-2xl">{{ slot.title }}</h4>
                <p class="mt-2 flex items-center gap-2 text-sm text-white/60">
                  <i class="i-mdi-map-marker-outline flex-shrink-0 text-accent/80"></i>
                  {{ slot.place }}
                </p>

                <div v-if="slot.badges?.length" class="mt-3 flex flex-wrap gap-2">
                  <span
                    v-for="badge in slot.badges"
                    :key="badge"
                    class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70"
                  >
                    {{ badge }}
                  </span>
                </div>

                <p
                  v-for="paragraph in slot.paragraphs"
                  :key="paragraph"
                  class="mt-4 text-sm leading-relaxed text-white/70 sm:text-base"
                >
                  {{ paragraph }}
                </p>

                <p class="mt-6 inline-flex items-center gap-2 text-lg font-black tracking-widest text-white">
                  <i class="i-mdi-clock-outline text-accent"></i>
                  {{ slot.time }}
                </p>
              </div>
            </div>
          </article>
        </div>

        <div v-if="dayIndex < programme.length - 1" class="mx-auto mt-16 h-px w-64 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </div>
  </section>
</template>
