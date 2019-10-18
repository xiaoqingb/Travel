<template>
  <div class="icons">
    <swiper class="swiper-container">
      <swiper-slide v-for='(page,i) of pages' :key="i">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props:{
    HomeIconsContent:'',
  },
  data(){
    return {
      swiperOption:{
        autoplay:false,
      }
    }
  },
  computed:{
    pages(){
      const pages=[];
      // 对图标进行分页转换
      let arr=this.HomeIconsContent;
      for(let i=0;i<arr.length;i++){
        const page=Math.floor(i/8);
        if(!pages[page]){
          pages[page]=[];
        }
        pages[page].push(arr[i])
      }
      return pages;
    }
  }
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/varibles.less");
@import url("~@/assets/styles/mixins.less");
.icons {
  margin-top: 4px;
  /deep/.swiper-container {
    height: 0;
    padding-bottom: 45%;
  }
}
.icon {
    position: relative;
    width: 25%;
    height: 0;
    padding-bottom: 22.5%;
    float: left;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      .ellipsis();
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: @textColor;
    }
  }
</style>