<template>
  <div v-scroll-animate="{ animation: 'zoom-in' }" class="w-full lg:h-full">
    <div class="group relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 text-white shadow-2xl shadow-gray-900/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-accent/20 sm:p-10 lg:flex lg:h-full lg:flex-col">
      <!-- Decorative gradient -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>

      <h3 id="tier-classique" class="text-lg font-semibold leading-7 text-accent">
        Adhérent classique
      </h3>

      <div class="mt-6 text-center">
        <p class="flex items-baseline justify-center gap-1.5">
          <span class="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl">
            17,50€
          </span>
          <span class="text-lg font-semibold text-gray-400">/ mois</span>
        </p>
        <p class="mt-3 text-sm text-gray-400">
          soit <span class="font-semibold text-gray-200">175€</span> pour l'année complète
        </p>
        <p class="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10">
          <i class="i-mdi-information-outline h-3.5 w-3.5 text-accent" aria-hidden="true"></i>
          ou 175€ en un seul versement
        </p>
      </div>
      <p class="mt-6 text-base leading-7 text-gray-300">
        {{ description }}
      </p>
      <p class="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">
        Limité à 1 par personne
      </p>
      <ul role="list" class="mt-8 space-y-4 text-sm leading-6 sm:mt-10 lg:flex-1 lg:flex lg:flex-col lg:justify-center">
        <li
          v-for="feature in features"
          :key="feature"
          class="flex gap-x-3 items-start text-gray-300"
        >
          <span class="i-mdi-checkbox-marked-circle h-5 w-5 flex-none mt-0.5 text-accent"></span>
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const description = "Pour les pratiquants débutants ou intermédiaires qui veulent progresser et rejoindre la communauté toulousaine."

const features = [
  'Accès aux 2 séances hebdomadaires',
  'Tarifs réduits chez tous nos partenaires',
  'Tarifs réduits aux events Toul\'Barz',
  'Groupe communautaire d\'adhérents',
  'Invitation aux sorties adhérents',
  'Assurance sportive',
  '1 workshop offert dans l\'année',
]
</script>
