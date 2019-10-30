<template>
  <div class="ticket-list">
    <!-- 一级菜单 -->
    <div v-for="item of list" :key="item.id" class="item">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 二级菜单 -->
      <div v-for="(item,index) of item.children" :key="index"  >
      <div class="ticket-class" @click="toggle">
        <span>{{item.title}}</span>
        <span class="iconfont toggle hidden ">&#xe6ee;</span>
        <span class="iconfont toggle">&#xe6eb;</span>
      </div>
      <div class="commend-list" style="display:none">
        <!-- 三级菜单 -->
        <div class="commend-item" v-for="(item,index) of ticketMsg" :key="index">
            <div class="item-left">
              <div class="ticket">{{item.name}}</div>
              <div class="limit-time">
                <span class="iconfont clock-icon">&#xe7d2;</span>
                <span class="time">{{item.buyTime}}</span>
              </div>
              <span
                class="label"
                v-for="(item,index) of item.limitCondition"
                :key="index"
              >{{item.limit}}</span>
            </div>
            <div class="item-right">
              <div class="price">
                <span class="dolor">￥</span>
                <span class="money">{{item.price}}</span>
              </div>
              <div class="reserve-btn" @click.self="showReserveWindow(item.name,item.price)">预订</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: "",
  },
  data(){
    return{
      ticketMsg: [
      {
        name: "北京八达岭长城 (旺季) 成人票",
        price: "45",
        buyTime: "19:00前可订今日",
        limitCondition: [
          {
            limit: "无需换票"
          },
          {
            limit: "条件退"
          },
          {
            limit: "自营"
          }
        ]
      },
    ]
    }
  },
  methods:{
    toggle(e){
      console.log('123');
      // 下一级菜单伸缩
      if(e.currentTarget.nextElementSibling.style.display==='block'){
        e.currentTarget.nextElementSibling.style.display='none';
      }else{
        e.currentTarget.nextElementSibling.style.display='block';
      }
      // 右侧小箭头变化
      // 两个小箭头是兄弟元素，一个显示一个隐藏
      if(e.currentTarget.firstElementChild.nextElementSibling.classList['value']==='iconfont toggle hidden'){
        e.currentTarget.firstElementChild.nextElementSibling.nextElementSibling.classList['value']='iconfont toggle hidden';
        e.currentTarget.firstElementChild.nextElementSibling.classList['value']='iconfont toggle block';
      }else{
        e.currentTarget.firstElementChild.nextElementSibling.nextElementSibling.classList['value']='iconfont toggle block';
        e.currentTarget.firstElementChild.nextElementSibling.classList['value']='iconfont toggle hidden';
      }
    },
    showReserveWindow(ticketName,ticketPrice){
      console.log('点击了预订按钮')
      this.$emit('showReserve',ticketName,ticketPrice)
    }
  },
  watch: {
      // 给下拉按钮添加一个变量
      list: function(newVal,oldVal){
        let arr=[];
        // let length=newVal['0'].children.length;
        for(let i=0;i<newVal.length;i++){
            arr[i]=[];
            for(let j=0;j<newVal['0'].children.length;j++){
            arr[i][j]=false;
          }
        }
        // this.toggles=arr;
        console.log(newVal['0'].children.length,newVal.length,arr)
      }
  },
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/mixins.less");
.ticket-list {
  display: block;
  margin-top: 12px;
  overflow: hidden;
  width: 100%;
  .commend-list {
    width: 100%;
    .commend-item {
      padding: 15px 8px;
      border-top: #ccc solid 0.5px;
      display: flex;
      .item-left {
        width: 70%;
        .ticket {
          font-size: 14px;
        }
        .limit-time {
          display: flex;
          align-content: center;
          margin: 8px 0;

          .clock-icon {
            color: rgb(15, 167, 187);
            font-size: 13px;
          }
          .time {
            font-size: 13px;
          }
        }
        .label {
          color: rgb(15, 167, 187);
          border: 1px solid rgb(15, 167, 187);
          margin-right: 5px;
          padding: 1px;
          font-size: 13px;
        }
      }
      .item-right {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .price {
          color: rgb(248, 163, 26);
          .money {
            font-size: 20px;
          }
        }
        .reserve-btn {
          font-size: 18px;
          text-align: center;
          background: rgb(248, 163, 26);
          color: #fff;
          width: 80%;
          height: 40%;
          padding: 5px 0 3px 0;
          border-radius: 5px;
        }
      }
    }
  }
}
.item {
  overflow: hidden;
  margin-bottom: 12px;
  @marginLeft: 10px;
  position: relative;
  background: rgb(255, 255, 255);

  .item-title {
    margin: 15px 0 15px @marginLeft;
    font-size: 16px;
    display: flex;
    align-items: center;
    .ellipsis();
  }
  .item-title-icon {
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
      no-repeat;
    margin-right: 0.2rem;
    background-size: 0.4rem 3rem;
  }
  .ticket-class {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-top: 0.5px solid #ccc;
    padding: 10px 0 10px @marginLeft;
    font-size: 16px;
    display: flex;
    align-items: center;
    .toggle{
      margin-right: 25px;
      color: #ccc;
      font-size: 30px;
      // float: right;
      // right: 15px;
      // bottom: 100%;
      // top: 100%;
    }
  }
}
.hidden{
  display: none;
}
.display{
  display: block;
}
</style>