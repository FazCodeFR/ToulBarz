import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { routes, scrollBehavior } from './router'
import { MotionPlugin } from '@vueuse/motion'

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router }) => {
    const pinia = createPinia()
    pinia.use(({ store }) => {
      store.router = markRaw(router)
    })
    app.use(pinia)
    app.use(MotionPlugin)
  },
)
