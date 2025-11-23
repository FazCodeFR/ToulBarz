import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'
import { setupCalendar } from 'v-calendar';
import { MotionPlugin } from '@vueuse/motion'

const head = createHead()
const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(MotionPlugin)
app.use(head)
app.use(setupCalendar, {})

app.mount('#app')
