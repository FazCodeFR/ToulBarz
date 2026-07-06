<script setup lang="ts">
import 'youtube-video-element'
import 'player.style/sutro'
import { VIDEO_URL } from '@/data/isn'
</script>

<template>
  <section class="relative px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-4xl">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl">
          <span class="text-white/40">&gt;</span> Le film
        </h2>
        <p class="mt-4 text-sm font-semibold uppercase tracking-widest text-white/50">
          ✦ The Competition That Changed Calisthenics Forever
        </p>
      </div>

      <ClientOnly>
        <div class="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
          <media-theme-sutro
            class="w-full"
            style="--media-primary-color: #ff7f11; --media-accent-color: #ff7f11;"
          >
            <youtube-video
              slot="media"
              :src="VIDEO_URL"
              playsinline
              crossorigin
              class="w-full"
              style="aspect-ratio: 16/9;"
            ></youtube-video>
          </media-theme-sutro>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>
