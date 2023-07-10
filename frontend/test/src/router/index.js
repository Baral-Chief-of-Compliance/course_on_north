// Composables
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      }
    ]
  },

  {
    path: '/test-1',
    component: () => import('@/layouts/test/DefaultTest.vue'),
    children: [
      {
        path: '',
        name: 'TestHome_1',
        component: () => import('@/views/Test_1.vue')
      },
      {
        path: '/anketa-soiskatelya',
        name: 'AnketaSoiskatelya',
        component: () => import('@/components/test_1/AnketaSoiskatelya.vue')
      },
      {
        path: '/anketa-employer',
        name: 'AnketaEmployer',
        component: () => import('@/components/test_1/AnketaEmployer.vue')
      },
      {
        path: '/map-czn',
        name: 'map-czn',
        component: () => import('@/components/test_1/Map.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
