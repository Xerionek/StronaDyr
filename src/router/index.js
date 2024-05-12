import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/droga-krzyzowa-srodowisk-tworczych',
    name: 'droga-krzyzowa-srodowisk-tworczych',
    component: () => import('../views/DrogaKrzyzowaView.vue')
  },
  {
    path: '/zaduszki-jazzowe-srodowisk-tworczych',
    name: 'zaduszki-jazzowe-srodowisk-tworczych',
    component: () => import('../views/ZaduszkiJazzoweView.vue')
  },
  {
    path: '/warsztaty-muzyki-liturgicznej',
    name: 'warsztaty-muzyki-liturgicznej',
    component: () => import('../views/WarsztatyMuzykiLiturgicznejView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
