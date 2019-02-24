import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Index from './views/Index.vue'
import Test from './views/Test.vue'
import User from './views/settings/User.vue'
import System from './views/settings/System.vue'
import SignIn from './views/SignIn.vue'
import BackIndex from './views/BackIndex.vue'

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
    path: '/backIndex',
    name: 'backIndex',
    component: BackIndex
  }, {
  //   path: '/settings',
  //   component: User,
  //   redirect: '/settings/user',
  //   children: [{
  //     path: 'user',
  //     name: 'user',
  //     component: User
  //   }, {
  //     path: 'system',
  //     name: 'system',
  //     component: System
  //   }]
  // }, {
    path: '/settings',
    alias: '/settings/user',
    component: User
  }, {
    path: '/settings/system',
    component: System
  }, {
    path: '/test',
    name: 'test',
    component: Test
  }, {
    path: '*',
    component: SignIn

  }]
})
