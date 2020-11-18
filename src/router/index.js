
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookDetail from '../views/BookDetail.vue'



Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/shelf',
    name: 'Shelf',
    component: () => import(/* webpackChunkName: "about" */ '../components/Shelf.vue')

  },
  {
    path: '/detail/:id',
    name: BookDetail,
    component: BookDetail,
    props: true

  },
 
  {
    path:'/event',
    name: 'Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue')
  },
  {
    path: '/:notFound(.*)',
    component: null //*
  }
]

const router = new VueRouter({
  routes
})

export default router
