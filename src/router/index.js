import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TopView from '../views/TopView.vue'
import SampleView from '../views/SampleView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import UserInfoEditView from '../views/UserInfoEditView.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: TopView
  },
  {
    path: '/sample',
    name: 'sample',
    component: SampleView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/user',
    name: 'userinfo',
    component: UserInfoView
  },
  {
    path: '/user/edit',
    name: 'userinfoedit',
    component: UserInfoEditView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
