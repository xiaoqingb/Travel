import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import City from '../views/City/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },

]

const router = new VueRouter({
  routes
})

export default router
