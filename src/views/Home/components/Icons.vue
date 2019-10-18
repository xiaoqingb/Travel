<template>
  <div class="icons">
    <swiper class="swiper-container">
      <swiper-slide v-for='(page,index) of pages' :key="index">
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
  data(){
    return {
      iconList:[
        {
        id:'001',
        desc:'景点门票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
        },{
        id:'002',
        desc:'火车票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
        },{
        id:'004',
        desc:'度假',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
        },{
        id:'005',
        desc:'机票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
        },{
           id:'006',
        desc:'景点门票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
        },{
        id:'007',
        desc:'火车票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
        },{
        id:'008',
        desc:'度假',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
        },{
        id:'009',
        desc:'机票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
        },{
        id:'010',
        desc:'机票',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
        },
      ]
    }
  },
  computed:{
    pages(){
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8);
        if(!pages[page]){
          pages[page]=[];
        }
        pages[page].push(item)
      })
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