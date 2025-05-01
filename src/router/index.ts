import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import AdhesionPage from '@/pages/AdhesionPage.vue'
import EventPage from '@/pages/EventPage.vue'
import FiguresPage from '@/pages/FiguresPage.vue'
import MentionsLegalesPage from '@/pages/MentionsLegalesPage.vue'

const routes = [
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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
