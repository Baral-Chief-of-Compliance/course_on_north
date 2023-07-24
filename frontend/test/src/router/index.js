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
    component: DefaultTest,
    children: [
      {
        path: '/',
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
