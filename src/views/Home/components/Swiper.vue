<template>
  <div class="wrapper">
    <swiper id="swiper-container" :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2854349489,2054847772&fm=26&gp=0.jpg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1496337433,148508854&fm=26&gp=0.jpg"
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