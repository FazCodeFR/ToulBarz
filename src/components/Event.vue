<template>
  <div class="bg-white py-2 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative isolate bg-white px-6 py-12 sm:py-24 lg:px-8">
    <div class="absolute inset-x-0 -top-3 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
      <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl text-center sm:max-w-4xl">
      <h1 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-5xl underline underline-offset-4 decoration-accent text-gray-900">Événements de l'association</h1>
      <h2 class="mt-12 mb-6 text-lg font-medium tracking-tight text-gray-800 sm:text-xl">Découvrez nos prochains événements :</h2>
    </div>

        <!-- Tab -->
        <div>
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Sélectionner un onglet</label>
            <select
              id="tabs"
              name="tabs"
              class="block w-full rounded-md border-gray-300 focus:border-accent focus:ring-accent"
              v-model="activeTab"
            >
              <option v-for="tab in tabs" :key="tab.name" :value="tab.key">{{ tab.name }}</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex" aria-label="Tabs">
                <a
                  v-for="tab in tabs"
                  :key="tab.name"
                  href="#"
                  :class="[tab.key === activeTab ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium']"
                  @click.prevent="activeTab = tab.key"
                  :aria-current="tab.key === activeTab ? 'page' : undefined"
                >
                  {{ tab.name }}
                </a>
              </nav>
            </div>
          </div>
        </div>

      <!-- Skeleton -->
      <template v-if="isLoading">
          <div class="bg-white py-2 sm:py-24 animate-pulse">
            <div class="space-y-16 lg:space-y-20">
              <article class="relative isolate flex flex-col gap-6 lg:flex-row">
                <div class="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] lg:w-96 lg:shrink-0">
                  <div class="h-full w-full rounded-2xl bg-gray-200"></div>
                </div>
                <div>
                  <div class="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div class="mt-5 h-6 bg-gray-200 rounded w-full"></div>
                  <div class="mt-4 h-6 bg-gray-200 rounded w-1/2"></div>
                </div>
              </article>
              <!-- Ajout de plusieurs squelettes si nécessaire -->
              <article class="relative isolate flex flex-col gap-6 lg:flex-row">
                <div class="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] lg:w-96 lg:shrink-0">
                  <div class="h-full w-full rounded-2xl bg-gray-200"></div>
                </div>
                <div>
                  <div class="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div class="mt-5 h-6 bg-gray-200 rounded w-full"></div>
                  <div class="mt-4 h-6 bg-gray-200 rounded w-1/2"></div>
                </div>
              </article>
            </div>
          </div>
        </template>

        <!-- Event List -->
        <div v-else-if="getActiveEvents.length" class="mt-12 space-y-16 lg:space-y-20">
          <article v-for="event in getActiveEvents" :key="event.id" class="relative isolate flex flex-col gap-6 lg:flex-row">
            <div class="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] lg:w-96 lg:shrink-0 group">
              <img
                v-if="event.imageUrl"
                :src="event.imageUrl"
                alt="Image de l'événement"
                loading="lazy"
                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <img
                v-else
                :src="defaultImage"
                alt="Image par défaut"
                loading="lazy"
                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>

            <div>
              <div class="flex items-center gap-x-2 text-lg">
                <time :datetime="event.start" class="text-gray-500">
                  {{ formatDate(event.start) }}
                </time>
              </div>
              <div class="group relative max-w-xl">
                <h3 class="mt-1 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {{ event.summary }}
                </h3>
                <p class="mt-5 mb-2 text-sm leading-6 text-gray-600">
                  {{ event.description || 'Aucune description disponible' }}
                </p>
                <a
                  v-if="event.location"
                  :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`"
                  target="_blank"
                  class="mt-4 text-sm text-gray-700 flex items-center gap-x-2 hover:border-b-2 hover:border-accent hover:text-accent"
                >
                  <span class="text-accent i-mdi-map-marker"></span>
                  {{ event.location }}
                </a>
              </div>
            </div>
          </article>
        </div>
        <p v-else class="mt-8 text-center text-gray-600">Aucun événement à afficher pour le moment.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const isLoading = ref(true); // État de chargement
const activeTab = ref('public');
const eventsPublic = ref([]);
const eventsMembers = ref([]);
const defaultImage = '/img/defaultimg.png';

const tabs = [
  { name: 'Événements publics', key: 'public' },
  { name: 'Événements adhérents', key: 'members' },
];

const formatDate = (date) =>
  new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

// Fonction pour récupérer l'URL de l'image depuis l'API Google Drive (en public)
const fetchGoogleDriveImage = async (fileId) => {
  const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

  try {
    const response = await fetch(driveUrl);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'image depuis Google Drive');
    }
    return response.url;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'image Google Drive :', error);
    return ''; // Retourner une chaîne vide si l'image ne peut pas être récupérée
  }
};

const fetchGoogleCalendarEvents = async (calendarId, eventsRef) => {
  try {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${import.meta.env.VITE_GOOGLE_API_KEY}&singleEvents=true&orderBy=startTime&maxResults=30`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erreur lors de la récupération des événements');
    const data = await response.json();
    const now = new Date();
    const fetchedEvents = await Promise.all(
      data.items.map(async (event) => {
        const fileId = event.attachments?.[0]?.fileId || '';
        const type = event.attachments?.[0]?.mimeType || '';
        let imageUrl = '';
        if (fileId && type.includes('image')) {
          imageUrl = await fetchGoogleDriveImage(fileId);
        }

        return {
          id: event.id,
          summary: event?.summary || 'Sans titre',
          description: event?.description || '',
          location: event?.location || 'Lieu non spécifié',
          start: new Date(event.start?.dateTime || event.start?.date),
          end: new Date(event.end?.dateTime || event.end?.date),
          imageUrl, // URL de l'image
        };
      })
    );

    eventsRef.value = fetchedEvents.filter((event) => event.end > now); // Filtrer les événements passés
  } catch (error) {
    console.error('Erreur lors de la récupération des événements :', error);
  }
};

onMounted(async () => {
  await Promise.all([
    fetchGoogleCalendarEvents(import.meta.env.VITE_CALENDAR_PUBLIC_ID, eventsPublic),
    fetchGoogleCalendarEvents(import.meta.env.VITE_CALENDAR_MEMBERS_ID, eventsMembers),
  ]);
  isLoading.value = false; // Arrêter le chargement
});

const getActiveEvents = computed(() =>
  activeTab.value === 'public' ? eventsPublic.value : eventsMembers.value
);
</script>
