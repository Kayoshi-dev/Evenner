import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/home'
  },
  {
    path: '/folder/home',
    component: () => import ('@/views/Home.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/UserProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
