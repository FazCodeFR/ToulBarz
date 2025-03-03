<template>
<section id="vision-section" class="bg-white py-16 sm:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="mt-1 text-5xl font-bold text-gray-900 sm:text-6xl sm:tracking-tight underline underline-offset-8 decoration-accent">
        Notre vision
      </p>
      <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
        Toul'Barz est une association toulousaine qui place le street workout au cœur de ses projets.
        <br /><br />
        Toul'Barz propose des cours pour tous, débutants comme avancés, des événements, des collaborations professionnelles, de la gestion de projets, du mentorat et une pépinière d'artistes. Nous croyons en la force du collectif pour moderniser les cultures urbaines tout en respectant leurs valeurs fortes.
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div v-for="feature in features" :key="feature.name" class="flex flex-col">
          <div class="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl border border-gray-200 flex-grow">
            <dt class="text-lg font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <div :class="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 class="text-1xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                {{ feature.name }}
              </h3>
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto text-gray-700 text-lg leading-relaxed">{{ feature.description }}</p>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</section>
</template>
  

<script setup>
const features = [
  {
    name: 'Accessibilité',
    description:
      'Rendre le street workout accessible à tous, en proposant des entraînements adaptés à tous les niveaux et des infrastructures ouvertes à la communauté.',
    icon: "i-mdi-human-greeting-variant",
  },
  {
    name: 'Communauté',
    description:
      'Créer un esprit d\'entraide et de partage, en réunissant des passionnés pour s\'entraîner ensemble et s\'encourager à dépasser nos limites.',
    icon: "i-mdi-account-group",
  },
  {
    name: 'Progression',
    description:
      'Accompagner chaque membre dans son évolution physique et mentale, grâce à des conseils personnalisés et des événements motivants.',
    icon: "i-mdi-trending-up",
  },
]
</script>
