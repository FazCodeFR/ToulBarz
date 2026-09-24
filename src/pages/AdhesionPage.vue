<script setup lang="ts">
import { vScrollAnimate } from '@/composables/useScrollAnimation'

const description = "Adhérez à Toul'Barz pour la saison 2025-2026 : découvrez nos formules d'adhésion et inscrivez-vous en ligne via HelloAsso en toute sécurité. Rejoignez la communauté Street Workout de Toulouse."

useSeoMeta({
  title: "Adhésions - Toul'Barz",
  description,
  ogTitle: "Adhésions 2025-2026 - Toul'Barz Street Workout",
  ogDescription: description,
  ogUrl: 'https://toulbarz.fr/adhesions',
  twitterTitle: "Adhésions 2025-2026 - Toul'Barz Street Workout",
  twitterDescription: description,
})

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'adhésion, inscription, cotisation, Toul\'Barz, HelloAsso, street workout Toulouse, saison 2025-2026',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="relative py-16 sm:py-24 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-2xl text-center lg:max-w-4xl">
        <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
          Adhésion
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Devenez adhérent <span class="text-accent">Toul'Barz</span>
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Découvrez les avantages de l'adhésion et inscrivez-vous en toute sécurité via HelloAsso. Pas encore décidé ? Venez d'abord tester gratuitement !
        </p>
      </div>

      <!-- Séance d'essai gratuite -->
      <div class="relative mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div
          v-scroll-animate="{ animation: 'fade-up' }"
          class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100 transition-all duration-500 hover:shadow-2xl sm:p-10"
        >
          <!-- Decorative glows -->
          <div class="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
          <div class="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/5 blur-3xl"></div>

          <div class="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div class="max-w-2xl">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                <i class="i-mdi-gift-outline text-sm"></i>
                Séance d'essai gratuite
              </span>
              <h3 class="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Envie de tester <span class="text-accent">avant d'adhérer ?</span>
              </h3>
              <p class="mt-3 text-base leading-7 text-gray-600">
                Viens découvrir le street workout gratuitement, encadré par nos coachs.
              </p>

              <ul class="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                <li class="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
                  <i class="i-mdi-stairs-up text-accent"></i>
                  Tous niveaux
                </li>
                <li class="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
                  <i class="i-mdi-account-group text-accent"></i>
                  Coachs encadrants
                </li>
                <li class="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
                  <i class="i-mdi-check-circle-outline text-accent"></i>
                  Sans matériel
                </li>
              </ul>
            </div>

            <a
              href="https://chat.whatsapp.com/E0ywhsRd8Hu6l8qhScf8t9?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/40 sm:w-auto"
            >
              <i class="i-mdi-whatsapp text-2xl"></i>
              Réserver ma séance
              <i class="i-mdi-arrow-right text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="relative mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <!-- Formule -->
          <div class="lg:col-span-1">
            <Formule></Formule>
          </div>

          <!-- HelloAsso iframe -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div class="bg-gradient-to-r from-accent to-accent-dark p-4">
                <h3 class="font-semibold text-white text-center flex items-center justify-center gap-2">
                  <i class="i-mdi-shield-check"></i>
                  Paiement sécurisé
                </h3>
              </div>
              <iframe
                id="haWidget"
                allowtransparency="true"
                scrolling="auto"
                src="https://www.helloasso.com/associations/toulbarz/adhesions/adhesions-toul-barz-2026-2027/widget"
                class="w-full h-[750px] border-0 lg:h-[820px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
