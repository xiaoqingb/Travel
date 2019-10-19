<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="city-button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="city-button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "CityList",
  mounted(){
      this.scroll=new BScroll(this.$refs.wrapper)
  }
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/varibles.less");
.list{
    overflow: hidden;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
}
.area {
  .title {
    height: 27px;
    font-size: 15px;
    padding-left: 10px;
    line-height: 27px;
    background: #eee;
    color: rgb(90, 90, 90);
  }
  .button-list {
    display: flex;
    flex-wrap: wrap;
    .button-wrapper {
      width: 29%;
      margin: 4px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      text-align: center;
      border-radius: 5px;
      .city-button {
        font-size: 15px;
        margin: 4px 0;
        color: rgb(85, 85, 85);
      }
    }
  }
  .item-list {
    .item {
      height: 33px;
      line-height: 33px;
      padding-left: 8px;
      font-size: 15px;
      color: rgb(88, 88, 88);
      border-bottom: rgba(204, 204, 204, 0.527) 0.5px solid;
    }
  }
}
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
</style>