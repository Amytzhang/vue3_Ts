import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Ts_Basis1.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/interview',
    name: 'interview',
    component: () => import(/* webpackChunkName: "about" */ '../views/interview.vue')
  },
  {
    path: '/slot',
    name: 'showSlot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/ShowSlot.vue')
  },
  {
    path:'/three',
    name:'three',
    component: () => import(/* webpackChunkName: "about" */ '../views/three/index.vue'),
    children:[
      {
        path:'tubeOne',
        name: 'tubeOne',
        component: () => import(/* webpackChunkName: "about" */ '../views/three/tube_1.vue'),
      },
      {
        path:'trye',
        name: 'trye',
        component: () => import(/* webpackChunkName: "about" */ '../views/three/try.vue'),
      },
      {
        path:'threeExample',
        name: 'threeExample',
        component: () => import(/* webpackChunkName: "about" */ '../views/three/threeExample.vue'),
      },
      {
        path:'point',
        name: 'point',
        component: () => import(/* webpackChunkName: "about" */ '../views/three/point.vue'),
      }
    ]
  },{
    path:'/virtual',
    name:'virtual',
    component:() => import('../views/Virtual.vue')
  },
  {
    path:'/tsVue3',
    name:'tsVue3',
    component:() => import('../views/ts_vue3/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
