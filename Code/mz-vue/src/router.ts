import Vue from 'vue'
import Router, { Route } from 'vue-router'
import Test from './views/Test.vue'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import User from './views/settings/User.vue'
import SettingTest from './views/settings/Test.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        viewTwo: SettingTest
      },
      props: { defaule: true, viewTwo: true }
    },
    {
      path: '/test*',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/test1/:id/type/:name',
      name: 'test1',
      component: () => import('./views/Test1.vue')
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
      component: Index,
      children: [{
        path: '',
        component: User
      }, {
        path: 'user',
        name: 'user',
        component: User
      }, {
        path: 'test/:id/type/:name',
        name: 'Index.test',
        component: () => import('./views/settings/Test.vue'),
        // props: true
        // props: {'routerParam': {param1: 1, param2: 'param2'}}
        props: route => {
          return {
            'routerParam': { param1: 2, param2: 'param2', ...route.params }
          }
          // console.log(route)
        }
      }]
    },
    {
      path: '*',
      redirect: '/'
      // redirect: (to: Route): any => {
      //   console.log('router.ts:', to)
      //   return '/'
      // }
      // redirect: to => {
      //   const { hash, params, query } = to
      //   if (query.to === 'foo') {
      //     return { path: '/foo', query: null }
      //   }
      //   if (hash === '#baz') {
      //     return { name: 'baz', hash: '' }
      //   }
      //   if (params.id) {
      //     return '/with-params/:id'
      //   } else {
      //     return '/bar'
      //   }
      // }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  next()
})
export default router
