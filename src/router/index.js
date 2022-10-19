import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AuthPage from '@/pages/AuthPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
