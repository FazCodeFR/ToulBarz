<template>
    <div class="legal-notice bg-white text-black p-6 md:p-12 space-y-10 max-w-4xl mx-auto rounded-lg shadow-lg">
      <header class="text-center">
        <h1 class="text-3xl font-bold text-orange-500 mb-6">Mentions Légales</h1>
      </header>
  
      <section class="association-info space-y-6">
        <h2 class="text-2xl font-semibold text-black">Informations sur l'Association</h2>
        <div class="space-y-3">
          <p><strong>Nom de l'Association:</strong> ToulBarz - Street Workout Toulouse</p>
          <p><strong>Adresse:</strong> 3 IMPASSE AMPERE, 31400 TOULOUSE </p>
          <p><strong>Numéro d'enregistrement:</strong> W313033791</p>
        </div>
      </section>
  
      <section class="host-details space-y-6">
        <h2 class="text-2xl font-semibold text-black">Hébergeur du Site</h2>
        <div class="space-y-3">
            <p><strong>Nom de l'Hébergeur:</strong> Vercel</p>
            <p><strong>Adresse:</strong> 340 S Lemon Ave, Walnut, CA 91789, États-Unis</p>
            <p><strong>Contact:</strong> <a href="mailto:support@vercel.com" class="text-orange-500 hover:underline">support@vercel.com</a></p>
        </div>
      </section>

  
      <section class="gdpr-compliance space-y-6">
        <h2 class="text-2xl font-semibold text-black">Conformité au RGPD</h2>
        <p>Nous respectons votre vie privée et nous engageons à protéger vos données personnelles conformément aux exigences du Règlement Général sur la Protection des Données (RGPD). </p>
        </section>
  
      <section class="cookie-policy space-y-6">
        <h2 class="text-2xl font-semibold text-black">Politique de Cookies</h2>
        <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez accepter ou refuser l'utilisation de cookies dans les paramètres de votre navigateur.</p>
      </section>
  
      <section class="intellectual-property space-y-6">
        <h2 class="text-2xl font-semibold text-black">Droits de Propriété Intellectuelle</h2>
        <p>Le contenu de ce site, y compris les textes, images, logos et vidéos, est protégé par les lois sur la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.</p>
      </section>
  
      <section class="contact-info space-y-6">
        <h2 class="text-2xl font-semibold text-black">Informations de Contact</h2>
        <div class="space-y-3">
          <p><strong>Email:</strong> <a href="mailto:contact@toulbarz.fr" class="text-orange-500 hover:underline">contact@toulbarz.fr</a></p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/toulbarz_tlb/" class="text-orange-500 hover:underline">@toulbarz_tlb</a></p>
        </div>
      </section>
  
      <section class="terms-of-use space-y-6">
        <h2 class="text-2xl font-semibold text-black">Conditions d'Utilisation</h2>
        <p>En utilisant ce site, vous acceptez nos conditions d'utilisation. Veuillez lire attentivement nos conditions avant d'accéder à notre contenu.</p>
      </section>
  
      <footer class="text-center text-sm text-gray-600 mt-10">
        <p>&copy; 2025 ToulBarz - Street Workout Toulouse. Tous droits réservés.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // This component remains simple without complex functionality
  </script>
  
  <style scoped>
  /* Smooth animation and fade-in effect */
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  .legal-notice {
    animation: fadeIn 1s ease-out;
  }
  
  h1, h2 {
    font-family: 'Roboto', sans-serif;
  }
  
  a {
    transition: color 0.2s ease-in-out;
  }
  
  a:hover {
    color: #FF5722;
  }
  </style>
  