// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultTest from '@/layouts/test/DefaultTest.vue'
import Test_1 from '@/views/Test_1.vue'
import AnketaSoiskatelya from '@/components/test_1/AnketaSoiskatelya.vue'
import AnketaEmployer from '@/components/test_1/AnketaEmployer.vue'
import Map from '@/components/test_1/Map.vue'
import News from '@/components/test_1/News.vue'
import DefaultAdmin from '@/layouts/admin/DefaultAdmin.vue'
import AdminHome from '@/views/AdminHome.vue'
import ThanksAnketa from '@/components/test_1/ThanksAnketa.vue'


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
    component: DefaultTest,
    children: [
      {
        path: '',
        name: 'TestHome_1',
        component: Test_1
      },
      {
        path: '/anketa-soiskatelya',
        name: 'AnketaSoiskatelya',
        component: AnketaSoiskatelya
      },
      {
        path: '/anketa-employer',
        name: 'AnketaEmployer',
        component: AnketaEmployer
      },
      {
        path: '/map-czn',
        name: 'map-czn',
        component: Map
      },

      {
        path: '/news',
        name: 'News',
        component: News
      },

      {
        path: '/thanks-for-anketa',
        name: 'ThanksAnketa',
        component: ThanksAnketa
      }
    ]
  },

  {
    path: '/test-2',
    component: () => import ('@/layouts/test-2/DefaultTest2.vue'),
    children: [
      {
        path: '/test-2/index',
        name: 'TestHome_2',
        component: () => import('@/views/Test_1.vue')
      },
    ]
  },

  {
    path: '/admin',
    component: DefaultAdmin,
    children: [
      {
        path: '/admin/',
        name: 'AdminIndex',
        component: AdminHome
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
