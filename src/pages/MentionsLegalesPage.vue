<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
    <!-- Decorative elements -->
    <div class="fixed top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    <div class="fixed bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
          <i class="i-mdi-file-document-outline mr-1"></i>
          Informations légales
        </span>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Mentions <span class="text-accent">Légales</span>
        </h1>
      </div>

      <!-- Content Card -->
      <div class="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 overflow-hidden">
        <!-- Association Info -->
        <section class="p-8 border-b border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-information-outline text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Informations sur l'Association</h2>
          </div>
          <div class="space-y-3 text-gray-600 pl-12">
            <p><span class="font-medium text-gray-900">Nom de l'Association:</span> ToulBarz - Street Workout Toulouse</p>
            <p><span class="font-medium text-gray-900">Adresse:</span> 3 IMPASSE AMPERE, 31400 TOULOUSE</p>
            <p><span class="font-medium text-gray-900">Numéro d'enregistrement:</span> W313033791</p>
          </div>
        </section>

        <!-- Host Details -->
        <section class="p-8 border-b border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-server text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Hébergeur du Site</h2>
          </div>
          <div class="space-y-3 text-gray-600 pl-12">
            <p><span class="font-medium text-gray-900">Nom de l'Hébergeur:</span> Vercel</p>
            <p><span class="font-medium text-gray-900">Adresse:</span> 340 S Lemon Ave, Walnut, CA 91789, États-Unis</p>
            <p>
              <span class="font-medium text-gray-900">Contact:</span>
              <a href="mailto:support@vercel.com" class="text-accent hover:text-accent-dark hover:underline transition-colors ml-1">
                support@vercel.com
              </a>
            </p>
          </div>
        </section>

        <!-- GDPR -->
        <section class="p-8 border-b border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-shield-lock-outline text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Conformité au RGPD</h2>
          </div>
          <p class="text-gray-600 pl-12">
            Nous respectons votre vie privée et nous engageons à protéger vos données personnelles conformément aux
            exigences du Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        <!-- Cookies -->
        <section class="p-8 border-b border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-cookie-outline text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Politique de Cookies</h2>
          </div>
          <p class="text-gray-600 pl-12">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez accepter ou
            refuser l'utilisation de cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <!-- Intellectual Property -->
        <section class="p-8 border-b border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-copyright text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Droits de Propriété Intellectuelle</h2>
          </div>
          <p class="text-gray-600 pl-12">
            Le contenu de ce site, y compris les textes, images, logos et vidéos, est protégé par les lois sur la
            propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.
          </p>
        </section>

        <!-- Contact -->
        <section class="p-8 border-b border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-email-outline text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Informations de Contact</h2>
          </div>
          <div class="space-y-3 text-gray-600 pl-12">
            <p>
              <span class="font-medium text-gray-900">Email:</span>
              <a href="mailto:contact@toulbarz.fr" class="text-accent hover:text-accent-dark hover:underline transition-colors ml-1">
                contact@toulbarz.fr
              </a>
            </p>
            <p>
              <span class="font-medium text-gray-900">Instagram:</span>
              <a href="https://www.instagram.com/toulbarz_tlb/" target="_blank" rel="noopener" class="text-accent hover:text-accent-dark hover:underline transition-colors ml-1">
                @toulbarz_tlb
              </a>
            </p>
          </div>
        </section>

        <!-- Terms -->
        <section class="p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 rounded-xl bg-accent/10">
              <i class="i-mdi-file-check-outline text-accent text-xl"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Conditions d'Utilisation</h2>
          </div>
          <p class="text-gray-600 pl-12">
            En utilisant ce site, vous acceptez nos conditions d'utilisation. Veuillez lire attentivement nos
            conditions avant d'accéder à notre contenu.
          </p>
        </section>
      </div>

      <!-- Footer -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-500">
          &copy; 2025 ToulBarz - Street Workout Toulouse. Tous droits réservés.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
