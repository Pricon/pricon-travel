import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HotelListPage from "../pages/HotelListPage";
import HotelDetailsPage from "../pages/HotelDetailsPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/jiudian',
    name: 'jiudian',
    component: HomePage,
  },
  {
    path: '/hotels/list',
    name: 'hotels',
    component: HotelListPage
  },
  {
    path: '/hotels/details',
    name: 'details',
    component: HotelDetailsPage
  },
]

const router = new VueRouter({
  routes
})

export default router
