<template>
    <div v-if="showInstagram && isProd" ref="instagramSection" class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="pb-10 mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
          Instagram
        </h2>
        <div class="elfsight-app-633bb5bb-c30f-488d-9697-1777a15ae963" data-elfsight-app-lazy></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const showInstagram = ref(true);
  const isProd = process.env.NODE_ENV === 'production';
  
  onMounted(() => {
    if (!isProd) return; // Ne pas exécuter le code si on n'est pas en production
  
    // Supprime les liens pub
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
  
    // Surveille les erreurs globales
    window.addEventListener("error", function (event) {
      if (
        event.message &&
        event.message.includes("APP_VIEWS_LIMIT_REACHED")
      ) {
        showInstagram.value = false;
      }
    });
  
    // Fallback au bout de 5s si le widget ne s’est pas affiché
    setTimeout(() => {
      const el = document.querySelector(".elfsight-app-633bb5bb-c30f-488d-9697-1777a15ae963");
      if (!el || el.childElementCount === 0) {
        showInstagram.value = false;
      }
    }, 5000);
  });
  </script>
  