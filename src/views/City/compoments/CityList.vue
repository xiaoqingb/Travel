<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper"  >
            <div class="city-button"  >{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for="city of hotCities" :key="city.id"  @click="handleCityClick(city.name)">
            <div class="city-button">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"  v-for="(items,key) of cities" :key="key" :ref='key'>
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"  v-for="item of items" :key="item.id">
          <div class="item"  @click="handleCityClick(item.name)">{{item.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations } from "vuex";
export default {
  name: "CityList",
  props:{
    cities:'',
    hotCities:'',
    letter:'',
  },
  computed:{
    ...mapState({
      currentCity:'city',
    }),
  },
  watch:{
    letter(){
      if (this.letter) {
        const element=this.$refs[this.letter][0];
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods:{
    handleCityClick(city){
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted(){
      this.scroll=new BScroll(this.$refs.wrapper)
  },
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