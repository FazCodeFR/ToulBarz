<template>
  <!-- Hero Section avec fond parallax -->
  <header class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>
    <div class="absolute inset-0 bg-[url('/img/figures/header.webp')] bg-cover bg-center bg-fixed"></div>

    <div class="container mx-auto px-4 z-20 text-center">
      <span class="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6">
        <i class="i-mdi-dumbbell mr-1"></i>
        Discipline sportive
      </span>
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
        STREET <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-orange-400">WORKOUT</span>
      </h1>
      <p class="text-xl md:text-2xl font-light max-w-2xl mx-auto text-white/90 drop-shadow-lg">
        Maîtrisez votre corps, défiez la gravité
      </p>
      <a href="#content" class="inline-flex items-center justify-center mt-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300">
        <i class="i-mdi-chevron-down text-2xl animate-bounce"></i>
      </a>
    </div>
  </header>

  <div id="content" class="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Introduction -->
      <section class="py-16">
        <div class="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-orange-100">
              <i class="i-mdi-information-outline text-accent text-2xl"></i>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">
              Qu'est-ce que le <span class="text-accent">Street Workout</span> ?
            </h2>
          </div>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Le Street Workout est une discipline sportive mêlant gymnastique et musculation, pratiquée principalement en
            extérieur dans des parcs ou sur du mobilier urbain. Cette discipline met l'accent sur le travail avec le
            poids du corps et encourage la créativité dans les mouvements.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Né dans les quartiers urbains, ce sport est accessible à tous et promeut des valeurs de persévérance, de
            dépassement de soi et de respect. Il combine force, équilibre, souplesse et coordination.
          </p>
        </div>
      </section>

      <!-- Principales figures -->
      <section class="py-16">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Figures
          </span>
          <h2 class="text-4xl font-bold text-gray-900">
            Les Figures <span class="text-accent">Emblématiques</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="figure in figures"
            :key="figure.name"
            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
          >
            <div class="h-64 overflow-hidden relative">
              <img
                :src="figure.image"
                :alt="figure.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-300">
                  {{ figure.name }}
                </h3>
                <span
                  class="text-xs font-bold uppercase py-1.5 px-3 rounded-full text-white shadow-sm"
                  :class="getDifficultyClasses(figure.difficulty).badge"
                >
                  {{ figure.difficulty }}
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ figure.description }}
              </p>
              <div class="pt-4 border-t border-gray-100">
                <p class="text-sm text-gray-500">
                  <span class="font-semibold text-accent">Muscles: </span>
                  {{ figure.muscles }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conseils -->
      <section class="py-16 mb-16">
        <div class="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-orange-600/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <div class="text-center mb-10">
              <span class="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
                Progression
              </span>
              <h2 class="text-3xl font-bold text-white">
                Conseils pour <span class="text-accent">progresser</span>
              </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="(conseil, index) in conseils"
                :key="index"
                class="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div class="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex-shrink-0">
                  <i :class="conseil.icon" class="text-xl text-white"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">{{ conseil.title }}</h3>
                  <p class="text-gray-400 text-sm">{{ conseil.description }}</p>
                </div>
              </div>
            </div>

            <div class="mt-10 text-center">
              <RouterLink
                to="/adhesions"
                class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark rounded-full text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
              >
                Commencer maintenant
                <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Call to action -->
  <section class="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

    <div class="relative text-center mx-auto max-w-4xl px-6">
      <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
        Rejoignez-nous
      </span>
      <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Prêt à défier vos <span class="text-accent">limites</span> ?
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        Rejoignez la communauté Street Workout et découvrez le potentiel illimité de votre corps.
      </p>
      <RouterLink
        to="/adhesions"
        class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark rounded-full text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
      >
        Rejoins-nous
        <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const figures = [
  {
    name: 'Muscle-up',
    difficulty: 'Intermédiaire',
    description: 'Le muscle-up est un mouvement avancé qui combine une traction et un dip. L\'athlète commence suspendu à une barre, effectue une traction puissante pour amener sa poitrine au-dessus de la barre, puis étend les bras pour terminer en position de support.',
    muscles: 'Dos, biceps, triceps, épaules, abdominaux',
    image: '/img/figures/muscle-up.webp'
  },
  {
    name: 'Human Flag',
    image: '/img/figures/humanflag.webp',
    difficulty: 'Intermédiaire',
    description: 'Le human flag (drapeau humain) est une figure impressionnante où l\'athlète tient un poteau vertical avec ses mains et maintient son corps à l\'horizontale, parallèle au sol, formant ainsi la figure d\'un drapeau.',
    muscles: 'Épaules, abdominaux, obliques, avant-bras'
  },
  {
    name: 'Front Lever',
    image: '/img/figures/frontlever.webp',
    difficulty: 'Intermédiaire',
    description: 'Le front lever consiste à maintenir le corps en position horizontale, face vers le haut, en étant suspendu par les mains à une barre. Le corps doit former une ligne droite des épaules aux pieds.',
    muscles: 'Abdominaux, dos, épaules'
  },
  {
    name: 'Planche',
    image: '/img/figures/planche.webp',
    difficulty: 'Avancée',
    description: 'La planche est une figure où l\'athlète maintient son corps parallèle au sol en équilibre sur ses mains, bras tendus. Le corps entier est suspendu au-dessus du sol, créant une ligne droite.',
    muscles: 'Épaules, pectoraux, triceps, abdominaux'
  },
  {
    name: 'Handstand',
    image: '/img/figures/handstand.webp',
    difficulty: 'Débutant',
    description: 'L\'équilibre sur les mains est une figure fondamentale où l\'athlète se tient verticalement sur ses mains, corps aligné. Cette figure est souvent utilisée comme base pour d\'autres mouvements plus avancés.',
    muscles: 'Épaules, abdominaux, dos'
  },
  {
    name: 'Back Lever',
    image: '/img/figures/backlever.webp',
    difficulty: 'Intermédiaire',
    description: 'Le back lever est l\'inverse du front lever. L\'athlète maintient son corps en position horizontale, face vers le sol, en étant suspendu par les mains à une barre, formant une ligne droite.',
    muscles: 'Dos, biceps, abdominaux'
  }
];

const conseils = [
  {
    title: "Maîtrisez les bases",
    description: "Commencez par maîtriser les mouvements fondamentaux comme les tractions, dips et pompes avant de tenter des figures avancées.",
    icon: "i-mdi-school-outline"
  },
  {
    title: "Progression graduelle",
    description: "Respectez les étapes d'apprentissage et progressez graduellement pour éviter les blessures et construire une base solide.",
    icon: "i-mdi-trending-up"
  },
  {
    title: "Échauffement complet",
    description: "Échauffez-vous correctement avant chaque session pour préparer vos muscles et articulations aux efforts intenses.",
    icon: "i-mdi-timer-outline"
  },
  {
    title: "Communauté",
    description: "Rejoignez une communauté de pratiquants pour échanger des conseils, vous motiver mutuellement et progresser ensemble.",
    icon: "i-mdi-account-group-outline"
  }
];

const getDifficultyClasses = (difficulty) => {
  const colorMap = {
    'Débutant': {
      badge: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    'Intermédiaire': {
      badge: 'bg-gradient-to-r from-accent to-accent-dark'
    },
    'Avancée': {
      badge: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    'default': {
      badge: 'bg-gradient-to-r from-accent to-accent-dark'
    }
  }

  return colorMap[difficulty] || colorMap.default
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
