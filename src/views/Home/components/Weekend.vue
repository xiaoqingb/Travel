<template>
  <div>
    <div class="recommend-title" @click="xxx">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of HomeWeekendContent" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    HomeWeekendContent:""
  },
  data(){

     
  },
  // mounted:{
  //   this.xxx()
  // },
  methods:{
    xxx(){
      console.log(this.HomeWeekendContent);
    }
  }
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/mixins.less");
.recommend-title {
  font-size: 17px;
  background: rgba(238, 238, 238, 0.486);
  height: 30px;
  padding-left: 5px;
  line-height: 30px;
}
.item {
  background: rgb(255, 255, 255);
  padding: 2px;
  box-sizing: border-box;
  .item-img {
    width: 100%;
    height: 120px;
    border-radius: 3px;
  }
  .item-info {
    flex: 1;
    margin-left: 8px;
    min-width: 0;
    .item-title {
      margin-top: 10px;
      font-size: 15px;
     font-weight:550;

      .ellipsis();
    }
    .item-desc {
      margin-top: 3px;
      font-size: 7px;
      color: #ccc;
        font-weight:500;

      margin-top: 6px;
      margin-bottom: 12px;
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