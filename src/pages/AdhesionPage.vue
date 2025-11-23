<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Formule section -->
    <Formule></Formule>

    <!-- HelloAsso iframe section -->
    <div class="relative py-16 sm:py-24 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Inscription
          </span>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Finalisez votre <span class="text-accent">adhésion</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            Complétez votre inscription en toute sécurité via HelloAsso
          </p>
        </div>

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
            src="https://www.helloasso.com/associations/toulbarz/adhesions/adhesions-toul-barz-2025-2026-1/widget"
            class="w-full border-0"
            style="height: 750px;"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
