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
  <div class="absolute top-0 left-0 w-full h-32 bg-black z-40"></div>

  <!-- Navbar sticky -->
  <header
    :class="[
    'sticky top-0 z-50 transition-all duration-300 ease-in-out',
    isScrolled ? 'bg-primary/70 backdrop-blur-md shadow-md' : 'bg-primary',
    isMenuOpen ? 'h-auto' : 'h-24'
  ]"

  >
    <nav
      :class="[ 
        'mx-auto flex max-w-7xl items-center justify-between gap-x-6 transition-all duration-300 ease-in-out',
        isScrolled ? 'p-4' : 'p-6'
      ]"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Toul'Barz</span>
          <img
            :class="[isScrolled ? 'h-14 w-auto' : 'h-16 w-auto']"
            src="/img/logo.webp"
            alt="Logo Toul'Barz"
          >
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          to="street-workout"
          :class="[
            'text-base font-semibold leading-6 py-2 pr-4 pl-3 border-b-2 border-transparent duration-200',
            $route.path === '/street-workout'
              ? 'text-accent border-b-2 border-accent'
              : 'text-secondary hover:text-accent hover:border-accent'
          ]"
        >
          Street Workout
        </router-link>
        <router-link
          to="/actualites"
          :class="[
            'text-base font-semibold leading-6 py-2 pr-4 pl-3 border-b-2 border-transparent duration-200',
            $route.path === '/actualites'
              ? 'text-accent border-b-2 border-accent'
              : 'text-secondary hover:text-accent hover:border-accent'
          ]"
        >
          Nos actu
        </router-link>
        <router-link
          to="/evenements"
          :class="[
            'text-base font-semibold leading-6 py-2 pr-4 pl-3 border-b-2 border-transparent duration-200',
            $route.path === '/evenements'
              ? 'text-accent border-b-2 border-accent'
              : 'text-secondary hover:text-accent hover:border-accent'
          ]"
        >
          Événements
        </router-link>
        <router-link
          to="/adhesions"
          :class="[
            'text-base font-semibold leading-6 py-2 pr-4 pl-3 border-b-2 border-transparent duration-200',
            $route.path === '/adhesions' 
              ? 'text-accent border-b-2 border-accent' 
              : 'text-secondary hover:text-accent hover:border-accent'
          ]"
        >
          Adhésions
        </router-link>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <router-link
          to="/adhesions"
          class="rounded-md bg-accent px-3 py-2 text-base font-semibold text-secondary shadow-sm hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Rejoins-nous
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="toggleMenu"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <svg
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
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
    <div v-if="isMenuOpen" class="lg:hidden overflow-auto max-h-[80vh]">
      <router-link
        to="street-workout"
        @click="closeMenu"
        :class="[
          'block py-2 px-4 text-white duration-200',
          $route.path === '/street-workout'
            ? 'bg-accent text-secondary'
            : 'hover:bg-accent hover:text-secondary'
        ]"
      >
        Street workout
      </router-link>
      <router-link
        to="/actualites"
        @click="closeMenu"
        :class="[
          'block py-2 px-4 text-white duration-200',
          $route.path === '/actualites'
            ? 'bg-accent text-secondary'
            : 'hover:bg-accent hover:text-secondary'
        ]"
      >
        Nos actu
      </router-link>
      <router-link
        to="/evenements"
        @click="closeMenu"
        :class="[
          'block py-2 px-4 text-white duration-200',
          $route.path === '/evenements'
            ? 'bg-accent text-secondary'
            : 'hover:bg-accent hover:text-secondary'
        ]"
      >
        Événements
      </router-link>
      <router-link
        to="/adhesions"
        @click="closeMenu"
        :class="[
          'block py-2 px-4 text-white duration-200',
          $route.path === '/adhesions' 
            ? 'bg-accent text-secondary' 
            : 'hover:bg-accent hover:text-secondary'
        ]"
      >
        Adhésions
      </router-link>
    </div>

  </header>
</template>
