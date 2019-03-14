import Vue from 'vue'
import Router from 'vue-router'
import Test from './views/Test.vue'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import User from './views/settings/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
        path: 'user',
        name: 'user',
        component: User
      }]
    }
  ]
})
