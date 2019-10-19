<template>
    <ul class="list">
        <li class="item">
            A
        </li>
        <li class="item">
            A
        </li>
        <li class="item">
            A
        </li>
        <li class="item">
            A
        </li>
        <li class="item">
            A
        </li>
    </ul>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Alphabet",
  mounted(){
      this.scroll=new BScroll(this.$refs.wrapper)
  }
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/varibles.less");
.list{
    position: absolute;
    right: 2px;
    top: 90px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15px;
    .item{
        font-size: 17px;
        text-align: center;
        color: @bgColor;
    }
}
</style>