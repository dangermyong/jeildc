import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import SignInPage from '@/pages/SignInPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

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
    path: '/signin',
    name: 'signIn',
    component: SignInPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
