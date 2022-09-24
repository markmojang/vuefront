import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/profile',
    name: 'Profile',
    component: () => import('../views/profile.vue')
  },
  {
    path: '/addproduct',
    name: 'addproduct',

    component: () => import('../views/addproduct.vue')
  },
  {
    path: '/orders',
    name: 'orders',

    component: () => import('../views/orders.vue')
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
