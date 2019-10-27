<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe618;</div>
    </div>
    <div class="header-input ">
        <span class="iconfont ">&#xe710;</span>
        输入城市/景观/游玩主题
        </div>
        <router-link to="city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe81c;</span>
            </div>
        </router-link>
    
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    name:'HomeHeader',
        computed:{
        // 从vuex映射到组件里并将city加入计算属性中
        ...mapState(['city']),
    }
}
</script>

<style lang='less' scoped>
// 引入公共变量
 @import url('~@/assets/styles/varibles.less');
.header{
    display: flex;
    background: @bgColor;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: @headerHeight;
    .header-left{
        width:.64rem;
        .back-icon{
            text-align: center;
        }
    }
    .header-input{
        flex:1;
        background: #fff;
        border-radius: 5px;
        height: .64rem;
        color: #ccc;
        line-height: .64rem;
        padding-left:10px;
    }
    .header-right{
        padding-left: 3px;
        color: #fff;
        text-align: center;
    }
}
</style>