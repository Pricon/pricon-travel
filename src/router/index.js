import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HotelListPage from "../pages/HotelListPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/hotels',
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
    component: HomePage
  },
  {
    path: '/',
    name: 'hotels',
    component: HotelListPage
  }
]

const router = new VueRouter({
  routes
})

export default router
