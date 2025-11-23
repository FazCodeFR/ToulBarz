<template>
  <section class="bg-gradient-to-r from-gray-50 to-gray-100 text-black">
    <div class="w-full">
      <!-- Grand conteneur style bannière -->
      <div class="px-6 sm:px-8 py-8 sm:py-12">
        <div class="md:flex md:items-center md:gap-12 mx-auto max-w-screen-xl">
          <div class="md:w-1/3 flex flex-col items-center md:items-start">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <i class="i-mdi-calendar-clock"></i>
              À venir
            </span>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center md:text-left">
              Prochains
              <span class="text-accent">événements</span>
            </h2>
          </div>
          <!-- Cartes d'événements à droite -->
          <div class="flex-1 mt-8 md:mt-0 grid gap-4 sm:gap-6 md:grid-cols-2">
            <RouterLink
              v-for="event in eventsPublic.slice(0, 1)"
              :key="event.id"
              to="/evenements"
              class="rounded-2xl p-5 bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 block group hover:-translate-y-1"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-accent to-accent-dark text-white shadow-sm">
                  <i class="i-mdi-account-group text-sm"></i>
                  Public
                </span>
                <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{{ formatDate(event.start) }}</span>
              </div>
              <h3 class="text-lg font-bold mb-2 text-gray-900 leading-snug group-hover:text-accent transition-colors">
                {{ event.summary }}
              </h3>
              <p class="text-sm text-gray-500 flex items-center gap-1.5">
                <i class="i-mdi-map-marker text-accent"></i>
                {{ event.location }}
              </p>
            </RouterLink>

            <RouterLink
              v-for="event in eventsMembers.slice(0, 1)"
              :key="event.id"
              to="/evenements"
              class="rounded-2xl p-5 bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 block group hover:-translate-y-1"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-sm">
                  <i class="i-mdi-account-check text-sm"></i>
                  Adhérent
                </span>
                <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{{ formatDate(event.start) }}</span>
              </div>
              <h3 class="text-lg font-bold mb-2 text-gray-900 leading-snug group-hover:text-accent transition-colors">
                {{ event.summary }}
              </h3>
              <p class="text-sm text-gray-500 flex items-center gap-1.5">
                <i class="i-mdi-map-marker text-accent"></i>
                {{ event.location }}
              </p>
            </RouterLink>
          </div>
        </div>
        <!-- Lien vers tous les événements -->
        <div class="mt-6 text-center md:text-right mx-auto max-w-screen-xl">
          <RouterLink
            to="/evenements"
            class="inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm font-semibold transition-colors group"
          >
            Voir tous les événements
            <i class="i-mdi-arrow-right transition-transform group-hover:translate-x-1"></i>
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const isLoading = ref(true);
const eventsPublic = ref([]);
const eventsMembers = ref([]);

const fetchGoogleCalendarEvents = async (calendarId, eventsRef) => {
  try {
    const now = new Date();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${import.meta.env.VITE_GOOGLE_API_KEY}&singleEvents=true&orderBy=startTime&maxResults=2&timeMin=${now.toISOString()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erreur API');
    const data = await response.json();

    const fetchedEvents = data.items.map(event => ({
      id: event.id,
      summary: event.summary || 'Sans titre',
      location: event.location || 'Lieu non spécifié',
      start: new Date(event.start?.dateTime || event.start?.date),
    }));

    eventsRef.value = fetchedEvents.filter(e => e.start > now);
  } catch (error) {
    console.error('Erreur événements :', error);
  }
};

onMounted(async () => {
  await Promise.all([
    fetchGoogleCalendarEvents(import.meta.env.VITE_CALENDAR_PUBLIC_ID, eventsPublic),
    fetchGoogleCalendarEvents(import.meta.env.VITE_CALENDAR_MEMBERS_ID, eventsMembers),
  ]);
  isLoading.value = false;
});

const formatDate = (date) =>
  new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
