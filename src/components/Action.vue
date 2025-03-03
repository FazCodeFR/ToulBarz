<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl underline underline-offset-4 decoration-accent">
          Nos actions
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Le Street Workout, bien que non reconnu comme sport officiel par les ministères, gagne en popularité et se développe de façon autonome. Toul'Barz croit fermement en son potentiel et s'engage à accélérer son développement à l'échelle internationale et locale, en se concentrant sur trois axes principaux.
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="incentive in incentives" :key="incentive.name" class="relative isolate flex flex-col text-center overflow-hidden rounded-3xl bg-gray-900 px-8 pb-8 pt-48 sm:pt-48 lg:pt-64">
          <img :src="incentive.imgSrc" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-gray-900/10" />
          <div class="flex justify-center items-center">
            <span class="text-accent w-12 h-12" :class="incentive.icon"></span>
          </div>
          <h3 class="mt-3 text-xl font-semibold leading-6 text-white">
            {{ incentive.name }}
          </h3>
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="flex gap-x-2.5">
                {{ incentive.description }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const incentives = [
  {
    name: 'Faire découvrir le Street Workout',
    icon: 'i-mdi-account-voice',
    imgSrc: '/img/missions/mission_decouverte.jpg',
    description: "À Toulouse, on veut rendre le Street Workout incontournable, soutenu et reconnu par tous.",
  },
  {
    name: 'Créer les meilleures conditions',
    icon: 'i-mdi-dumbbell',
    imgSrc: '/img/missions/mission_conditions.jpg',
    description: "Toul’Barz structure la pratique pour que chaque athlète progresse dans un environnement optimal.",
  },
  {
    name: 'Accompagner vers la performance',
    icon: 'i-mdi-trophy',
    imgSrc: '/img/missions/mission_performance.png',
    description: "Nos événements sont pensés pour développer les talents et ouvrir des portes vers le haut niveau.",
  },
]
</script>
