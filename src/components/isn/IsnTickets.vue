<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { BILLETTERIE_URL, extraTickets, tiers } from '@/data/isn'
</script>

<template>
  <section id="tickets" class="relative scroll-mt-24 px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-5xl">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-black uppercase tracking-wide text-transparent [-webkit-text-stroke:1.5px_white] sm:text-5xl">
          &gt; Les tickets
        </h2>
        <p class="mt-4 flex items-center justify-center gap-3 text-sm font-bold tracking-widest text-white/60">
          01.08.26 <i aria-hidden="true" class="i-mdi-web"></i> 02.08.26
        </p>
      </div>

      <div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <div
          v-for="(tier, index) in tiers"
          :key="tier.id"
          v-scroll-animate="{ animation: 'fade-up', delay: index * 100 }"
          :class="[
            'group relative flex flex-col rounded-3xl border p-8 transition-all duration-500 sm:p-10',
            tier.featured
              ? 'border-accent/50 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-accent/10 hover:-translate-y-2 hover:shadow-accent/20'
              : 'border-white/10 bg-white/5 hover:-translate-y-1 hover:border-white/30'
          ]"
        >
          <div
            v-if="tier.featured"
            class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-4 py-1 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-accent/30"
          >
            Recommandé
          </div>

          <h3 :id="tier.id" class="text-2xl font-black uppercase tracking-widest text-white">
            {{ tier.name }}
          </h3>
          <p class="mt-4 flex items-baseline gap-2">
            <span class="text-accent">✧</span>
            <span class="text-5xl font-black tracking-tight text-white">{{ tier.price }}</span>
          </p>
          <p v-if="tier.intro" class="mt-4 text-sm text-white/60">{{ tier.intro }}</p>

          <ul role="list" class="mt-8 flex-1 space-y-5">
            <li v-for="feature in tier.features" :key="feature.title">
              <p class="flex items-start gap-3 text-sm font-bold uppercase tracking-wide text-white">
                <span class="mt-0.5 flex-none text-accent">✦</span>
                {{ feature.title }}
              </p>
              <p v-if="feature.description" class="mt-1 pl-7 text-sm leading-relaxed text-white/60">
                {{ feature.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Autres tarifs -->
      <div
        v-scroll-animate="{ animation: 'fade-up', delay: 0 }"
        class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
      >
        <h3 class="text-sm font-black uppercase tracking-widest text-white/70">✧ Autres tarifs</h3>
        <ul class="mt-4 divide-y divide-white/10">
          <li v-for="ticket in extraTickets" :key="ticket.name">
            <!-- Entrée avec descriptif repliable -->
            <details v-if="ticket.details" class="group py-3">
              <summary class="flex cursor-pointer list-none flex-wrap items-baseline justify-between gap-2">
                <span class="flex items-center gap-2 text-sm font-semibold text-white">
                  <i aria-hidden="true" class="i-mdi-chevron-down text-white/50 transition-transform duration-300 group-open:rotate-180"></i>
                  {{ ticket.name }}
                  <span v-if="ticket.note" class="text-xs font-normal uppercase tracking-widest text-white/40">{{ ticket.note }}</span>
                </span>
                <span class="text-sm font-black text-white">{{ ticket.price }}</span>
              </summary>
              <div class="mt-3 pl-6">
                <p class="text-sm leading-relaxed text-white/60">{{ ticket.details.description }}</p>
                <ul class="mt-4 space-y-2">
                  <li
                    v-for="m in ticket.details.meta"
                    :key="m.text"
                    class="flex items-start gap-2.5 text-sm text-white/70"
                  >
                    <i aria-hidden="true" :class="m.icon" class="mt-0.5 flex-none text-accent"></i>
                    {{ m.text }}
                  </li>
                </ul>
              </div>
            </details>

            <!-- Entrée simple -->
            <div v-else class="flex flex-wrap items-baseline justify-between gap-2 py-3">
              <span class="text-sm font-semibold text-white">
                {{ ticket.name }}
                <span v-if="ticket.note" class="ml-2 text-xs font-normal uppercase tracking-widest text-white/40">{{ ticket.note }}</span>
              </span>
              <span class="text-sm font-black text-white">{{ ticket.price }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Bouton unique de réservation -->
      <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="mt-10 text-center">
        <a
          :href="BILLETTERIE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-10 py-4 text-base font-bold uppercase tracking-wide text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
        >
          Réserver ma place
          <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
      </div>
    </div>
  </section>
</template>
