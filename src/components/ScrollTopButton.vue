<template>
    <Transition name="fade">
      <button
        v-if="isVisible"
        @click="scrollToTop"
        class="fixed z-10 bottom-4 right-4 bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        ↑
      </button>
    </Transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        const scrollDuration = 600; // Durée du scroll en ms
        const scrollStep = -window.scrollY / (scrollDuration / 15);
  
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      },
      toggleVisibility() {
        this.isVisible = window.scrollY > 300; // Afficher après avoir scrollé de 300px
      },
    },
    mounted() {
      window.addEventListener("scroll", this.toggleVisibility);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.toggleVisibility);
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.0s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  