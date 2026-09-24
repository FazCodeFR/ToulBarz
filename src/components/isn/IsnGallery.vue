<script setup lang="ts">
import { ref } from 'vue'
import { vScrollAnimate } from '@/composables/useScrollAnimation'
import { gallery, galleryMedium, galleryThumb } from '@/data/isn'
import type { GalleryPhoto } from '@/data/isn'

const spanClasses: Record<NonNullable<GalleryPhoto['span']>, string> = {
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2',
  tall: 'row-span-2',
}

// Les tuiles sur 2 colonnes dépassent 800px de rendu sur écran retina : on propose une version 1400px
// (la HD 2400px est réservée à la lightbox, trop lourde pour la grille)
const isWide = (photo: GalleryPhoto) => photo.span === 'large' || photo.span === 'wide'
const wideSizes = '(min-width: 1200px) 576px, (min-width: 768px) 50vw, 100vw'

const activeIndex = ref<number | null>(null)
</script>

<template>
  <section class="relative overflow-hidden px-6 py-16 sm:py-24">
    <div class="pointer-events-none absolute left-1/2 top-1/4 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>

    <div v-scroll-animate="{ animation: 'fade-up', delay: 0 }" class="relative mx-auto max-w-3xl text-center">
      <p class="text-sm font-bold uppercase tracking-[0.3em] text-white/50">✦ En images ✦</p>
      <h2 class="mt-4 text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-5xl">
        Le week-end <span class="text-transparent [-webkit-text-stroke:1.5px_#ff7f11]">en images</span>
      </h2>
    </div>

    <ul
      role="list"
      class="relative mx-auto mt-12 grid max-w-6xl auto-rows-[160px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[240px]"
    >
      <!-- La directive pose un transition-delay inline : elle reste sur le <li> pour ne pas retarder les effets de survol -->
      <li
        v-for="(photo, index) in gallery"
        :key="photo.id"
        v-scroll-animate="{ animation: 'fade-up', delay: (index % 4) * 80 }"
        :class="photo.span && spanClasses[photo.span]"
      >
        <button
          type="button"
          class="group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          :aria-label="`Agrandir la photo : ${photo.alt}`"
          @click="activeIndex = index"
        >
          <img
            :src="galleryThumb(photo.id)"
            :srcset="isWide(photo) ? `${galleryThumb(photo.id)} 800w, ${galleryMedium(photo.id)} 1400w` : undefined"
            :sizes="isWide(photo) ? wideSizes : undefined"
            :alt="photo.alt"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          >
          <span aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"></span>
          <span
            aria-hidden="true"
            class="pointer-events-none absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-accent text-xl text-black opacity-0 shadow-lg shadow-black/40 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            <i class="i-mdi-magnify-plus-outline"></i>
          </span>
        </button>
      </li>
    </ul>

    <IsnLightbox v-model:index="activeIndex" :photos="gallery" />
  </section>
</template>
