<template>
  <section class="bg-white text-black">
    <div class="w-full ">
      <!-- Grand conteneur style bannière -->
      <div class="border border-gray-200 bg-gray-50 p-8">
        <div class="md:flex md:items-center md:gap-10 mx-auto max-w-screen-xl">
          <div class="md:w-1/3 flex justify-center md:justify-start">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 text-center md:text-left">
              Prochains événements
            </h2>
          </div>
          <!-- Cartes d'événements à droite -->
          <div class="flex-1 mt-8 md:mt-0 grid gap-6 md:grid-cols-2">
            <RouterLink
              v-for="event in eventsPublic.slice(0, 1)"
              :key="event.id"
              to="/evenements"
              class="rounded-xl p-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all block group"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                  Public
                </span>
                <span class="text-xs text-gray-500">{{ formatDate(event.start) }}</span>
              </div>
              <h3 class="text-lg font-semibold mb-1 text-black leading-snug group-hover:underline">
                {{ event.summary }}
              </h3>
              <p class="text-xs text-gray-500 italic">
                {{ event.location }}
              </p>
            </RouterLink>

            <RouterLink
              v-for="event in eventsMembers.slice(0, 1)"
              :key="event.id"
              to="/evenements"
              class="rounded-xl p-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all block group"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 text-gray-800">
                  Adhérent
                </span>
                <span class="text-xs text-gray-500">{{ formatDate(event.start) }}</span>
              </div>
              <h3 class="text-lg font-semibold mb-1 text-black leading-snug group-hover:underline">
                {{ event.summary }}
              </h3>
              <p class="text-xs text-gray-500 italic">
                {{ event.location }}
              </p>
            </RouterLink>
          </div>
        </div>
        <!-- Lien vers tous les événements -->
        <div class="mt-6 text-center md:text-right  mx-auto max-w-screen-xl">
          <RouterLink
            to="/evenements"
            class="text-orange-600 hover:underline text-sm font-medium"
          >
            Voir les prochains événements →
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
