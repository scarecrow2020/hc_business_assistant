import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Index from './views/Index.vue'
import User from './views/settings/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/settings',
    component: Index,
    redirect: '/settings/user',
    children: [{
      path: 'user',
      name: 'user',
      component: User
    }]
  }, {
    path: '*',
    component: Login

  }]
})
