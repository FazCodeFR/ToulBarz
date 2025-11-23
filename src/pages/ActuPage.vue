<script setup lang="ts">
import { ref, computed } from 'vue'

interface Actu {
  id: number
  title: string
  subtitle: string
  date: string
  pdfUrl: string
}

const actus: Actu[] = [
  {
    id: 1,
    title: 'LE STREET WORKOUT S\'INVITE À MISTER FRANCE',
    subtitle: 'Mister France',
    date: '03-10-2025',
    pdfUrl: '/pdfs/actu-1-mister-france.pdf',
  },
  {
    id: 2,
    title: 'STAR DE LA TUBECON 2025',
    subtitle: 'Tubecon 2025',
    date: '04-10-2025',
    pdfUrl: '/pdfs/actu-2-tubecon.pdf',
  },
  {
    id: 3,
    title: 'LE PREMIER RENDEZ-VOUS DES ATHLÈTES',
    subtitle: 'Cohésion Athlètes',
    date: '05-10-2025',
    pdfUrl: '/pdfs/actu-3-cohesion-athletes.pdf',
  },
]

const selectedActuId = ref<number>(actus[0]?.id || 1)

const selectedActu = computed(() => {
  return actus.find((actu) => actu.id === selectedActuId.value) || actus[0]
})

const selectActu = (id: number) => {
  selectedActuId.value = id
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
</script>

<template>
  <div class="min-h-screen bg-primary pt-8 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Nos <span class="text-accent">Actualités</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Retrouvez toutes nos dernières actualités et articles de presse
        </p>
      </div>

      <!-- Main content -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Liste des actus (sidebar) -->
        <div class="lg:w-1/3 xl:w-1/4">
          <div class="bg-gray-900 rounded-xl p-4 sticky top-28">
            <h2 class="text-secondary font-semibold text-lg mb-4 px-2">
              Articles
            </h2>
            <div class="space-y-2">
              <button
                v-for="actu in actus"
                :key="actu.id"
                @click="selectActu(actu.id)"
                :class="[
                  'w-full text-left p-4 rounded-lg transition-all duration-200',
                  selectedActuId === actu.id
                    ? 'bg-accent text-secondary'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-secondary'
                ]"
              >
                <div class="font-semibold text-sm leading-tight mb-1 line-clamp-2">
                  {{ actu.title }}
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span
                    :class="[
                      'text-xs',
                      selectedActuId === actu.id ? 'text-secondary/80' : 'text-gray-500'
                    ]"
                  >
                    {{ actu.subtitle }}
                  </span>
                  <span
                    :class="[
                      'text-xs',
                      selectedActuId === actu.id ? 'text-secondary/80' : 'text-gray-500'
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
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <!-- PDF Header -->
            <div class="bg-gray-800 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 class="text-secondary font-bold text-lg">
                  {{ selectedActu?.title }}
                </h3>
                <p class="text-gray-400 text-sm mt-1">
                  {{ selectedActu?.subtitle }} - {{ formatDate(selectedActu?.date || '') }}
                </p>
              </div>
              <button
                @click="downloadPdf"
                class="flex items-center gap-2 bg-accent hover:bg-accent-dark text-secondary px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger
              </button>
            </div>

            <!-- PDF Embed -->
            <div class="relative w-full" style="height: 70vh; min-height: 500px;">
              <iframe
                :src="selectedActu?.pdfUrl"
                :key="selectedActu?.id"
                class="w-full h-full border-0"
                :title="selectedActu?.title"
              />
              <!-- Fallback message -->
              <div class="absolute inset-0 flex items-center justify-center bg-gray-800 pointer-events-none opacity-0 peer-[&:not([src])]:opacity-100">
                <div class="text-center p-8">
                  <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p class="text-gray-400">Chargement du PDF...</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation rapide mobile -->
          <div class="lg:hidden mt-6">
            <div class="flex items-center justify-between bg-gray-900 rounded-xl p-4">
              <button
                @click="selectedActuId > 1 && selectActu(selectedActuId - 1)"
                :disabled="selectedActuId === 1"
                :class="[
                  'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200',
                  selectedActuId === 1
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 text-secondary hover:bg-accent'
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Précédent
              </button>
              <span class="text-gray-400 text-sm">
                {{ selectedActuId }} / {{ actus.length }}
              </span>
              <button
                @click="selectedActuId < actus.length && selectActu(selectedActuId + 1)"
                :disabled="selectedActuId === actus.length"
                :class="[
                  'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200',
                  selectedActuId === actus.length
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 text-secondary hover:bg-accent'
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
