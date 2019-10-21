import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import City from '@/views/City/City.vue'
import Detail from '@/views/Detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    // 动态路由
    path: '/detail',
    name: 'Detail',
    component: Detail
  },

]

const router = new VueRouter({
  routes
})

export default router
