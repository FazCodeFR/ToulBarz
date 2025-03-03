import { createRouter, createWebHistory } from 'vue-router'

import DemoPage from '@/pages/DemoPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import AdhesionPage from '@/pages/AdhesionPage.vue'
import EventPage from '@/pages/EventPage.vue'
import FiguresPage from '@/pages/FiguresPage.vue'

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
    path: '/boutique',
    component: AdhesionPage,
    name: 'La boutique',
    meta: {
      title: 'La boutique - Toul\'Barz',
    },
  },
  {
    path: '/event',
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
    path: '/demo/',
    component: DemoPage,
    meta: {
      title: 'Demo title',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
