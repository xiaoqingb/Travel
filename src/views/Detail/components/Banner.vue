<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-num">
        <span class="iconfont icon-pic" >&#xe665; <i>39</i></span>
         
      </div>
    </div>
  </div>
  <common-gallary  
    :gallaryImgs="gallaryImgs"
    @close="handleGallaryClose"
    v-show="showGallary"
     class="common-gallary">
  </common-gallary>

</div>
  
</template>

<script>
import CommonGallary from '../../../common/gallary/gallary.vue'

export default {
  name:'DetailBanner',
  props:{
    sightName:'',
    bannerImg:'',
    gallaryImgs:'',

  },
  components:{
   CommonGallary
  },
  data(){
    return{
      showGallary:false,
      bannerImgs:[
      'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
      'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'
    ],
    }
  },
  methods:{
     handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang='less' scoped>
@import url('~@/assets/styles/varibles.less');
@import url('~@/assets/styles/iconfont.css');
@import url("~@/assets/styles/mixins.less");

.banner{
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    font-size: 17px;
    justify-content: space-between;
    color: #fff;
    padding: 0 8px 6px 8px;
    box-sizing: border-box;
    // 很实用的一个背景渐变
    background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));
    .banner-title{
      width: 70%;
      .ellipsis();
    }
    .banner-num{
      width: 40px;
      .icon-pic{
        font-size: 17px;
      }
      i{
        top: 1.3px;
        font-size: 15px;
      }
    }
  }
}
.common-gallary{
  z-index: 2;
}
</style>     