<template>
  <div class="header">
        <router-link to="/">
            <div class="iconfont header-back">&#xe618;</div>
        </router-link>
      城市选择
  </div>
</template>

<script>

export default {
    name:'CityHeader',

}
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/varibles.less");
.header{
    position: relative;
    height: @headerHeight;
    line-height: @headerHeight;
    text-align: center;
    background: @bgColor;
    color: #fff;
    .header-back{
        position: absolute ;
        top: 0;
        left: 0; 
        width: 32px;
        color: #fff;
    }
}
</style>