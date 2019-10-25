import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = true;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
