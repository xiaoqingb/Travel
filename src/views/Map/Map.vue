<template>
  <div class="map-page">
    <div class="header" >
      <router-link to="/detail">
        <div class="iconfont header-back">&#xe618;</div>
      </router-link>景点地址
    </div>
    <b-map-component class="b-map" :mapHeight="mapHeight" :sightName='this.viewPoint'></b-map-component>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters } from "vuex";

import BMapComponent from '@/common/map/BMapComponent.vue';
export default {
    name:'Map',
    components:{
        BMapComponent
    }, 
    data(){
      return{
        // sightName:this.viewPoint,
      }
    },
    computed:{
        // 从vuex映射到组件里并将city加入计算属性中
        ...mapState(['viewPoint']),
    },
    data(){
        return{
            // 地图的高度就是页面高度减去页眉高度
            // 地图必须有一个固定高度，不然会报错，而且高度最好填满页面，不然会有缝隙
            mapHeight:document.body.clientHeight-43,
        }
    },
    mounted(){
        // console.log(this.viewPoint);
    }
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