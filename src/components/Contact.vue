<template>
  <div class="bg-gray-50 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
          <i class="i-mdi-rocket-launch"></i>
          Commencer
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Comment <span class="text-accent">commencer</span> ?
        </h2>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Section 1 -->
        <div class="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-1.5 transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-[transform,box-shadow] flex flex-col">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <i class="i-mdi-account-plus text-2xl text-white"></i>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">
              Séance d'essai gratuite
            </h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed flex-1">
            <a href="https://chat.whatsapp.com/E0ywhsRd8Hu6l8qhScf8t9?mode=ems_copy_t" target="_blank"
              class="inline-flex items-center gap-1 text-accent font-semibold hover:text-accent-dark hover:underline transition">
              Viens découvrir gratuitement
            </a>
            le street workout au sein de notre association. Débutant, intermédiaire ou niveau avancé, tu pourras te faire encadrer par nos coachs et tu n'as pas besoin de matériel !
          </p>
          <div class="h-1 w-0 bg-gradient-to-r from-accent to-accent-dark group-hover:w-full transition-[width] duration-500 ease-out rounded-full mt-4"></div>
        </div>

        <!-- Section 2 -->
        <div class="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-1.5 transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-[transform,box-shadow] flex flex-col">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <i class="i-mdi-calendar-star text-2xl text-white"></i>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">
              Nos événements
            </h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed flex-1">
            Retrouve tous nos événements dans
            <router-link
                to="/evenements"
                class="font-semibold text-accent hover:text-accent-dark hover:underline transition-colors duration-300"
              >l'onglet dédié</router-link> et ne manque aucune actu sur notre
            <a href="https://www.instagram.com/toulbarz_tlb/" target="_blank"
              class="inline-flex items-center gap-1 text-accent font-semibold hover:text-accent-dark hover:underline transition">
              Instagram
              <i class="i-mdi-instagram text-sm"></i>
            </a>
          </p>
          <div class="h-1 w-0 bg-gradient-to-r from-accent to-accent-dark group-hover:w-full transition-[width] duration-500 ease-out rounded-full mt-4"></div>
        </div>

        <!-- Section 3 -->
        <div class="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl translate-y-0 hover:-translate-y-1.5 transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-[transform,box-shadow] flex flex-col">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <i class="i-mdi-tree text-2xl text-white"></i>
            </div>
            <h3 class="font-bold text-gray-900 text-lg">
              En plein air
            </h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed flex-1">
            Toul'Barz est né d'un simple check à chaque nouvelle rencontre au parc, alors fais de même pour commencer ton nouveau sport !
          </p>
          <div class="h-1 w-0 bg-gradient-to-r from-accent to-accent-dark group-hover:w-full transition-[width] duration-500 ease-out rounded-full mt-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>