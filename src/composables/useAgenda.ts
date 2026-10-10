import { onMounted, ref } from 'vue'

// Flux d'agenda de la plateforme Toul'Barz (ADR 0064 côté plateforme) : événements et séances
// déjà publiés, texte brut, liens https. Remplace la lecture directe des agendas Google.
export const AGENDA_URL = import.meta.env.VITE_AGENDA_URL || 'https://api.toulbarz.fr/api/public/agenda/v1'
const STORAGE_KEY = 'toulbarz.agenda.v1'

export interface AgendaLinks {
  page?: string
  trial?: string
  member?: string
  registration?: string
  ticketing?: string
}

export interface AgendaEvent {
  id: string
  kind: 'event' | 'session'
  summary: string
  description: string
  location: string
  // Lieu + adresse complète, pour la carte et l'agenda (jamais affiché tel quel)
  fullAddress: string
  start: Date
  end: Date
  isPublic: boolean
  isMembers: boolean
  links: AgendaLinks
}

const text = (value: unknown): string => (typeof value === 'string' ? value : '')

// Un lien n'est gardé que s'il est en https (jamais javascript: ni autre chose)
const httpsLink = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined
  try {
    return new URL(value).protocol === 'https:' ? value : undefined
  } catch {
    return undefined
  }
}

// Lit la réponse du flux ; un élément mal formé est ignoré, une réponse inconnue rend null
export function parseAgenda(data: unknown): AgendaEvent[] | null {
  const body = data as { version?: unknown; items?: unknown }
  if (!body || body.version !== 1 || !Array.isArray(body.items)) return null
  const events: AgendaEvent[] = []
  for (const raw of body.items as Record<string, unknown>[]) {
    const start = new Date(text(raw?.startsAt))
    const end = new Date(text(raw?.endsAt))
    const agendas = (raw?.agendas ?? {}) as { public?: unknown; members?: unknown }
    if (!text(raw?.id) || Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) continue
    const rawLinks = (raw?.links ?? {}) as Record<string, unknown>
    const links: AgendaLinks = {
      page: httpsLink(rawLinks.page),
      trial: httpsLink(rawLinks.trial),
      member: httpsLink(rawLinks.member),
      registration: httpsLink(rawLinks.registration),
      ticketing: httpsLink(rawLinks.ticketing),
    }
    events.push({
      id: text(raw.id),
      kind: raw.kind === 'session' ? 'session' : 'event',
      summary: text(raw.title) || 'Sans titre',
      description: text(raw.description),
      location: text(raw.place) || text(raw.address) || 'Lieu non spécifié',
      fullAddress: [text(raw.place), text(raw.address)].filter(Boolean).join(', '),
      start,
      end,
      isPublic: agendas.public === true,
      isMembers: agendas.members === true,
      links,
    })
  }
  return events
}

function readSaved(): unknown {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

function save(data: unknown) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // stockage indisponible (navigation privée) : on s'en passe
  }
}

// Charge le flux au montage (vite-ssg : jamais pendant le rendu serveur). Si le flux ne répond
// pas, la dernière réponse reçue sur cet appareil est affichée ; l'erreur ne s'affiche que sans elle.
export function useAgenda() {
  const isLoading = ref(true)
  const hasError = ref(false)
  const eventsPublic = ref<AgendaEvent[]>([])
  const eventsMembers = ref<AgendaEvent[]>([])

  const show = (events: AgendaEvent[]) => {
    const now = new Date()
    const upcoming = events.filter((event) => event.end > now)
    eventsPublic.value = upcoming.filter((event) => event.isPublic)
    eventsMembers.value = upcoming.filter((event) => event.isMembers)
  }

  onMounted(async () => {
    try {
      const response = await fetch(AGENDA_URL)
      if (!response.ok) throw new Error(`Flux d'agenda : ${response.status}`)
      const data = await response.json()
      const events = parseAgenda(data)
      if (!events) throw new Error("Flux d'agenda : format inconnu")
      save(data)
      show(events)
    } catch (error) {
      console.error('Erreur événements :', error)
      const saved = parseAgenda(readSaved())
      if (saved) show(saved)
      else hasError.value = true
    } finally {
      isLoading.value = false
    }
  })

  return { isLoading, hasError, eventsPublic, eventsMembers }
}
