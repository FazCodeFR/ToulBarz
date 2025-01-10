<template>
  <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 -top-3 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
      <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-base font-semibold leading-7 text-accent">Tarifs</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight  underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl" v-text=" route.path !== '/boutique' ? 'Choisissez l\'offre qui vous correspond' : 'Avantage adhérents'"></p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Adaptez votre adhésion selon vos besoins et objectifs avec Toul'Barz.</p>
    <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
        <h3 :id="tier.id" class="text-base font-semibold leading-7 text-accent">{{ tier.name }}</h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-bold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
          <span class="text-base text-gray-500"> / an</span>
        </p>
        <p class="mt-6 text-base leading-7 text-gray-600">{{ tier.description }}</p>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
          <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
            <span class="i-mdi-checkbox-marked-circle h-6 w-5 flex-none text-accent"></span>
            {{ feature }}
          </li>
        </ul>
        <!-- Check if the current route is not '/boutique' -->
        <router-link v-if="route.path !== '/boutique'" to="/boutique" :aria-describedby="tier.id" :class="[tier.featured ? 'bg-accent text-white shadow hover:bg-accent-dark' : 'text-accent ring-1 ring-inset ring-accent hover:ring-accent-dark', 'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark sm:mt-10']">
          Commencez dès aujourd'hui
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const tiers = [
  {
    name: 'Adhésion Classique',
    id: 'tier-classique',
    priceMonthly: '95€',
    description: "Adapté aux niveaux débutant et intermédiaire",
    features: [
      'Accès exclusif aux séances hebdomadaires',
      'Tarifs réduits chez tous nos partenaires',
      'Tarifs réduits aux événements de Toul\'Barz',
      'T-shirt de l’association offert',
      'Accès à la boutique des adhérents',
      'Groupe communautaire Instagram',
      'Invitation aux sorties adhérents trimestrielles',
      'Participation à la vie de l’association (Assemblée générale)',
      'Assurance sportive',
    ],
    featured: true,
  },
  {
    name: 'Adhésion Athlète',
    id: 'tier-athlete',
    priceMonthly: '145€',
    description: "Adapté aux niveaux avancés",
    features: [
      'Accès à tous les avantages des adhérents classiques',
      'Kit compétitif (T-shirt Athlète + Swockets)',
      'Groupe athlète Instagram',
      'Frais de participation offerts aux compétitions organisées par Toul\'Barz',
      'Accès au coaching ponctuel compétitif',
      'Mise en avant de l’athlète sur les réseaux sociaux et shooting photo professionnel offert',
    ],
    featured: false,
  },
]
</script>
