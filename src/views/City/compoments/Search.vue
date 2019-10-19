<template>
  <div class="search">
        <input class="search-input" name="" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>

export default {
    name:'CitySearch',
}
</script>

<style lang='less' scoped>
@import url('~@/assets/styles/varibles.less');
.search{
    background: @bgColor;
    height: 33px;
    padding:0 5px  4px 5px;
    color: #666;
    .search-input{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        text-align: center;
        color: rgba(119, 119, 119, 0.726);

    }
}

</style>