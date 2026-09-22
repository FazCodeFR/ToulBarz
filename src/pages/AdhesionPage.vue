<script setup lang="ts">
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
          Découvrez les avantages de l'adhésion et inscrivez-vous en toute sécurité via HelloAsso.
        </p>
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
