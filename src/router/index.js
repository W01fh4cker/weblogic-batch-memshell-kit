import { createRouter, createWebHistory } from 'vue-router'
import AboutAndHelp from '../views/AboutAndHelp.vue'

const routes = [
  {
    path: '/',
    redirect: '/about-and-help'
  },
  {
    path: '/about-and-help',
    component: AboutAndHelp
  },
  {
    path: '/weblogic-memshell-batch-inject',
    name: 'WeblogicMemshellBatchInject',
    component: () => import('../components/WeblogicMemshellBatchInject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
