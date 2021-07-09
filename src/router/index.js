import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: homePage
  },
  {
    path: '/login',
    name: 'login-page',
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem('user'))) next('/');
      else next();
    },
    component: () => import('../views/login-page.vue')
  },
  {
    path: '/registration',
    name: 'registration-page',
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem('user'))) next('/');
      else next();
    },
    component: () => import('../views/registration-page.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
