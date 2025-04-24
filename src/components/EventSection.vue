<template>
  <section class="py-20 px-4 md:px-8 bg-white text-black">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <p class="mt-1 text-5xl font-bold text-gray-900 sm:text-6xl sm:tracking-tight underline underline-offset-8 decoration-orange-500">
          Prochains événements
        </p>
      </div>

      <div v-if="isLoading" class="text-center text-orange-500 font-medium text-lg py-12">
        Chargement des événements...
      </div>

      <transition-group
        name="fade"
        tag="div"
        class="mt-10 grid gap-8 md:grid-cols-2"
      >
        <RouterLink
          v-for="event in eventsPublic.slice(0, 1)"
          :key="event.id"
          to="/evenements"
          class="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all block group"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700">
              Public
            </span>
            <span class="text-sm text-gray-500">{{ formatDate(event.start) }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-black leading-snug group-hover:underline">
            {{ event.summary }}
          </h3>
          <p class="text-sm text-gray-500 italic">
            {{ event.location }}
          </p>
        </RouterLink>

        <RouterLink
          v-for="event in eventsMembers.slice(0, 1)"
          :key="event.id"
          to="/evenements"
          class="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all block group"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium px-3 py-1 rounded-full bg-gray-200 text-gray-800">
              Adhérent
            </span>
            <span class="text-sm text-gray-500">{{ formatDate(event.start) }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-black leading-snug group-hover:underline">
            {{ event.summary }}
          </h3>
          <p class="text-sm text-gray-500 italic">
            {{ event.location }}
          </p>
        </RouterLink>
      </transition-group>

      <div class="mt-8 text-center">
        <RouterLink
          to="/evenements"
          class="text-orange-600 hover:underline text-sm font-medium"
        > Voir les prochains événements →
        </RouterLink>
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
