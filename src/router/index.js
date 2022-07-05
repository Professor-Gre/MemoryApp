import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '@/views/HelloView.vue'
import GameView from '@/views/GameView.vue'

const routes = [
  {
    path: '/',
    name: 'hello',
    meta: {
      layout: 'main'
    },
    component: HelloView
  },
  {
    path: '/game',
    name: 'game',
    meta: {
      layout: 'main'
    },
    component: GameView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
