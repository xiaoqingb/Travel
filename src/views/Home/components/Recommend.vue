<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link 
      :id='item.id'
      tag="li"
      to="/detail"
      class="item border-bottom" 
      v-for="item of HomeRecommendContent" 
      :key="item.id">

          <img class="item-img" :src="item.imgUrl" alt />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    HomeRecommendContent:'',
  },
  methods:{
    xxx(){
      console.log(this.HomeRecommendContent);
    }
  }
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/mixins.less");
.recommend-title {
  font-size: 17px;
  background: rgba(238, 238, 238, 0.486);
  margin-top: 5px;
  height: 30px;
  padding-left: 5px;
  line-height: 30px;
}
.item {
  display: flex;
  background: rgb(255, 255, 255);
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  .item-img {
    width: 60px;
    height: 60px;
    border-radius: 3px;

  }
  .item-info {
    flex: 1;
    margin-left: 8px;
    min-width: 0;
    .item-title {
      font-size: 16px;
      .ellipsis();
    }
    .item-desc {
      margin-top: 5px;
      font-size: 14px;
      color: #ccc;

      .ellipsis();
    }
    button {
      margin-top: 3px;
      font-size: 10px;
      padding: 1.5px 7px;
      color: white;
      background: rgb(241, 129, 54);
      border-radius: 5px;
      font-weight: 600;
    }
  }
}
</style>