<template>
  <div class="home">
    <home-header ></home-header>
    <home-swiper :HomeSwiperContent='HomeSwiperContent'></home-swiper> 
    <home-icons :HomeIconsContent='HomeIconsContent'></home-icons> 
    <home-recommend :HomeRecommendContent='HomeRecommendContent' ></home-recommend> 
    <home-weekend :HomeWeekendContent='HomeWeekendContent'></home-weekend> 
  </div>
  
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import mock from '../../mock/index.js'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name:'Home',
  data(){
    return{
      HomeSwiperContent:'',
      HomeRecommendContent:'',
      HomeWeekendContent:'',
      HomeIconsContent:'',
      lastCity:'',
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    mock,
    axios,
    
  },
  mounted(){
    this.lastCity=this.city
    this.getHomeInfo()
  },
  activated(){
    if (this.lastCity!==this.city) {
      this.lastCity=this.city;
      this.getHomeInfo();
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get("/index")
      .then(response => {
          if (response.data) {
              // console.log(response.data);
              this.HomeSwiperContent=response.data['swiperList'];
              this.HomeRecommendContent=response.data['recommendList'];
              this.HomeWeekendContent=response.data['weekendList'];
              this.HomeIconsContent=response.data['iconList'];
          }
      })
      .catch(function(err){
        console.log(err);
      })
    
    }
  },
  
}
</script>

<style>

</style>