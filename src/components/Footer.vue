<script setup lang="ts">
const currentYear = new Date().getFullYear();

const associationInfo = {
  name: 'ToulBarz',
  description:
    'Association de Street Workout à Toulouse, dédiée à la pratique, l\'apprentissage et le développement de la discipline.',
  address: '📍 Parc de la Maourine, 31200 Toulouse',
  email: '📧 contact@toulbarz.fr',
  phone: '📱 06 XX XX XX XX',
  practiceHoursTitle: 'Horaires de pratique',
  practiceHours: [
    'Lundi, Mercredi, Vendredi: 18h - 20h',
    'Samedi: 14h - 17h',
  ],
};

const quickLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Street Workout', path: '/street-workout' },
  { label: 'Événements', path: '/evenements' },
  { label: 'La boutique', path: '/boutique' },
  { label: 'Faire un don', path: '/boutique' },
];

const legalLinks = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
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
            <a href="https://instagram.com/toulbarz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
              <span class="sr-only">Instagram</span>
              
              <div class="h-6 w-6 i-mdi-instagram"></div>

            </a>
            <a href="https://facebook.com/toulbarz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- SVG Facebook -->
              </svg>
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
          <p class="mb-2">{{ associationInfo.address }}</p>
          <p class="mb-2">{{ associationInfo.email }}</p>
          <p class="mb-2">{{ associationInfo.phone }}</p>
          <h4 class="font-bold mt-4 mb-2">{{ associationInfo.practiceHoursTitle }}</h4>
          <p class="mb-1">{{ associationInfo.practiceHours[0] }}</p>
          <p>{{ associationInfo.practiceHours[1] }}</p>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent">Newsletter</h3>
          <p class="mb-4">Inscris-toi pour recevoir nos actualités et ne rien manquer !</p>
          <form class="space-y-2" @submit.prevent>
            <div>
              <input 
                type="email" 
                placeholder="Ton email" 
                class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button type="submit" class="btn bg-accent rounded-lg  px-4 py-2 w-full">S'inscrire</button>
          </form>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {{ currentYear }} {{ associationInfo.name }}. Tous droits réservés.</p>
        <div class="mt-4 md:mt-0">
          <router-link
            v-for="link in legalLinks"
            :key="link.path"
            :to="link.path"
            class="text-sm text-gray-400 hover:text-primary transition-colors duration-300 mx-2"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
