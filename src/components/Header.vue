<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useStore } from "@/store";

const route = useRoute();
const store = useStore();
const { isMobileMenuOpen: isMenuOpen } = storeToRefs(store);

const isScrolled = ref(false);

const navItems = [
  { to: "/street-workout", label: "Street Workout", icon: "i-mdi-dumbbell" },
  { to: "/actualites", label: "Nos actus", icon: "i-mdi-newspaper-variant-outline" },
  { to: "/evenements", label: "Événements", icon: "i-mdi-calendar-star" },
  { to: "/adhesions", label: "Adhésions", icon: "i-mdi-card-account-details-outline" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  const y = window.scrollY;
  if (!isScrolled.value && y > 20) isScrolled.value = true;
  else if (isScrolled.value && y < 10) isScrolled.value = false;
};

// Verrouille le scroll du body quand le menu est ouvert
watch(isMenuOpen, (open) => {
  if (typeof document === "undefined") return;
  document.body.style.overflow = open ? "hidden" : "";
});

// Ferme le menu si la route change (ex: back browser)
watch(() => route.path, closeMenu);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (typeof document !== "undefined") document.body.style.overflow = "";
});
</script>

<template>
  <!-- Navbar sticky -->
  <header
    :class="[
      'sticky top-0 z-50 border-b transition-colors duration-300 ease-out backdrop-blur-xl',
      isMenuOpen ? 'bg-neutral-950/95' : 'bg-black/80',
      isMenuOpen ? 'border-transparent' : (isScrolled ? 'border-white/10' : 'border-transparent')
    ]"
  >
    <nav
      class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-x-4 px-4 sm:px-6"
      aria-label="Global"
    >
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <router-link
          to="/"
          class="-m-1.5 p-1.5 group inline-flex items-center"
          @click="closeMenu"
        >
          <span class="sr-only">Toul'Barz</span>
          <img
            :class="[
              'h-14 w-auto origin-left transition-transform duration-300 ease-out will-change-transform group-hover:scale-105',
              isScrolled ? 'scale-90' : 'scale-100'
            ]"
            src="/img/logo.webp"
            alt="Logo Toul'Barz"
            width="56"
            height="56"
          >
        </router-link>
      </div>

      <!-- Nav desktop -->
      <div class="hidden lg:flex lg:gap-x-8">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="[
            'relative text-base font-semibold leading-6 py-2 px-3 transition-all duration-300 group',
            $route.path === item.to ? 'text-accent' : 'text-secondary hover:text-accent'
          ]"
        >
          {{ item.label }}
          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300',
              $route.path === item.to ? 'w-full' : 'w-0 group-hover:w-full'
            ]"
          ></span>
        </router-link>
      </div>

      <!-- Actions droite -->
      <div class="flex flex-1 items-center justify-end gap-x-3">
        <!-- CTA desktop uniquement -->
        <router-link
          to="/adhesions"
          class="hidden lg:inline-flex group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-dark px-5 py-2.5 text-sm font-semibold text-primary shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105"
        >
          <span class="relative z-10 flex items-center gap-2">
            Rejoins-nous
            <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </router-link>

        <!-- Burger mobile -->
        <button
          type="button"
          class="relative z-[60] lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 active:scale-95"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ isMenuOpen ? "Fermer le menu" : "Ouvrir le menu" }}</span>
          <span class="relative block h-4 w-5">
            <span
              :class="[
                'absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out',
                isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              ]"
            ></span>
            <span
              :class="[
                'absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out',
                isMenuOpen ? 'opacity-0 scale-x-50' : 'opacity-100 scale-x-100'
              ]"
            ></span>
            <span
              :class="[
                'absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out',
                isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              ]"
            ></span>
          </span>
        </button>
      </div>
    </nav>
  </header>

  <!-- Menu mobile (overlay full-screen, hors du header pour échapper au backdrop-filter) -->
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-200 ease-in"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col items-center justify-center bg-neutral-950/95 backdrop-blur-xl overflow-y-auto"
      @click.self="closeMenu"
    >
        <!-- Halo décoratif -->
        <div
          class="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        ></div>

        <div
          class="relative flex w-full max-w-sm flex-col items-center gap-4 px-5 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-6"
          @click.self="closeMenu"
        >
          <!-- Liens -->
          <nav class="flex w-full flex-col gap-2">
            <router-link
              v-for="(item, index) in navItems"
              :key="item.to"
              :to="item.to"
              :style="{ animationDelay: `${index * 60}ms` }"
              :class="[
                'menu-item group flex items-center gap-4 rounded-2xl border px-5 py-4 font-semibold transition-all duration-300 active:scale-[0.98]',
                $route.path === item.to
                  ? 'border-accent/40 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 text-white shadow-lg shadow-accent/20'
                  : 'border-white/5 bg-white/[0.03] text-white hover:border-white/10 hover:bg-white/[0.06]'
              ]"
              @click="closeMenu"
            >
              <span
                :class="[
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300',
                  $route.path === item.to ? 'bg-accent/20 text-accent' : 'bg-white/5 text-white/70 group-hover:bg-accent/10 group-hover:text-accent'
                ]"
              >
                <i :class="[item.icon, 'h-6 w-6']"></i>
              </span>
              <span class="text-base leading-none">{{ item.label }}</span>
            </router-link>
          </nav>

          <!-- CTA principal -->
          <router-link
            to="/adhesions"
            class="menu-item group relative mt-4 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-accent-dark px-6 py-4 text-base font-bold text-white shadow-xl shadow-accent/40 transition-transform duration-300 active:scale-[0.98]"
            :style="{ animationDelay: `${navItems.length * 60}ms` }"
            @click="closeMenu"
          >
            <span class="relative z-10 flex items-center gap-2">
              Rejoins l'aventure
              <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </router-link>

          <!-- Réseaux sociaux -->
          <div
            class="menu-item mt-2 flex items-center justify-center gap-3"
            :style="{ animationDelay: `${(navItems.length + 1) * 60}ms` }"
          >
            <a
              href="https://www.instagram.com/toulbarz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Toul'Barz"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <i class="i-bxl-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
  </Transition>
</template>

<style scoped>
.menu-item {
  animation: slide-in 0.4s ease-out backwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
