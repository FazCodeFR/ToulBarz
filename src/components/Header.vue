<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Gestion de l'état du menu et du scroll
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour détecter le scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Fonction pour fermer le menu lorsqu'un lien est cliqué
const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Fond noir statique -->
  <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-black/95 z-40"></div>

  <!-- Navbar sticky -->
  <header
    :class="[
    'sticky top-0 z-50 transition-all duration-500 ease-out',
    isScrolled ? 'bg-primary/80 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-primary',
    isMenuOpen ? 'h-auto' : 'h-24'
  ]"
  >
    <nav
      :class="[
        'mx-auto flex max-w-7xl items-center justify-between gap-x-6 transition-all duration-500 ease-out',
        isScrolled ? 'p-4' : 'p-6'
      ]"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5 group">
          <span class="sr-only">Toul'Barz</span>
          <img
            :class="[
              'transition-all duration-500 ease-out group-hover:scale-105',
              isScrolled ? 'h-14 w-auto' : 'h-16 w-auto'
            ]"
            src="/img/logo.webp"
            alt="Logo Toul'Barz"
          >
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-8">
        <router-link
          to="street-workout"
          :class="[
            'relative text-base font-semibold leading-6 py-2 px-3 transition-all duration-300 group',
            $route.path === '/street-workout'
              ? 'text-accent'
              : 'text-secondary hover:text-accent'
          ]"
        >
          Street Workout
          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300',
              $route.path === '/street-workout' ? 'w-full' : 'w-0 group-hover:w-full'
            ]"
          ></span>
        </router-link>
        <router-link
          to="/actualites"
          :class="[
            'relative text-base font-semibold leading-6 py-2 px-3 transition-all duration-300 group',
            $route.path === '/actualites'
              ? 'text-accent'
              : 'text-secondary hover:text-accent'
          ]"
        >
          Nos actu
          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300',
              $route.path === '/actualites' ? 'w-full' : 'w-0 group-hover:w-full'
            ]"
          ></span>
        </router-link>
        <router-link
          to="/evenements"
          :class="[
            'relative text-base font-semibold leading-6 py-2 px-3 transition-all duration-300 group',
            $route.path === '/evenements'
              ? 'text-accent'
              : 'text-secondary hover:text-accent'
          ]"
        >
          Événements
          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300',
              $route.path === '/evenements' ? 'w-full' : 'w-0 group-hover:w-full'
            ]"
          ></span>
        </router-link>
        <router-link
          to="/adhesions"
          :class="[
            'relative text-base font-semibold leading-6 py-2 px-3 transition-all duration-300 group',
            $route.path === '/adhesions'
              ? 'text-accent'
              : 'text-secondary hover:text-accent'
          ]"
        >
          Adhésions
          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300',
              $route.path === '/adhesions' ? 'w-full' : 'w-0 group-hover:w-full'
            ]"
          ></span>
        </router-link>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <router-link
          to="/adhesions"
          class="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-dark px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105"
        >
          <span class="relative z-10 flex items-center gap-2">
            Rejoins-nous
            <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 transition-colors duration-300"
          @click="toggleMenu"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <svg
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <div v-if="isMenuOpen" class="lg:hidden overflow-auto max-h-[80vh] bg-gradient-to-b from-primary/95 to-primary backdrop-blur-xl">
      <div class="px-4 py-2 space-y-1">
        <router-link
          to="street-workout"
          @click="closeMenu"
          :class="[
            'block py-3 px-4 rounded-xl text-white font-medium transition-all duration-300',
            $route.path === '/street-workout'
              ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-md shadow-accent/30'
              : 'hover:bg-white/10'
          ]"
        >
          Street workout
        </router-link>
        <router-link
          to="/actualites"
          @click="closeMenu"
          :class="[
            'block py-3 px-4 rounded-xl text-white font-medium transition-all duration-300',
            $route.path === '/actualites'
              ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-md shadow-accent/30'
              : 'hover:bg-white/10'
          ]"
        >
          Nos actu
        </router-link>
        <router-link
          to="/evenements"
          @click="closeMenu"
          :class="[
            'block py-3 px-4 rounded-xl text-white font-medium transition-all duration-300',
            $route.path === '/evenements'
              ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-md shadow-accent/30'
              : 'hover:bg-white/10'
          ]"
        >
          Événements
        </router-link>
        <router-link
          to="/adhesions"
          @click="closeMenu"
          :class="[
            'block py-3 px-4 rounded-xl text-white font-medium transition-all duration-300',
            $route.path === '/adhesions'
              ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-md shadow-accent/30'
              : 'hover:bg-white/10'
          ]"
        >
          Adhésions
        </router-link>
      </div>
    </div>

  </header>
</template>
