import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Pets from '@/views/Pets.vue'


const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash ) {
    return { el: to.hash};
  }
  if (savedPosition) {
    return savedPosition;
  }
  return { left: 0, top: 0 };
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pets',
    name: 'Pets',
    component: Pets
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Notfound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
