<template>

  <!-- Hero Section avec fond parallax -->
  <header class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-white/70 z-10"></div>
    <div class="absolute inset-0 bg-[url('/img/presentations/one_arm.jpg')] bg-cover bg-center bg-fixed"></div>

    <div class="container mx-auto px-4 z-20 text-center">
      <h1
        class="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-dark">
        STREET WORKOUT
      </h1>
      <p class="text-xl md:text-2xl font-light max-w-2xl mx-auto text-gray-700">
        Maîtrisez votre corps, défiez la gravité
      </p>
    </div>
  </header>

  <div class="bg-white py-24 sm:py-32">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Introduction avec effet glassmorphism -->
      <section class="py-16">
        <div class="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl border border-gray-200">
          <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
            Qu'est-ce que le Street Workout?
          </h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            Le Street Workout est une discipline sportive mêlant gymnastique et musculation, pratiquée principalement en
            extérieur dans des parcs ou sur du mobilier urbain. Cette discipline met l'accent sur le travail avec le
            poids du corps et encourage la créativité dans les mouvements.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed">
            Né dans les quartiers urbains, ce sport est accessible à tous et promeut des valeurs de persévérance, de
            dépassement de soi et de respect. Il combine force, équilibre, souplesse et coordination.
          </p>
        </div>
      </section>

      <!-- Principales figures avec cartes modernes -->
      <section class="py-16">
        <h2
          class="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
          Les Figures Emblématiques
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="figure in figures" :key="figure.name"
            class="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              :class="getDifficultyClasses(figure.difficulty).hoverGradient">
            </div>
            <div class="h-64 overflow-hidden">
              <img :src="figure.image" :alt="figure.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-6 relative z-10">
              <div class="flex items-center mb-4">
                <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300"
                  :class="getDifficultyClasses(figure.difficulty).titleHover">
                  {{ figure.name }}
                </h3>
                <div class="ml-auto text-xs font-bold uppercase py-1 px-2 rounded-full text-white"
                  :class="getDifficultyClasses(figure.difficulty).badge">
                  {{ figure.difficulty }}
                </div>
              </div>
              <p class="text-gray-700 mb-4">
                {{ figure.description }}
              </p>
              <div class="pt-4 border-t border-gray-300">
                <p class="text-sm text-gray-600">
                  <span :class="getDifficultyClasses(figure.difficulty).accent" class="font-medium">Muscles: </span>
                  {{ figure.muscles }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conseils avec design moderne -->
      <section class="py-16 mb-16">
        <div
          class="relative backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl border border-gray-200 overflow-hidden">
          <!-- Éléments décoratifs -->
          <div
            class="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl">
          </div>
          <div
            class="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl">
          </div>

          <h2
            class="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark relative z-10">
            Conseils pour progresser
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div v-for="(conseil, index) in conseils" :key="index" class="flex items-start space-x-4">
              <div :class="conseil.iconBackground" class="p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path :d="conseil.iconPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ conseil.title }}</h3>
                <p class="text-gray-700">{{ conseil.description }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10 text-center relative z-10">
            <button
              class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Commencer maintenant
            </button>
          </div>
        </div>
      </section>

    </div>

  </div>

  <!-- Call to action -->
  <section class="py-20 bg-gradient-to-r from-gray-200 to-white relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="text-center relative z-10">
      <h2
        class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
        Prêt à défier vos limites?
      </h2>
      <p class="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
        Rejoignez la communauté Street Workout et découvrez le potentiel illimité de votre corps.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button
          class="px-8 py-4 bg-gradient-to-r from-orange-400 to-accent hover:from-orange-500 hover:to-orange-600 text-white shadow rounded-full font-medium hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
          Rejoins-nous
        </button>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'FiguresSection',
  data() {
    return {
      figures: [
        {
          name: 'Muscle-up',
          difficulty: 'Intermédiaire',
          description: 'Le muscle-up est un mouvement avancé qui combine une traction et un dip. L\'athlète commence suspendu à une barre, effectue une traction puissante pour amener sa poitrine au-dessus de la barre, puis étend les bras pour terminer en position de support.',
          muscles: 'Dos, biceps, triceps, épaules, abdominaux',
          image: '/img/partenaires/ctgym.jpg'
        },
        {
          name: 'Human Flag',
          image: '/img/figures/humanflag.jpg',
          difficulty: 'Intermédiaire',
          description: 'Le human flag (drapeau humain) est une figure impressionnante où l\'athlète tient un poteau vertical avec ses mains et maintient son corps à l\'horizontale, parallèle au sol, formant ainsi la figure d\'un drapeau.',
          muscles: 'Épaules, abdominaux, obliques, avant-bras'
        },
        {
          name: 'Front Lever',
          image: '/img/figures/frontlever.jpg',
          difficulty: 'Intermédiaire',
          description: 'Le front lever consiste à maintenir le corps en position horizontale, face vers le haut, en étant suspendu par les mains à une barre. Le corps doit former une ligne droite des épaules aux pieds.',
          muscles: 'Abdominaux, dos, épaules'
        },
        {
          name: 'Planche',
          image: '/img/figures/planche.jpg',
          difficulty: 'Avancée',
          description: 'La planche est une figure où l\'athlète maintient son corps parallèle au sol en équilibre sur ses mains, bras tendus. Le corps entier est suspendu au-dessus du sol, créant une ligne droite.',
          muscles: 'Épaules, pectoraux, triceps, abdominaux'
        },
        {
          name: 'Handstand',
          image: '/img/figures/handstand.jpg',
          difficulty: 'Débutant',
          description: 'L\'équilibre sur les mains est une figure fondamentale où l\'athlète se tient verticalement sur ses mains, corps aligné. Cette figure est souvent utilisée comme base pour d\'autres mouvements plus avancés.',
          muscles: 'Épaules, abdominaux, dos'
        },
        {
          name: 'Back Lever',
          image: '/img/figures/backlever.jpg',
          difficulty: 'Intermédiaire',
          description: 'Le back lever est l\'inverse du front lever. L\'athlète maintient son corps en position horizontale, face vers le sol, en étant suspendu par les mains à une barre, formant une ligne droite.',
          muscles: 'Dos, biceps, abdominaux'
        }
      ],
      conseils: [
        {
          title: "Maîtrisez les bases",
          description: "Commencez par maîtriser les mouvements fondamentaux comme les tractions, dips et pompes avant de tenter des figures avancées.",
          iconBackground: "bg-gradient-to-br from-cyan-500 to-blue-500",
          iconPath: "M9 5l7 7-7 7"
        },
        {
          title: "Progression graduelle",
          description: "Respectez les étapes d'apprentissage et progressez graduellement pour éviter les blessures et construire une base solide.",
          iconBackground: "bg-gradient-to-br from-purple-500 to-pink-500",
          iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
          title: "Échauffement complet",
          description: "Échauffez-vous correctement avant chaque session pour préparer vos muscles et articulations aux efforts intenses.",
          iconBackground: "bg-gradient-to-br from-blue-500 to-indigo-500",
          iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          title: "Communauté",
          description: "Rejoignez une communauté de pratiquants pour échanger des conseils, vous motiver mutuellement et progresser ensemble.",
          iconBackground: "bg-gradient-to-br from-pink-500 to-red-500",
          iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }
      ]
    }
  },
  methods: {
    getDifficultyClasses(difficulty) {
      const colorMap = {
        'Débutant': {
          hoverGradient: 'bg-gradient-to-br from-green-500/30 to-green-600/30',
          titleHover: 'group-hover:text-green-500',
          badge: 'bg-green-500',
          accent: 'text-green-500'
        },
        'Intermédiaire': {
          hoverGradient: 'bg-gradient-to-br from-blue-500/30 to-blue-600/30',
          titleHover: 'group-hover:text-blue-500',
          badge: 'bg-blue-500',
          accent: 'text-blue-500'
        },
        'Avancée': {
          hoverGradient: 'bg-gradient-to-br from-purple-500/30 to-purple-600/30',
          titleHover: 'group-hover:text-purple-500',
          badge: 'bg-purple-500',
          accent: 'text-purple-500'
        },
        // Default fallback to the original cyan colors
        'default': {
          hoverGradient: 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30',
          titleHover: 'group-hover:text-cyan-400',
          badge: 'bg-cyan-500',
          accent: 'text-cyan-400'
        }
      }
      
      // Return the color scheme for the given difficulty or the default if not found
      return colorMap[difficulty] || colorMap.default
    }
  }
}
</script>