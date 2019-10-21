<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper  :options='swiperOptions'>
        <swiper-slide v-for="(item,index) of bannerImgs" :key="index">
            <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props:{
      bannerImgs:''
  },
  data(){
      return {
          swiperOptions:{
              pagination:'.swiper-pagination',
              paginationType:'fraction',
              observeParents:true,
              observer:true,
          },
          
      }
  },
  methods:{
      handleGallaryClick(){
          this.$emit('close')
      }
  },
};
</script>

<style lang='less' scoped>
.container {
    /deep/.swiper-container{
        overflow: inherit;
    }
  display: flex;
  justify-content: center;
  flex-direction: column;
  // z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {

    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallary-img{
        // width: 100%;
        height: 100%;
    }
    .swiper-pagination{
        // z-index: 2;
        color: #ccc;
        position: absolute;
        bottom: -40%;
    } 
}
}
</style>