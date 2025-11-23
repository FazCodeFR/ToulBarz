<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Actu {
  id: number
  title: string
  subtitle: string
  date: string
  pdfUrl: string
  slug: string
}

const route = useRoute()
const router = useRouter()

const actus: Actu[] = [
  {
    id: 1,
    title: 'LE STREET WORKOUT S\'INVITE À MISTER FRANCE',
    subtitle: 'Mister France',
    date: '03-10-2025',
    pdfUrl: '/pdfs/03-10-2025-Mister-France.pdf',
    slug: 'mister-france',
  },
  {
    id: 2,
    title: 'STAR DE LA TUBECON 2025',
    subtitle: 'Tubecon 2025',
    date: '04-10-2025',
    pdfUrl: '/pdfs/04-10-2025-Tubecon.pdf',
    slug: 'tubecon-2025',
  },
  {
    id: 3,
    title: 'LE PREMIER RENDEZ-VOUS DES ATHLÈTES',
    subtitle: 'Cohésion Athlètes',
    date: '05-10-2025',
    pdfUrl: '/pdfs/05-10-2025-Cohésion-Athlètes.pdf',
    slug: 'cohesion-athletes',
  },
]

const selectedActuId = ref<number>(actus[0]?.id || 1)

const selectedActu = computed(() => {
  return actus.find((actu) => actu.id === selectedActuId.value) || actus[0]
})

// Generate Google Docs Viewer URL for cross-platform PDF viewing
const pdfViewerUrl = computed(() => {
  if (!selectedActu.value) return ''
  const baseUrl = window.location.origin
  const pdfUrl = baseUrl + selectedActu.value.pdfUrl
  const url  =  `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`
  console.log('🚀 ~ url:', url);
  
  return url
})

const selectActu = (id: number) => {
  const actu = actus.find((a) => a.id === id)
  if (actu) {
    selectedActuId.value = id
    router.push({ query: { actu: actu.slug } })
  }
}

const formatDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-')
  const months = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ]
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`
}

const downloadPdf = () => {
  if (selectedActu.value) {
    const link = document.createElement('a')
    link.href = selectedActu.value.pdfUrl
    link.download = `${selectedActu.value.title}.pdf`
    link.click()
  }
}

const openPdfInNewTab = () => {
  if (selectedActu.value) {
    window.open(selectedActu.value.pdfUrl, '_blank')
  }
}

// Initialize from URL query param
onMounted(() => {
  const actuParam = route.query.actu as string
  if (actuParam) {
    const actu = actus.find((a) => a.slug === actuParam)
    if (actu) {
      selectedActuId.value = actu.id
    }
  }
})

// Watch for route query changes
watch(
  () => route.query.actu,
  (newActu) => {
    if (newActu) {
      const actu = actus.find((a) => a.slug === newActu)
      if (actu) {
        selectedActuId.value = actu.id
      }
    }
  }
)
</script>

<template>
  <div class="min-h-screen bg-gray-50 pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
          Nos <span class="text-accent">Actualités</span>
        </h1>
        <p class="text-gray-500 text-lg max-w-2xl mx-auto">
          Retrouvez toutes nos dernières actualités et articles de presse
        </p>
      </div>

      <!-- Main content -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Liste des actus (sidebar) -->
        <div class="lg:w-1/3 xl:w-1/4">
          <div class="bg-white rounded-2xl p-5 sticky top-28 shadow-sm border border-gray-100">
            <h2 class="text-primary font-semibold text-lg mb-4 px-2">
              Articles
            </h2>
            <div class="space-y-3">
              <button
                v-for="actu in actus"
                :key="actu.id"
                @click="selectActu(actu.id)"
                :class="[
                  'w-full text-left p-4 rounded-xl transition-all duration-300',
                  selectedActuId === actu.id
                    ? 'bg-accent text-white shadow-md shadow-accent/30'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                ]"
              >
                <div class="font-semibold text-sm leading-tight mb-2 line-clamp-2">
                  {{ actu.title }}
                </div>
                <div class="flex items-center justify-between">
                  <span
                    :class="[
                      'text-xs font-medium',
                      selectedActuId === actu.id ? 'text-white/80' : 'text-gray-500'
                    ]"
                  >
                    {{ actu.subtitle }}
                  </span>
                  <span
                    :class="[
                      'text-xs',
                      selectedActuId === actu.id ? 'text-white/80' : 'text-gray-400'
                    ]"
                  >
                    {{ actu.date }}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- PDF Viewer -->
        <div class="lg:w-2/3 xl:w-3/4">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <!-- PDF Header -->
            <div class="bg-primary p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 class="text-white font-bold text-lg">
                  {{ selectedActu?.title }}
                </h3>
                <p class="text-gray-300 text-sm mt-1">
                  {{ selectedActu?.subtitle }} • {{ formatDate(selectedActu?.date || '') }}
                </p>
              </div>
              <div class="flex gap-3">
                <button
                  @click="openPdfInNewTab"
                  class="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium backdrop-blur-sm"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ouvrir
                </button>
                <button
                  @click="downloadPdf"
                  class="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium shadow-md shadow-accent/30"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Télécharger
                </button>
              </div>
            </div>

            <!-- PDF Embed - Works on both mobile and desktop via Google Docs Viewer -->
            <div class="relative w-full bg-gray-100" style="height: 70vh; min-height: 500px;">
              <iframe
                :src="pdfViewerUrl"
                :key="selectedActu?.id"
                class="w-full h-full border-0"
                :title="selectedActu?.title"
                allowfullscreen
              />
            </div>
          </div>

          <!-- Navigation rapide mobile -->
          <div class="lg:hidden mt-6">
            <div class="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <button
                @click="selectedActuId > 1 && selectActu(selectedActuId - 1)"
                :disabled="selectedActuId === 1"
                :class="[
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium',
                  selectedActuId === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-accent hover:text-white'
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Précédent
              </button>
              <span class="text-gray-500 text-sm font-medium">
                {{ selectedActuId }} / {{ actus.length }}
              </span>
              <button
                @click="selectedActuId < actus.length && selectActu(selectedActuId + 1)"
                :disabled="selectedActuId === actus.length"
                :class="[
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium',
                  selectedActuId === actus.length
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-accent hover:text-white'
                ]"
              >
                Suivant
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
