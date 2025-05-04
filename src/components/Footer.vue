<script setup lang="ts">
const currentYear = new Date().getFullYear();

const associationInfo = {
  name: 'ToulBarz',
  description:
    'Association de Street Workout à Toulouse, dédiée à la pratique, l\'apprentissage et le développement de la discipline.',
  address: '34 rue Boulbonne, 31000 Toulouse',
  email: 'contact@toulbarz.fr',
  practiceHoursTitle: 'Horaires adhérents',
  practiceHours: [
  {
    day: 'Vendredi',
    time: '16h30 - 19h00',
    place: 'The roof',
    link: 'https://maps.app.goo.gl/B4raGkQYrwzhEUZSA'
  },
  {
    day: 'Dimanche',
    time: '16h30 - 18h00',
    place: 'L-Danse',
    link: 'https://maps.app.goo.gl/QdnSPB2oT174P7y5A'
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
  // { label: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
];
</script>

<template>
  <footer class="bg-primary text-secondary p-8">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Association Info -->
        <div>
          <h3 class="text-xl text-accent font-bold mb-4">{{ associationInfo.name }}</h3>
          <p class="mb-4">{{ associationInfo.description }}</p>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/toulbarz_tlb/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
              <span class="sr-only">Instagram</span>
              <div class="h-6 w-6 i-mdi-instagram"></div>
            </a>
            <a href="https://tiktok.com/@toul_barz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
              <span class="sr-only">Tiktok</span>
              <div class="h-6 w-6 i-bxl-tiktok"></div>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent">Liens rapides</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link :to="link.path" class="hover:text-accent transition-colors duration-300">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent">Contact</h3>
          <p class="mb-2 flex items-center">
            <i class="i-mdi-map-marker text-gray-400 mr-2"></i>{{ associationInfo.address }}
          </p>
          <p class="mb-2 flex items-center">
            <i class="i-mdi-email text-gray-400 mr-2"></i>
            <a :href="'mailto:' + associationInfo.email" class="hover:text-accent transition-colors duration-300">
              {{ associationInfo.email }}
            </a>
          </p>

          <h4 class="font-bold mt-4 mb-2">{{ associationInfo.practiceHoursTitle }}</h4>
          <p v-for="(hour, index) in associationInfo.practiceHours" :key="index" class="mb-1">
            <span>{{ hour.day }} à </span>
            <a :href="hour.link" class="text-accent hover:text-accent-dark hover:underline" target="_blank" rel="noopener">
              {{ hour.place }}
            </a>
            <span> : {{ hour.time }}</span>
          </p>

        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent">Newsletter</h3>
          <!-- <p class="mb-4">Inscris-toi pour recevoir nos actualités et ne rien manquer !</p> -->
          <p class="mb-4">A venir très prochainement</p>
          <!-- <form class="space-y-2" @submit.prevent>
            <div>
              <input 
                type="email" 
                placeholder="Ton email" 
                class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button type="submit" class="btn bg-accent rounded-lg  px-4 py-2 w-full">S'inscrire</button>
          </form> -->
        </div> 
      </div>

      <div class="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
      <p>&copy; {{ currentYear }} {{ associationInfo.name }}. Tous droits réservés.</p>
      <div class="mt-4 md:mt-0 flex items-center">
        <a href="https://leoairaudi.com/" target="_blank">
          <p class="text-sm text-accent hover:text-accent-dark hover:underline transition">Développé avec 🧡 par Léo Airaudi</p>
        </a>
      </div>

      <div class="mt-4 md:mt-0">
        <router-link
          v-for="link in legalLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm text-gray-400 hover:text-accent transition-colors duration-300 mx-2"
        >
          {{ link.label }}
        </router-link>
      </div>
    </div>

    </div>
  </footer>
</template>
