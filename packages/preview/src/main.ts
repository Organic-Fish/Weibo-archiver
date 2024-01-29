import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '../../core/src/main.css'

const app = createApp(App)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/p/1',
  },
  {
    path: '/p/:page(\\d+)',
    component: () => import('./Index.vue'),
  },
  {
    path: '/s',
    component: () => import('./Search.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app
  .use(router)
  .use(createPinia())
  .mount('#app')
