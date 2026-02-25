import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import BrandsView from '../views/BrandsView.vue'
import Loginpage from '@/components/Loginpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/product', name: 'product', component: ProductView },
    { path: '/brands', name: 'brands', component: BrandsView },
    { path: '/login', name: 'login', component: Loginpage },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router