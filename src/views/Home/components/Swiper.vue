<template>
  <div class="wrapper">
    <swiper id="swiper-container" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of HomeSwiperContent" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    HomeSwiperContent:'',
  },
  data() {
    return {
      swiperOption: {
          pagination:'.swiper-pagination'
      }
    };
  }
};
</script>

<style lang='less' scoped>

.wrapper{
    width: 100%;
    height: 120px;
    background: #ccc;
    //  /deep/深度作用选择器
    /deep/.swiper-pagination-bullet-active{
      background: white;
    }
    #swiper-container{
        height: 100%;
        .swiper-pagination-bullet-active {
   background: rgb(236, 236, 236);
   width: .8rem !important;
}
    }
    .swiper-img {
        width: 100%;
        height: 100%;
    }
}
</style>