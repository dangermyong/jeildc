import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import SignInPage from '@/pages/SignInPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
    meta: {
      requiresAuth: true,
    }
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('you dont have access!')
      next('/signIn')
    }
  } else {
    next()
  }
})

export default router
