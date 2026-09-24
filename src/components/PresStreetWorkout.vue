<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'

type Span = 'large' | 'wide' | 'tall'

const spanClasses: Record<Span, string> = {
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2',
  tall: 'row-span-2',
}

// Mosaïque sur 4 colonnes (2 sur mobile) : les spans sont choisis pour remplir 3 rangées sans trou
const figures: { name: string, image: string, span?: Span }[] = [
  { name: 'Muscle-up', image: '/img/figures/muscle-up.webp', span: 'large' },
  { name: 'Human Flag', image: '/img/figures/humanflag.webp', span: 'tall' },
  { name: 'Front Lever', image: '/img/figures/frontlever.webp' },
  { name: 'Planche', image: '/img/figures/planche.webp' },
  { name: 'Handstand', image: '/img/figures/handstand.webp', span: 'wide' },
  { name: 'Back Lever', image: '/img/figures/backlever.webp', span: 'wide' },
]

const conseils = [
  {
    title: 'Maîtrisez les bases',
    description: 'Commencez par maîtriser les mouvements fondamentaux comme les tractions, dips et pompes avant de tenter des figures avancées.',
    icon: 'i-mdi-school-outline',
  },
  {
    title: 'Progression graduelle',
    description: "Respectez les étapes d'apprentissage et progressez graduellement pour éviter les blessures et construire une base solide.",
    icon: 'i-mdi-trending-up',
  },
  {
    title: 'Échauffement complet',
    description: 'Échauffez-vous correctement avant chaque session pour préparer vos muscles et articulations aux efforts intenses.',
    icon: 'i-mdi-timer-outline',
  },
  {
    title: 'Communauté',
    description: 'Rejoignez une communauté de pratiquants pour échanger des conseils, vous motiver mutuellement et progresser ensemble.',
    icon: 'i-mdi-account-group-outline',
  },
]
</script>

<template>
  <div class="relative overflow-hidden bg-neutral-950 text-white">
    <!-- Hero -->
    <header class="relative flex min-h-[70vh] items-center justify-center px-6 pt-16 pb-12 text-center">
      <div class="absolute inset-0 bg-[url('/img/figures/header.webp')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950"></div>
      <div class="pointer-events-none absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
      <div class="pointer-events-none absolute -right-40 -bottom-48 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>

      <div class="relative mx-auto max-w-4xl">
        <h1 class="font-black uppercase leading-none tracking-wide">
          <span class="block text-5xl text-white sm:text-6xl lg:text-7xl">Street</span>
          <span class="block text-5xl text-transparent [-webkit-text-stroke:2px_#ff7f11] sm:text-6xl lg:text-7xl">Workout</span>
        </h1>

        <p class="mt-6 text-sm font-semibold uppercase tracking-widest text-white/70 sm:text-base">
          Maîtrisez votre corps, défiez la gravité
        </p>

        <a
          href="#content"
          aria-label="Aller au contenu"
          class="mt-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          <i class="i-mdi-chevron-down animate-bounce text-2xl motion-reduce:animate-none"></i>
        </a>
      </div>
    </header>

    <!-- Introduction -->
    <section id="content" class="relative px-6 pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div class="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/15 blur-3xl"></div>

      <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
        <h2 class="text-2xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl">
          Qu'est-ce que le
          <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">street workout</span> ?
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
          Le Street Workout est une discipline sportive mêlant gymnastique et musculation, pratiquée principalement en
          extérieur dans des parcs ou sur du mobilier urbain. Cette discipline met l'accent sur le travail avec le
          poids du corps et encourage la créativité dans les mouvements.
        </p>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          Né dans les quartiers urbains, ce sport est accessible à tous et promeut des valeurs de persévérance, de
          dépassement de soi et de respect. Il combine force, équilibre, souplesse et coordination.
        </p>
      </div>
    </section>

    <div class="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    <!-- Figures -->
    <section class="relative overflow-hidden px-6 py-16 sm:py-24">
      <div class="pointer-events-none absolute left-1/2 top-1/4 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>

      <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Les figures <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">emblématiques</span>
        </h2>
      </div>

      <ul
        role="list"
        class="relative mx-auto mt-12 grid max-w-6xl auto-rows-[160px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[240px]"
      >
        <li
          v-for="(figure, index) in figures"
          :key="figure.name"
          v-scroll-animate="{ animation: 'fade-up', delay: (index % 4) * 80 }"
          :class="figure.span && spanClasses[figure.span]"
        >
          <div class="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-accent/50">
            <img
              :src="figure.image"
              :alt="figure.name"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            >
            <span aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"></span>
            <h3 class="absolute bottom-4 left-4 right-4 text-lg font-black uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-accent sm:bottom-5 sm:left-5 sm:text-2xl">
              {{ figure.name }}
            </h3>
          </div>
        </li>
      </ul>
    </section>

    <div class="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    <!-- Conseils -->
    <section class="relative overflow-hidden px-6 py-16 sm:py-24">
      <div class="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>

      <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Conseils pour <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">progresser</span>
        </h2>
      </div>

      <ol role="list" class="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- La directive pose un transition-delay inline : elle reste sur le <li> pour ne pas retarder les effets de survol -->
        <li
          v-for="(conseil, index) in conseils"
          :key="conseil.title"
          v-scroll-animate="{ animation: 'fade-up', delay: index * 100 }"
        >
          <div class="h-full rounded-2xl border border-white/10 p-6 transition-colors duration-300 hover:border-accent/50 sm:p-7">
            <i aria-hidden="true" :class="conseil.icon" class="text-2xl text-accent"></i>
            <h3 class="mt-5 text-base font-bold uppercase tracking-wide text-white">{{ conseil.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/60">{{ conseil.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <div class="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    <!-- Call to action -->
    <section class="relative overflow-hidden px-6 py-20 sm:py-28">
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"></div>

      <div v-scroll-animate="{ animation: 'zoom-in', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-white/50">✦ Rejoignez-nous ✦</p>
        <h2 class="mt-6 text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
          Prêt à défier vos <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">limites</span> ?
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          Rejoignez la communauté Street Workout et découvrez le potentiel illimité de votre corps.
        </p>

        <RouterLink
          to="/adhesions"
          class="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold uppercase tracking-wide text-black shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent-dark"
        >
          Rejoins-nous
          <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
