<template>
  <section id="vision-section" class="bg-white py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
        class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
          Notre vision
        </h2>
        <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          Chez ToulBarz, nous croyons que le street workout est bien plus qu'un simple sport. C'est un art, un mode de vie et une communauté.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div
          v-for="feature in features"
          :key="feature.name"
          class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-none bg-white"
        >
          <div class="flex flex-col items-center pt-8 px-12 pb-6">
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
