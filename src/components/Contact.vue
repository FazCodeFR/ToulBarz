<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'

const whatsappUrl = 'https://chat.whatsapp.com/E0ywhsRd8Hu6l8qhScf8t9?mode=ems_copy_t'

const benefits = [
  'Tous niveaux, du débutant à l\'avancé',
  'Encadré par nos coachs',
  'Aucun matériel nécessaire',
]
</script>

<template>
  <section id="contact-section" class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="mb-16">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Comment <span class="text-accent">commencer</span>&nbsp;?
        </h2>
        <p class="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
          Pas besoin d'être un athlète pour nous rejoindre
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-stretch">
        <!-- Bloc principal : séance d'essai -->
        <div
          v-scroll-animate="{ animation: 'fade-up', delay: 100 }"
          class="relative overflow-hidden lg:col-span-7 rounded-2xl bg-white border border-gray-100 p-8 sm:p-10 shadow-md transition-shadow duration-300 hover:shadow-xl"
        >
          <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent-dark" aria-hidden="true"></div>

          <div>
            <div class="flex items-center gap-4">
              <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark shadow-lg shadow-accent/30">
                <i class="i-mdi-account-plus text-3xl text-white" aria-hidden="true"></i>
              </div>
              <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Séance d'essai gratuite
              </h3>
            </div>

            <p class="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
              <span class="font-semibold text-accent">Viens découvrir gratuitement</span>
              le street workout au sein de notre association. Débutant, intermédiaire ou niveau avancé, tu pourras te faire encadrer par nos coachs et tu n'as pas besoin de matériel&nbsp;!
            </p>

            <ul class="mt-8 grid gap-3 sm:grid-cols-3">
              <li
                v-for="benefit in benefits"
                :key="benefit"
                class="flex items-start gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 ring-1 ring-gray-100"
              >
                <i class="i-mdi-check-circle mt-0.5 shrink-0 text-lg text-accent" aria-hidden="true"></i>
                {{ benefit }}
              </li>
            </ul>

            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-center font-semibold text-primary shadow-lg shadow-accent/30 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex sm:w-auto sm:px-8"
            >
              <i class="i-mdi-whatsapp shrink-0 text-xl" aria-hidden="true"></i>
              Ma séance d'essai gratuite
            </a>
          </div>
        </div>

        <!-- Blocs secondaires -->
        <div class="flex flex-col gap-6 lg:col-span-5">
          <div
            v-scroll-animate="{ animation: 'fade-up', delay: 200 }"
            class="group flex flex-1 flex-col rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-gray-200 transition duration-300 hover:shadow-lg hover:ring-accent/40"
          >
            <div class="mb-4 flex items-center gap-4">
              <i class="i-mdi-calendar-star shrink-0 text-3xl text-accent" aria-hidden="true"></i>
              <h3 class="text-lg font-bold text-gray-900">
                Nos événements
              </h3>
            </div>
            <p class="text-sm leading-relaxed text-gray-600">
              Retrouve tous nos événements dans
              <router-link
                to="/evenements"
                class="rounded-sm font-semibold text-accent transition-colors duration-300 hover:text-accent-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >l'onglet dédié</router-link> et ne manque aucune actu sur notre
              <a
                href="https://www.instagram.com/toulbarz_tlb/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 rounded-sm font-semibold text-accent transition hover:text-accent-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Instagram
                <i class="i-mdi-instagram text-sm" aria-hidden="true"></i>
              </a>
            </p>
            <router-link
              to="/evenements"
              class="mt-6 inline-flex w-fit items-center gap-1 rounded-sm text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Voir le calendrier
              <i class="i-mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
            </router-link>
          </div>

          <div
            v-scroll-animate="{ animation: 'fade-up', delay: 300 }"
            class="group flex flex-1 flex-col rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-gray-200 transition duration-300 hover:shadow-lg hover:ring-accent/40"
          >
            <div class="mb-4 flex items-center gap-4">
              <i class="i-mdi-tree shrink-0 text-3xl text-accent" aria-hidden="true"></i>
              <h3 class="text-lg font-bold text-gray-900">
                En plein air
              </h3>
            </div>
            <p class="text-sm leading-relaxed text-gray-600">
              Toul'Barz est né d'un simple check à chaque nouvelle rencontre au parc, alors fais de même pour commencer ton nouveau&nbsp;sport&nbsp;!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
