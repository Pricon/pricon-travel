import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HotelListPage from "../pages/HotelListPage";
import HotelDetailsPage from "../pages/HotelDetailsPage.vue";
import UserCenterPage from "../pages/UserCenterPage.vue";
import UserInfo from "../components/userCenterPage/UserInfo.vue";
import OrderInfo from "../components/userCenterPage/OrderInfo.vue";

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
    component: HotelListPage,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/hotels/details',
    name: 'details',
    component: HotelDetailsPage,
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    component: UserCenterPage,
    children: [
      {
        path: 'userinfo',
        name: 'userinfo',
        component: UserInfo,
      },
      {
        path: 'orderinfo',
        name: 'orderinfo',
        component: OrderInfo,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
