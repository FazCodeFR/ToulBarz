<template>
  <div class="bg-white py-2 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative isolate bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-7xl text-center sm:max-w-4xl">
          <h1 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-5xl underline underline-offset-4 decoration-accent text-gray-900">Nos actualités</h1>
          <p class="mt-6 mb-12 text-lg font-medium text-gray-600 sm:text-xl">
            Découvrez nos prochains événements et rejoignez-nous
          </p>
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

        <div class="mt-12 flex flex-col gap-8 lg:flex-row">
          <!-- Calendar Section -->
          <div class="lg:sticky lg:top-40 lg:w-1/3 self-start">
            <div class="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg">
              <div class="bg-accent/10 p-4">
                <h3 class="font-medium text-accent text-center">
                  Calendrier des événements {{ activeTab === 'public' ? 'publics' : 'adhérents' }}
                </h3>
              </div>
              <Calendar
                class="p-4"
                expanded
                borderless
                :min-date="new Date()"
                :attributes="calendarAttributes"
                @dayclick="handleDayClick"
              />
            </div>
          </div>

          <!-- Event List -->
          <div class="lg:w-2/3">
            <div v-if="getActiveEvents.length" class="space-y-8">
              <article 
                v-for="event in getActiveEvents" 
                :key="event.id" 
                :id="`event-${event.id}`" 
                class="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <div class="absolute top-0 left-0 h-full w-1 bg-accent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <time :datetime="event.start" class="flex items-center gap-2 text-sm font-medium text-accent">
                    <span class="i-mdi-calendar-outline h-5 w-5"></span>
                    {{ formatDate(event.start) }}
                  </time>
                  
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <span class="i-mdi-clock-outline h-4 w-4"></span>
                    <span>{{ formatTime(event.start) }} - {{ formatTime(event.end) }}</span>
                  </div>
                </div>
                
                <h3 class="mt-4 text-2xl font-semibold text-gray-900 group-hover:text-accent transition-colors duration-200">
                  {{ event.summary }}
                </h3>
                
                <div
                  class="mt-4 prose prose-sm text-gray-600 max-w-none"
                  v-html="(event.description || 'Aucune description disponible') + '<br>📩 Envoie-nous un MP sur <a href=\'https://www.instagram.com/toulbarz_tlb\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'text-accent underline\'>Instagram (@toulbarz_tlb)</a> pour plus d\'infos.'"
                ></div>
                
                <div class="mt-6 flex flex-wrap items-center gap-4">
                  <a 
                    v-if="event.location !== 'Lieu non spécifié'" 
                    :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`" 
                    target="_blank" 
                    class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                  >
                    <span class="i-mdi-map-marker h-4 w-4"></span>
                    {{ event.location }}
                  </a>
                  
                  <!-- <button class="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors duration-200">
                    <span class="i-mdi-calendar-plus h-4 w-4"></span>
                    S'inscrire
                  </button> -->
                </div>
              </article>
            </div>
            
            <div v-else class="flex flex-col items-center justify-center rounded-xl bg-white p-12 text-center shadow-md">
              <div class="rounded-full bg-gray-100 p-4">
                <span class="i-mdi-calendar-blank h-8 w-8 text-gray-400"></span>
              </div>
              <p class="mt-4 text-lg font-medium text-gray-600">Aucun événement à afficher pour le moment.</p>
              <p class="mt-2 text-sm text-gray-500">Veuillez sélectionner une autre date ou catégorie.</p>
            </div>
          </div>
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


const calendarAttributes = computed(() => {
  return getActiveEvents.value.map(event => ({
    key: event.id,
    dates: new Date(event.start),
    dot: {
      color: 'orange',
      // fillMode: 'outline',
    },
    popover: {
      label: event.summary,
    }
  }));
});

// const calendarAttributes = computed(() => {
//   const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

//   return getActiveEvents.value.map(event => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     return {
//       key: event.id,
//       dates: event.start,
//       dot: randomColor,
//       // highlight: randomColor,
//       popover: {
//         label: event.summary,
//       },
//     };
//   });
// });


// Format date for display
const formatDate = (dateString) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// Format time for display
const formatTime = (dateString) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString('fr-FR', options);
};

// Handle day click on calendar
const handleDayClick = (day) => {
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
};


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


</script>