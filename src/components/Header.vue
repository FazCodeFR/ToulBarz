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

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Header avec réduction au scroll -->
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-primary/70 backdrop-blur-md shadow-md h-18' : 'bg-primary h-32'
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
            :class="[isScrolled ? 'h-12 w-auto' : 'h-16 w-auto']"
            src="/img/logo.webp"
            alt="Logo Toul'Barz"
          >
        </router-link>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          to="Street workout"
          class="text-base font-semibold leading-6 text-secondary py-2 pr-4 pl-3 border-b-2 border-transparent hover:text-accent hover:border-accent duration-200"
          active-class="text-accent"
        >
          Street workout
        </router-link>
        <router-link
          to="/event"
          class="text-base font-semibold leading-6 text-secondary py-2 pr-4 pl-3 border-b-2 border-transparent hover:text-accent hover:border-accent duration-200"
          active-class="text-accent"
        >
          Événements
        </router-link>
        <router-link
          to="/boutique"
          class="text-base font-semibold leading-6 text-secondary py-2 pr-4 pl-3 border-b-2 border-transparent hover:text-accent hover:border-accent duration-200"
          active-class="text-accent"
        >
          La boutique
        </router-link>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <router-link
          to="/boutique"
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
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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
    <div v-if="isMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10 bg-primary opacity-75"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center gap-x-6">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Toul'Barz</span>
            <img class="h-28 w-auto" src="/img/logo.webp" alt="Logo Toul'Barz">
          </router-link>
          <router-link
            to="/boutique"
            class="ml-auto rounded-md bg-accent px-3 py-2 text-base font-semibold text-secondary shadow-sm hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Rejoins-nous
          </router-link>
          <button
            @click="toggleMenu"
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-secondary"
          >
            <span class="sr-only">Fermer le menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary hover:bg-accent duration-200"
              >
                Street workout
              </router-link>
              <router-link
                to="/event"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary hover:bg-accent duration-200"
              >
                Événements
              </router-link>
              <router-link
                to="/boutique"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary hover:bg-accent duration-200"
              >
                La boutique
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
