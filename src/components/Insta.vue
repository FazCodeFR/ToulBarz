<template>
  <div v-if="showInstagram && isProd" ref="instagramSection" class="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/5 to-orange-500/5 rounded-full blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-pink-600 text-sm font-semibold mb-4">
          <i class="i-mdi-instagram mr-1"></i>
          Réseaux sociaux
        </span>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Suivez-nous sur <span class="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">Instagram</span>
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos dernières actualités, photos et vidéos
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 transition-all duration-500 hover:shadow-2xl">
        <div class="elfsight-app-633bb5bb-c30f-488d-9697-1777a15ae963" data-elfsight-app-lazy></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showInstagram = ref(true);
const isProd = process.env.NODE_ENV === 'production';

onMounted(() => {
  if (!isProd) return;

  const removeElfsightLink = () => {
    const links = document.querySelectorAll('body > a[href*="elfsight.com"]');
    links.forEach(el => el.remove());
  };
  removeElfsightLink();
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.tagName === "A" && node.href.includes("elfsight.com")) {
          node.remove();
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener("error", function (event) {
    if (
      event.message &&
      event.message.includes("APP_VIEWS_LIMIT_REACHED")
    ) {
      showInstagram.value = false;
    }
  });

  setTimeout(() => {
    const el = document.querySelector(".elfsight-app-633bb5bb-c30f-488d-9697-1777a15ae963");
    if (!el || el.childElementCount === 0) {
      showInstagram.value = false;
    }
  }, 5000);
});
</script>
