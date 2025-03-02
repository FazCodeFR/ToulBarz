<template>
  <div class="bg-white py-2 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative isolate bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-7xl text-center sm:max-w-4xl">
          <h1 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-5xl underline underline-offset-4 decoration-accent text-gray-900">Événements de l'association</h1>
          <h2 class="mt-12 mb-6 text-lg font-medium tracking-tight text-gray-800 sm:text-xl">Découvrez nos prochains événements :</h2>
        </div>

        <!-- Tab -->
        <div class="sticky top-20 z-10 bg-white">
          <div class="sm:hidden w-full">
            <label for="tabs" class="w-full sr-only">Sélectionner un onglet</label>
            <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-accent focus:ring-accent" v-model="activeTab">
              <option v-for="tab in tabs" :key="tab.name" :value="tab.key">{{ tab.name }}</option>
            </select>
          </div>

          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex" aria-label="Tabs">
                <a v-for="tab in tabs" :key="tab.name" href="#"
                  :class="[tab.key === activeTab ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium']"
                  @click.prevent="activeTab = tab.key" :aria-current="tab.key === activeTab ? 'page' : undefined">
                  {{ tab.name }}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col lg:flex-row gap-8">
        <div class="lg:sticky lg:top-40 lg:w-1/3 self-start">
          <Calendar
            class="border rounded-lg p-4 shadow-sm"
            :min-date="new Date()"
            :attributes="calendarAttributes"
            @dayclick="handleDayClick"
          />
        </div>

        <!-- Event List -->
        <div v-if="getActiveEvents.length" class="lg:w-2/3 space-y-16 lg:space-y-20">
          <article v-for="event in getActiveEvents" :key="event.id" :id="`event-${event.id}`" class="relative isolate flex flex-col gap-6 w-full">
            <div>
              <div class="flex items-center gap-x-2 text-lg">
                <time :datetime="event.start" class="text-gray-500">
                  {{ formatDate(event.start) }}
                </time>
              </div>
              <div class="group relative">
                <h3 class="mt-1 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {{ event.summary }}
                </h3>
                <p class="mt-5 mb-2 text-sm leading-6 text-gray-600"
                  v-html="event.description || 'Aucune description disponible'">
                </p>
                <template v-if="event.location !== 'Lieu non spécifié'">
                <a :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`" target="_blank" class="mt-4 text-sm text-gray-700 flex items-center gap-x-2">
                  <span class="text-accent i-mdi-map-marker"></span>
                  <span class="relative hover:text-accent after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
                    {{ event.location }}
                  </span>
                </a>
              </template>
              </div>
            </div>
          </article>
        </div>
        <p v-else class="mt-8 text-center text-gray-600">Aucun événement à afficher pour le moment.</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const isLoading = ref(true);
const activeTab = ref('public');
const eventsPublic = ref([]);
const eventsMembers = ref([]);

const tabs = [
  { name: 'Événements publics', key: 'public' },
  { name: 'Événements adhérents', key: 'members' },
];

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const calendarAttributes = computed(() => {
  const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

  return getActiveEvents.value.map(event => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return {
      key: event.id,
      dates: event.start,
      dot: randomColor,
      // highlight: randomColor,
      popover: {
        label: event.summary,
      },
    };
  });
});

const fetchGoogleCalendarEvents = async (calendarId, eventsRef) => {
  try {
    const now = new Date();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${import.meta.env.VITE_GOOGLE_API_KEY}&singleEvents=true&orderBy=startTime&maxResults=30&timeMin=${now.toISOString()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erreur lors de la récupération des événements');
    const data = await response.json();

    const fetchedEvents = data.items.map((event) => ({
      id: event.id,
      summary: event?.summary || 'Sans titre',
      description: event?.description ? event.description.replace(/\n/g, '<br/>') : '',
      location: event?.location || 'Lieu non spécifié',
      start: new Date(event.start?.dateTime || event.start?.date),
      end: new Date(event.end?.dateTime || event.end?.date),
    }));
    eventsRef.value = fetchedEvents.filter((event) => event.end > now);
  } catch (error) {
    console.error('Erreur lors de la récupération des événements :', error);
  }
};


onMounted(async () => {
  await Promise.all([
    fetchGoogleCalendarEvents(import.meta.env.VITE_CALENDAR_PUBLIC_ID, eventsPublic),
    fetchGoogleCalendarEvents(import.meta.env.VITE_CALENDAR_MEMBERS_ID, eventsMembers),
  ]);
  isLoading.value = false;
});

const getActiveEvents = computed(() =>
  activeTab.value === 'public' ? eventsPublic.value : eventsMembers.value
);

function handleDayClick(day) {
  // Parcourir les attributs du calendrier pour trouver les événements associés à la date cliquée
  const eventOnDay = calendarAttributes.value.find(attr => {
    // Vérifier si la date de l'événement correspond à la date cliquée
    return attr.dates.toDateString() === day.date.toDateString();
  });
  if (eventOnDay) {
    const eventElement = document.getElementById(`event-${eventOnDay.key}`);
    const scrollTop = eventElement.offsetTop + 20;
    if (eventElement) {
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  }
}



</script>