<template>
  <section id="vision-section" class="bg-white py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
          <i class="i-mdi-eye-outline"></i>
          Notre mission
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Notre <span class="text-accent">vision</span>
        </h2>
        <p class="mt-6 max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
          Chez <span class="font-semibold text-gray-900">Toul'Barz</span>, nous ne sommes pas un simple
          <span class="font-semibold text-gray-900">club de street workout à Toulouse.</span>
          Nous sommes une association qui <span class="font-semibold text-accent">structure, développe et fédère</span> la pratique du
          <span class="font-semibold text-gray-900">street workout</span> et
          <span class="font-semibold text-gray-900">calisthenics</span> en France, avec l'ambition de porter cette discipline plus haut et d'en faire un sport reconnu à grande échelle.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
        <div
          v-for="(feature, index) in features"
          :key="feature.name"
          class="group relative rounded-2xl p-1 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 hover:from-accent/30 hover:to-accent/20 transition-all duration-500"
        >
          <div class="h-full rounded-xl bg-white p-8 flex flex-col items-center">
            <div class="mb-6 p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
              <div :class="feature.icon" class="h-10 w-10 text-accent" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-center text-gray-900 group-hover:text-accent transition-colors">
              {{ feature.name }}
            </h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


  

<script setup>
const features = [
  {
    name: 'Officialiser',
    description:
      'Nous travaillons activement pour poser les fondations d\"un street workout reconnu où chaque pratiquant peut évoluer sereinement.',
    icon: "i-mdi-seal",
  },
  {
    name: 'Démocratiser',
    description:
      'Chaque jour, nous nous engageons à faire découvrir le street workout à tous ceux qui ne le connaissent pas. Nous sommes convaincus que chacun, quel que soit son âge ou son niveau, peut devenir la meilleure version de lui-même grâce au street workout.',
    icon: "i-mdi-account-group",
  },
  {
    name: 'Rendre accessible',
    description:
      'Du débutant à niveau élite, nous accompagnons tous les niveaux afin que chacun progresse à son rythme et trouve sa place au sein de notre communauté.',
    icon: "i-mdi-access-point",
  },
]
</script>
