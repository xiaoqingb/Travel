import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
// import City from '@/views/City/City.vue'
// import Detail from '@/views/Detail/Detail.vue'
// import Map from '@/views/Map/Map.vue'

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
    component: City => require(['@/views/City/City.vue'],City)
  },
  {
    // 动态路由
    path: '/detail',
    name: 'Detail',
    component: Detail => require(['@/views/Detail/Detail.vue'],Detail)
  },
  {
    // 动态路由
    path: '/Map',
    name: 'Map',
    component: Map => require(['@/views/Map/Map.vue'],Map)
  },



]

const router = new VueRouter({
  routes,
  // 回滚页面顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }

  }
})


export default router
