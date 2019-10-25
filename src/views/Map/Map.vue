<template>
  <div class="map-page">
    <div class="header" >
      <router-link to="/">
        <div class="iconfont header-back">&#xe618;</div>
      </router-link>城市选择
    </div>
    <b-map-component class="b-map" :mapHeight="mapHeight"></b-map-component>
  </div>
</template>

<script>
import axios from 'axios'
import BMapComponent from '@/common/map/BMapComponent.vue';
export default {
    name:'Map',
    components:{
        BMapComponent
    },
    data(){
        return{
            mapHeight:document.body.clientHeight-40,
        }
    },
    
}
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/varibles.less");
@import url("~@/assets/styles/iconfont.css");
.map-page {
  height: 100%;
}
.header {
  position: relative;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  background: @bgColor;
  color: #fff;
  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    color: #fff;
  }
}
#map-container{
    width: 100%;
    height: 500px;
}
</style>