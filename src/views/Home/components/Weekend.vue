<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data(){
      return{
          recommendList:[
          {
              id:'0001',
              imgUrl:'https://f10.baidu.com/it/u=2388321944,3201079442&fm=72',
              title:'大连圣亚海洋世界',
              desc:'浪漫大连首站，浪漫的海洋主题乐园'
          },{
              id:'0002',
              imgUrl:'https://f10.baidu.com/it/u=2388321944,3201079442&fm=72',
              title:'大连圣亚海洋世界',
              desc:'浪漫大连首站，浪漫的海洋主题乐园'
          },{
              id:'0003',
              imgUrl:'https://f10.baidu.com/it/u=2388321944,3201079442&fm=72',
              title:'大连圣亚海洋世界',
              desc:'浪漫大连首站，浪漫的海洋主题乐园'
          },{
              id:'0004',
              imgUrl:'https://f10.baidu.com/it/u=2388321944,3201079442&fm=72',
              title:'大连圣亚海洋世界',
              desc:'浪漫大连首站，浪漫的海洋主题乐园'
          },
      ]
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
  background: rgb(255, 255, 255);
  padding: 2px;
  box-sizing: border-box;
  .item-img {
    width: 100%;
    height: 100px;
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