<script setup lang="ts">
const currentYear = new Date().getFullYear();

const associationInfo = {
  name: 'ToulBarz',
  description:
    'Toul\'Barz est un club associatif de street workout toulousain dédié à officialiser, démocratiser et rendre accessible la pratique de cette discipline.',
  address: '34 rue Boulbonne, 31000 Toulouse',
  email: 'contact@toulbarz.fr',
  practiceHoursTitle: 'Horaires adhérents',
  practiceHours: [
  {
    day: 'Vendredi',
    time: '17h30 - 20h00',
    place: 'Studio 9',
    link: 'https://maps.app.goo.gl/istoY2LvXYDyz3fn6'
  },
  {
    day: 'Dimanche',
    time: '16h00 - 18h30',
    place: 'The roof',
    link: 'https://maps.app.goo.gl/B4raGkQYrwzhEUZSA'
  }
]
};

const quickLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Street Workout', path: '/street-workout' },
  { label: 'Événements', path: '/evenements' },
  { label: 'Adhésions', path: '/adhesions' },
];

const legalLinks = [
  { label: 'Mentions légales', path: '/mentions-legales' },
];
</script>

<template>
  <footer class="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-secondary overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Association Info -->
        <div class="lg:col-span-1">
          <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
            {{ associationInfo.name }}
          </h3>
          <p class="mb-6 text-gray-300 leading-relaxed">{{ associationInfo.description }}</p>
          <div class="flex space-x-3">
            <a
              href="https://www.instagram.com/toulbarz_tlb/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <span class="sr-only">Instagram</span>
              <div class="h-5 w-5 i-mdi-instagram text-gray-400 group-hover:text-white transition-colors"></div>
            </a>
            <a
              href="https://tiktok.com/@toul_barz"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-black hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <span class="sr-only">Tiktok</span>
              <div class="h-5 w-5 i-bxl-tiktok text-gray-400 group-hover:text-white transition-colors"></div>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Liens rapides</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="group flex items-center text-gray-400 hover:text-accent transition-all duration-300"
              >
                <span class="h-1 w-0 bg-accent rounded-full mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Contact</h3>
          <div class="space-y-3">
            <p class="flex items-start gap-3 text-gray-400">
              <i class="i-mdi-map-marker text-accent mt-0.5 flex-shrink-0"></i>
              <span>{{ associationInfo.address }}</span>
            </p>
            <p class="flex items-center gap-3">
              <i class="i-mdi-email text-accent flex-shrink-0"></i>
              <a
                :href="'mailto:' + associationInfo.email"
                class="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {{ associationInfo.email }}
              </a>
            </p>
          </div>

          <h4 class="font-semibold mt-6 mb-3 text-white text-sm">{{ associationInfo.practiceHoursTitle }}</h4>
          <div class="space-y-2">
            <div
              v-for="(hour, index) in associationInfo.practiceHours"
              :key="index"
              class="flex items-center gap-2 text-sm text-gray-400"
            >
              <i class="i-mdi-clock-outline text-accent/70 flex-shrink-0"></i>
              <span>{{ hour.day }} à </span>
              <a
                :href="hour.link"
                class="text-accent hover:text-accent-dark hover:underline transition-colors"
                target="_blank"
                rel="noopener"
              >
                {{ hour.place }}
              </a>
              <span class="text-gray-500">{{ hour.time }}</span>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Newsletter</h3>
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p class="text-gray-400 text-sm mb-4">Inscris-toi pour recevoir nos actualités</p>
            <div class="flex items-center gap-2 text-accent">
              <i class="i-mdi-clock-outline"></i>
              <span class="text-sm font-medium">À venir prochainement</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} {{ associationInfo.name }}. Tous droits réservés.
          </p>

          <a
            href="https://www.fazcode.com/"
            target="_blank"
            class="group flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <span>Développé avec</span>
            <span class="text-accent group-hover:scale-125 transition-transform duration-300">🧡</span>
            <span>par</span>
            <span class="font-medium text-accent group-hover:underline">FazCode</span>
          </a>

          <div class="flex gap-4">
            <router-link
              v-for="link in legalLinks"
              :key="link.path"
              :to="link.path"
              class="text-sm text-gray-500 hover:text-accent transition-colors duration-300"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
