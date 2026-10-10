<template>
  <div class="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-orange-600/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative isolate px-6 py-12 sm:py-16 lg:px-8">
        <div class="mx-auto max-w-7xl text-center sm:max-w-4xl">
          <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Calendrier
          </span>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Nos <span class="text-accent">événements</span>
          </h1>
          <p class="mt-6 mb-12 text-lg font-medium text-gray-600 sm:text-xl">
            Découvrez nos prochains événements et rejoignez-nous
          </p>
        </div>

        <!-- Tab -->
        <div class="sticky top-20 z-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-2 mb-8">
          <div class="sm:hidden w-full">
            <label for="tabs" class="w-full sr-only">Sélectionner un onglet</label>
            <select id="tabs" v-model="activeTab" name="tabs" class="block w-full rounded-xl border-gray-200 focus:border-accent focus:ring-accent bg-white py-3 px-4">
              <option v-for="tab in tabs" :key="tab.name" :value="tab.key">{{ tab.name }}</option>
            </select>
          </div>

          <div class="hidden sm:block">
            <nav class="flex gap-2" aria-label="Tabs">
              <button
                v-for="tab in tabs"
                :key="tab.name"
                :class="[
                  'flex-1 py-3 px-4 text-center text-sm font-semibold rounded-xl transition-all duration-300',
                  tab.key === activeTab
                    ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-md shadow-accent/30'
                    : 'text-gray-600 hover:text-accent hover:bg-accent/5'
                ]"
                :aria-current="tab.key === activeTab ? 'page' : undefined"
                @click="activeTab = tab.key"
              >
                {{ tab.name }}
              </button>
            </nav>
          </div>
        </div>

        <div class="mt-8 flex flex-col gap-8 lg:flex-row">
          <!-- Calendar Section -->
          <div class="lg:sticky lg:top-40 lg:w-1/3">
            <div class="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div class="bg-gradient-to-r from-accent to-accent-dark p-4">
                <h3 class="font-semibold text-white text-center flex items-center justify-center gap-2">
                  <i class="i-mdi-calendar-month"></i>
                  Calendrier {{ activeTab === 'public' ? 'public' : 'adhérents' }}
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
            <div v-if="getActiveEvents.length" class="space-y-6">
              <article
                v-for="event in getActiveEvents"
                :id="`event-${event.id}`"
                :key="event.id"
                class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent to-accent-dark transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <time :datetime="event.start.toISOString()" class="flex items-center gap-2 text-sm font-medium text-accent">
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
                
                <div class="mt-4 prose prose-sm text-gray-600 max-w-none">
                  <!-- Texte brut : jamais de v-html sur un contenu venu d'ailleurs -->
                  <p v-if="event.description || event.kind === 'event'" class="whitespace-pre-line">
                    {{ event.description || 'Aucune description disponible' }}
                  </p>
                  <!-- Une séance a son bouton de réservation : pas besoin du MP -->
                  <p v-if="event.kind === 'event'">
                    📩 Envoie-nous un MP sur
                    <a
                      href="https://www.instagram.com/toulbarz_tlb"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-accent underline"
                    >Instagram (@toulbarz_tlb)</a>
                    pour plus d'infos.
                  </p>
                </div>
                
                <div class="mt-6 flex flex-wrap items-center gap-4">
                  <a 
                    v-if="event.location !== 'Lieu non spécifié'" 
                    :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.fullAddress || event.location)}`" 
                    target="_blank" 
                    class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                  >
                    <span class="i-mdi-map-marker h-4 w-4"></span>
                    {{ event.location }}
                  </a>
                  <a
                  :href="`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${formatGoogleCalendarDate(event.start)}/${formatGoogleCalendarDate(event.end)}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.fullAddress || '')}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  <span class="i-mdi-calendar-plus h-4 w-4"></span>
                  Ajouter à Google Calendar
                </a>
                <a
                  v-for="link in linksOf(event)"
                  :key="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {{ link.label }}
                  <i class="i-mdi-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
                </div>
              </article>
            </div>
            
            <div v-else-if="isLoading" class="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-lg ring-1 ring-gray-100">
              <span class="i-mdi-loading h-10 w-10 animate-spin text-accent"></span>
              <p class="mt-6 text-sm text-gray-500">Chargement des événements…</p>
            </div>
            <div v-else-if="hasActiveError" class="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-lg ring-1 ring-gray-100">
              <div class="rounded-2xl bg-gradient-to-br from-accent/10 to-orange-100 p-5">
                <span class="i-mdi-alert-circle-outline h-10 w-10 text-accent"></span>
              </div>
              <p class="mt-6 text-lg font-semibold text-gray-900">Impossible de charger les événements</p>
              <p class="mt-2 text-sm text-gray-500 max-w-xs">Réessayez plus tard ou consultez notre Instagram en attendant</p>
            </div>
            <div v-else class="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-lg ring-1 ring-gray-100">
              <div class="rounded-2xl bg-gradient-to-br from-accent/10 to-orange-100 p-5">
                <span class="i-mdi-calendar-blank h-10 w-10 text-accent"></span>
              </div>
              <p class="mt-6 text-lg font-semibold text-gray-900">Aucun événement à afficher</p>
              <p class="mt-2 text-sm text-gray-500 max-w-xs">Revenez bientôt pour découvrir nos prochains événements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
