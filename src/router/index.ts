import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from "@/views/login/Login.vue";
import MainPage from "@/views/main/MainPage.vue";
import dashboard from "@/views/main/dashboard/Dashboard.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'Main',
    component: MainPage,
    children: [
      {
        path: 'dashboard',
        component: dashboard,
        name: 'dashboard',
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
