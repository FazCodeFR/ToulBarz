import type { RouteRecordRaw } from 'vue-router'

// Page d'accueil chargée immédiatement (critique)
import IndexPage from '@/pages/IndexPage.vue'

// Lazy loading des autres pages
const AdhesionPage = () => import('@/pages/AdhesionPage.vue')
const EventPage = () => import('@/pages/EventPage.vue')
const FiguresPage = () => import('@/pages/FiguresPage.vue')
const MentionsLegalesPage = () => import('@/pages/MentionsLegalesPage.vue')
const ActuPage = () => import('@/pages/ActuPage.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: IndexPage,
    name: 'Accueil',
    meta: {
      title: "Toul'Barz - Street Workout Toulouse",
    },
  },
  {
    path: '/adhesions',
    component: AdhesionPage,
    name: 'Adhésions',
    meta: {
      title: 'Adhésions - Toul\'Barz',
    },
  },
  {
    path: '/actualites',
    component: ActuPage,
    name: 'Nos actus',
    meta: {
      title: 'Nos Actualités - Toul\'Barz',
    },
  },
  {
    path: '/evenements',
    component: EventPage,
    meta: {
      title: 'Événements - Toul\'Barz',
    },
  },
  {
    path: '/street-workout',
    component: FiguresPage,
    meta: {
      title: 'Le Street Workout - Toul\'Barz',
    },
  },
  {
    path: '/mentions-legales',
    component: MentionsLegalesPage,
    meta: {
      title: 'Mentions Légales - Toul\'Barz',
    },
  },
]

export const scrollBehavior = (
  to: unknown,
  from: unknown,
  savedPosition: { left: number; top: number } | null,
) => {
  if (savedPosition) {
    return savedPosition
  }
  return { top: 0 }
}
