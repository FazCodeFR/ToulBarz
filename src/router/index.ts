import { createRouter, createWebHistory } from 'vue-router'

import DemoPage from '@/pages/DemoPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import AdhesionPage from '@/pages/AdhesionPage.vue'


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
    path: '/adhesion/',
    component: AdhesionPage,
    name: 'Adhésion',
    meta: {
      title: 'Adhésion - Toul\'Barz',
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
