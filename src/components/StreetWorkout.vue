<template>
  <div class="bg-white text-primary">
    <div class="mx-auto max-w-7xl py-20 px-4 sm:px-6 sm:py-28 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 items-center gap-12 lg:gap-16 lg:grid-cols-2">
          <!-- Video Section -->
          <div class="relative order-2 lg:order-1">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                
                <!-- Thème Halloween -->
                <media-theme-halloween v-if="isHalloween" class="w-full">
                  <youtube-video
                    slot="media"
                    src="https://www.youtube.com/embed/-S6mYskysIk"
                    playsinline
                    crossorigin
                    class="w-full"
                    style="aspect-ratio: 16/9;"
                  ></youtube-video>
                </media-theme-halloween>

                <!-- Thème Noël -->
                <media-theme-x-mas v-else-if="isChristmas" class="w-full">
                  <youtube-video
                    slot="media"
                    src="https://www.youtube.com/embed/-S6mYskysIk"
                    playsinline
                    crossorigin
                    class="w-full"
                    style="aspect-ratio: 16/9;"
                  ></youtube-video>
                </media-theme-x-mas>

                <!-- Thème par défaut -->
                <media-theme-sutro
                  v-else
                  style="--media-primary-color: #ff7f11; --media-accent-color: #ff7f11;"
                  class="w-full"
                >
                  <youtube-video
                    slot="media"
                    src="https://www.youtube.com/embed/-S6mYskysIk"
                    playsinline
                    crossorigin
                    class="w-full"
                    style="aspect-ratio: 16/9;"
                  ></youtube-video>
                </media-theme-sutro>

              </div>
              
              <!-- Éléments décoratifs -->
              <div 
                class="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                :class="{
                  'bg-orange-500/20': isHalloween,
                  'bg-red-500/20': isChristmas,
                  'bg-accent/20': isDefault
                }"
              ></div>
              <div 
                class="absolute -top-4 -left-4 w-16 h-16 rounded-xl -z-10"
                :class="{
                  'bg-purple-500/10': isHalloween,
                  'bg-green-500/10': isChristmas,
                  'bg-accent/10': isDefault
                }"
              ></div>
            </div>

          <!-- Text Section -->
          <div class="order-1 lg:order-2">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <i class="i-mdi-help-circle-outline"></i>
              Découvrir
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Qu'est-ce que le
              <span class="text-accent">Street Workout</span> ?
            </h2>
            <p class="mt-6 text-lg text-gray-600 leading-relaxed">
              Le street workout ou calisthenics, du grec <em>Khalos Sthenos</em> (« beauté de la force »), est un sport-spectacle en pleine explosion, mêlant force, agilité et équilibre. Utilisant uniquement le poids du corps, il transforme la performance en un spectacle vivant, où les athlètes repoussent les limites de leurs corps.
            </p>
            <div class="mt-8">
              <RouterLink
                to="/street-workout"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg group"
              >
                En savoir plus
                <i class="i-mdi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { computed, onMounted, ref } from 'vue';
import 'youtube-video-element';

// Import tous les thèmes
import 'player.style/sutro';
import 'player.style/x-mas';
import 'player.style/halloween';

const currentTheme = ref('default');

// Fonction pour déterminer la période actuelle
const getCurrentPeriod = () => {
  const now = new Date();
  const month = now.getMonth(); // 0-11 (0 = janvier, 11 = décembre)
  const day = now.getDate();

  // Halloween : du 15 octobre au 5 novembre
  if ((month === 9 && day >= 15) || (month === 10 && day <= 5)) {
    return 'halloween';
  }

  // Noël : du 23 novembre au 5 janvier
  if (
    (month === 10 && day >= 23) || // 23 → 30 novembre (mois 10)
    month === 11 ||                // décembre
    (month === 0 && day <= 5)      // jusqu’au 5 janvier
  ) {
    return 'christmas';
  }

  return 'default';
};

onMounted(() => {
  currentTheme.value = getCurrentPeriod();
});

const isHalloween = computed(() => currentTheme.value === 'halloween');
const isChristmas = computed(() => currentTheme.value === 'christmas');
const isDefault = computed(() => currentTheme.value === 'default');
</script>