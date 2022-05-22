import Vue from 'vue'
import VueRouter from 'vue-router'
import LeafCreate from '../views/leaves/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'LeafCreate' }
  },
  {
    path: '/leaves/create',
    name: 'LeafCreate',
    component: LeafCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
