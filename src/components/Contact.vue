<template>
  <div class="bg-white pb-10 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2
        class="mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
        Comment commencer le street workout ?
      </h2>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Section 1 -->
        <div>
          <h3 class="border-l border-accent pl-6 font-semibold text-gray-900">
            Prends ta séance d'essai gratuite
          </h3>
          <p class="border-l border-gray-200 pl-6 pt-2 text-gray-600 mb-4">
            Viens découvrir gratuitement le street workout au sein de notre association. Débutant, intermédiaire ou niveau avancé, tu pourras te faire encadrer par nos coachs et tu n'as pas besoin de matériel,
            <a href="https://www.instagram.com/toulbarz_tlb/" target="_blank"
              class="inline-flex items-center gap-1 text-accent hover:text-accent-dark hover:underline transition">
              donc viens comme tu es !
            </a>
          </p>
        </div>

        <!-- Section 2 -->
        <div>
          <h3 class="border-l border-accent pl-6 font-semibold text-gray-900">
            Rencontre-nous à nos évènements
          </h3>
          <p class="border-l border-gray-200 pl-6 pt-2 text-gray-600 mb-4">
            Retrouve tous nos événements dans
            <router-link
                to="/evenements"
                class="font-semibold hover:text-accent transition-colors duration-300"
              > l'onglet dédié sur notre site </router-link> et ne manque aucune actu sur notre
            <a href="https://www.instagram.com/toulbarz_tlb/" target="_blank"
              class="inline-flex items-center gap-1 text-accent hover:text-accent-dark hover:underline transition">
              instagram
              <span class="w-5 h-5 i-mdi-instagram"></span>
            </a>
          </p>

        </div>

        <!-- Section 3 -->
        <div>
          <h3 class="border-l border-accent pl-6 font-semibold text-gray-900">
            Rends-toi dans un parc en extérieur
          </h3>
          <p class="border-l border-gray-200 pl-6 pt-2 text-gray-600">
            Toul’Barz est né d’un simple check à chaque nouvelle rencontre au parc, alors fais de même pour commencer ton nouveau sport !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
