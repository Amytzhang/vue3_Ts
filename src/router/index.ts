import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
