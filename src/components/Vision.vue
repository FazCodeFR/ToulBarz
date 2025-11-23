<template>
  <section id="vision-section" class="bg-white pb-10 sm:py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
        class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
          Notre vision
        </h2>
        <p class="mt-6 max-w-5xl mx-auto text-lg text-gray-700">
          Chez <span class="font-semibold">Toul’Barz</span>, nous ne sommes pas un simple 
          <span class="font-semibold">club de street workout à Toulouse.</span>
          Nous sommes une association qui <span class="font-semibold">structure, développe et fédère</span> la pratique du 
          <span class="font-semibold">street workout</span> et 
          <span class="font-semibold">calisthenics</span> en France, avec l'ambition de porter cette discipline plus haut et d'en faire un sport reconnu à grande échelle.
        </p>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div
          v-for="feature in features"
          :key="feature.name"
          class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-none bg-white"
        >
          <div class="flex flex-col items-center pt-8 px-6 sm:px-12 pb-6">
            <div class="mb-4">
              <div :class="feature.icon" class="h-14 w-14 text-accent" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-bold mt-2 mb-4 text-center font-montserrat text-gray-900">
              {{ feature.name }}
            </h3>
            <p class="text-gray-600 text-center font-roboto">{{ feature.description }}</p>
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
