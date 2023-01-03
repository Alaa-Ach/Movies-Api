import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ShowMovies',
    component: () => import('../views/ShowMovies.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import('../views/Info.vue')

  },

  {
    path: '/ShowByGenre',
    name: 'ShowByGenre',
    component: () => import('../views/ShowByGenre.vue')

  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