import { useAgenda, type AgendaEvent, type AgendaLinks } from '@/composables/useAgenda';

const { isLoading, hasError, eventsPublic, eventsMembers } = useAgenda();
const activeTab = ref('public');

const tabs = [
  { name: 'Événements publics', key: 'public' },
  { name: 'Événements adhérents', key: 'members' },
];


const calendarAttributes = computed(() => {
  return getActiveEvents.value.map(event => ({
    key: event.id,
    dates: [new Date(event.start)],
    dot: {
      color: 'orange',
      // fillMode: 'outline',
    },
    popover: {
      label: event.summary,
    }
  }));
});

const formatGoogleCalendarDate = (date: Date | string) => {
  return new Date(date).toISOString().replace(/[-:]|\.\d{3}/g, '');
};


// Format date for display
const formatDate = (dateString: Date | string) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// Format time for display
const formatTime = (dateString: Date | string) => {
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString('fr-FR', options);
};

// Handle day click on calendar
const handleDayClick = (day: { date: Date }) => {
 // Parcourir les attributs du calendrier pour trouver les événements associés à la date cliquée
 const eventOnDay = calendarAttributes.value.find(attr => {
    // Vérifier si la date de l'événement correspond à la date cliquée
    return attr.dates[0].toDateString() === day.date.toDateString();
  });
  if (eventOnDay) {
    const eventElement = document.getElementById(`event-${eventOnDay.key}`);
    if (eventElement) {
      const scrollTop = eventElement.offsetTop + 20;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  }
};


// Liens utiles d'un événement ou d'une séance, selon l'onglet : essai côté public, réservation côté adhérents
const linksOf = (event: AgendaEvent): { label: string; href: string }[] => {
  const links: AgendaLinks = event.links;
  const isPublicTab = activeTab.value === 'public';
  const booking = isPublicTab ? links.trial ?? links.page : links.member ?? links.page;
  const bookingLabel = isPublicTab && links.trial ? "Séance d'essai" : 'Réserver ma place';
  return [
    booking ? { label: bookingLabel, href: booking } : null,
    links.registration ? { label: "S'inscrire", href: links.registration } : null,
    links.ticketing ? { label: 'Billetterie', href: links.ticketing } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);
};

const hasActiveError = computed(() => hasError.value);

const getActiveEvents = computed(() =>
  activeTab.value === 'public' ? eventsPublic.value : eventsMembers.value
);


</script>