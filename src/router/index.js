import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationHome from '../views/DestinationHome.vue'
import CrewHome from '../views/CrewHome.vue'
import TechnologyHome from '../views/TechnologyHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: DestinationHome,
    },
    {
      path: '/crew/:id',
      name: 'crew',
      component: CrewHome
    },
    {
      path: '/technology/:id',
      name: 'technology',
      component: TechnologyHome
    },
  ]
})

export default router
