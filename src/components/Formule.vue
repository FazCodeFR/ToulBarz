<template>
  <div class="relative isolate bg-gradient-to-b from-gray-50 to-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

    <div class="relative mx-auto max-w-2xl text-center lg:max-w-4xl">
      <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
        Tarifs
      </span>
      <h2
        class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        v-text="route.path !== '/adhesions' ? 'Choisissez l\'offre qui vous correspond' : 'Avantage adhérents'"
      ></h2>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
      Adaptez votre adhésion selon vos besoins et objectifs avec Toul'Barz.
    </p>

    <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
      <div
        v-for="(tier, tierIdx) in tiers"
        :key="tier.id"
        :class="[
          'group relative rounded-3xl p-8 sm:p-10 transition-all duration-500',
          tier.featured
            ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white shadow-2xl shadow-gray-900/30 hover:shadow-3xl hover:shadow-gray-900/40 hover:-translate-y-2'
            : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 ring-1 ring-gray-200 hover:ring-accent/30'
        ]"
      >
        <!-- Featured badge -->
        <div
          v-if="tier.featured"
          class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-accent-dark rounded-full text-sm font-semibold text-white shadow-lg shadow-accent/30"
        >
          Populaire
        </div>

        <!-- Decorative gradient for featured -->
        <div
          v-if="tier.featured"
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"
        ></div>

        <h3
          :id="tier.id"
          :class="[
            'text-lg font-semibold leading-7',
            tier.featured ? 'text-accent' : 'text-accent'
          ]"
        >
          {{ tier.name }}
        </h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span
            :class="[
              'text-5xl font-bold tracking-tight',
              tier.featured ? 'text-white' : 'text-gray-900'
            ]"
          >
            {{ tier.priceMonthly }}
          </span>
          <span
            :class="[
              'text-base',
              tier.featured ? 'text-gray-400' : 'text-gray-500'
            ]"
          >
            / an
          </span>
        </p>
        <p
          :class="[
            'mt-6 text-base leading-7',
            tier.featured ? 'text-gray-300' : 'text-gray-600'
          ]"
        >
          {{ tier.description }}
        </p>
        <ul role="list" class="mt-8 space-y-4 text-sm leading-6 sm:mt-10">
          <li
            v-for="feature in tier.features"
            :key="feature"
            :class="[
              'flex gap-x-3 items-start',
              tier.featured ? 'text-gray-300' : 'text-gray-600'
            ]"
          >
            <span
              :class="[
                'i-mdi-checkbox-marked-circle h-5 w-5 flex-none mt-0.5',
                tier.featured ? 'text-accent' : 'text-accent'
              ]"
            ></span>
            {{ feature }}
          </li>
        </ul>
        <router-link
          v-if="route.path !== '/adhesions'"
          to="/adhesions"
          :aria-describedby="tier.id"
          :class="[
            'mt-8 block rounded-xl py-3 px-4 text-center text-sm font-semibold transition-all duration-300 sm:mt-10',
            tier.featured
              ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.02]'
              : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
          ]"
        >
          <span class="flex items-center justify-center gap-2">
            Commencez dès aujourd'hui
            <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
          </span>
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
    priceMonthly: '175€',
    description: "Adapté aux niveaux débutant et intermédiaire",
    features: [
      'Accès aux 2 séances hebdomadaires',
      'Tarifs réduits chez tous nos partenaires',
      'Tarifs réduits aux events Toul\'Barz',
      'Groupe communautaire d\'adhérents',
      'Invitation aux sorties adhérents',
      'Assurance sportive',
      '1 workshop offert dans l\'année',
    ],
    featured: true,
  },
  {
    name: 'Adhésion Athlète',
    id: 'tier-athlete',
    priceMonthly: '250€',
    description: "Adapté aux niveaux avancés",
    features: [
      'Accès à tous les avantages des adhérents classiques',
      'Participation à la saison Turbo\'Barz',
      'Kit athlète ( T-shirt athlète + Swockets )',
      'Groupe communautaire athlète',
      'Opportunité d\'animer des spectacles',
      'Mise en avant sur les réseaux sociaux',
      'Shooting professionnel offert',
      'Si adhésion prise à l\'année t-shirt offert',
    ],
    featured: false,
  },
]
</script>
