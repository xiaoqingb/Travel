<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe618;</div>
    </div>
    <div class="header-input ">
        <span class="iconfont ">&#xe710;</span>
        输入城市/景观/游玩主题
        </div>
    <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe81c;</span>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
      },
}
</script>

<style lang='less' scoped>
// 引入公共变量
 @import url('~@/assets/styles/varibles.less');
.header{
    display: flex;
    background: @bgColor;
    color: #fff;
    line-height: .86rem;
    .header-left{
        width:.64rem;
        float: left;
        .back-icon{
            text-align: center;
            font-size: px;
        }
    }
    .header-input{
        flex:1;
        background: #fff;
        border-radius: 5px;
        height: .64rem;
        margin-top:.12rem;
        margin-left:.2rem;
        color: #ccc;
        line-height: .64rem;
        padding-left:10px;
    }
    .header-right{
        width:1.24rem;
        float: right;
        text-align: center;

    }
}
</style>