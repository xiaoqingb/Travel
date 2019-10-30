<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <div class="map-mark-introduction-container">
      <div class="mark-introduction-container">
        <div class="mark-link-container">
          <div class="mark-grade">
            <span>4.9</span>分 很棒
          </div>
          <div class="mark-raiders-num">454545条评论 13条攻略</div>
          <span class="iconfont" id="icon-next">&#xe60b;</span>
        </div>
        <div class="introduction-link-container">
          <h3>景点简介</h3>
          <span>开放时间、贴士</span>
          <span class="iconfont" id="icon-next">&#xe60b;</span>
        </div>
      </div>
      <div class="map-link-container" @click="goToMap">
        <span class="iconfont">&#xe6e4;</span>
        <p>辽宁省大连市沙河口区中山路608-6-8号（星海广场西500米，星海公园内）</p>
        <span class="iconfont" id="icon-next">&#xe60b;</span>
      </div>
    </div>
    <detail-commend @showReserve="showReserveWindow"></detail-commend>
    <detail-list :list="list" @showReserve="showReserveWindow"></detail-list>
    <div class="gray-bg" v-if="showReserve" @click="showReserveWindow"></div>
    <transition>
      <reserve-window v-if="showReserve" :buyingTicketName='buyingTicketName' :ticketPrice='ticketPrice' @closeWindow='showReserveWindow'></reserve-window>
    </transition>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import DetailCommend from "./components/Commend.vue";
import ReserveWindow from "./components/ReserveWindow.vue";

import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    DetailHeader,
    DetailBanner,
    DetailList,
    DetailCommend,
    ReserveWindow
  },
  data() {
    return {
      buyingTicketName:'',
      buyingTicketPrice:'',
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
      showReserve: false,
      tickName:'',
    };
  },
  mounted() {
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/detail")
        .then(this.handleGetDataSucc)
        .catch(function(err) {
          console.log(err);
        });
    },
    handleGetDataSucc(response) {
      console.log(response);
      if (response) {
        const data = response.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    },
    goToMap() {
      this.changeViewPoint(this.sightName);
      this.$router.push({ path: "Map" });
      // console.log(this.)
    },
    showReserveWindow(tickName,ticketPrice) {
      console.log(this.buyingTicketName);
      this.buyingTicketName=tickName;
      this.ticketPrice=ticketPrice;
      console.log("在detail里触发了" + this.buyingTicketName,this.ticketPrice);
      console.log(this.buyingTicketName);
      this.showReserve = !this.showReserve;
    },
    ...mapMutations(["changeViewPoint"])
  }
};
</script>

<style lang ="less" scoped>
    .v-enter,.v-leave-to {
      opacity: 0;
      transform: translateY(150px);
    }
    /* v-enter-active 【入场动画的动作】 */
    /* v-leave-active 【离场动画的动作】 */
    /* .v-enter-active, */
    .v-leave-active{
      /* 设置动画过渡：过度所有属性，时间0.8秒，过渡方式 */
      transition: all 0.5s ease-out;
    }
    .v-enter-active{
      /* 设置动画过渡：过度所有属性，时间0.8秒，过渡方式 */
      transition: all 0.8s ease;
    }

.detail {
  position: relative;

  background: rgb(246, 246, 246);
}

.map-mark-introduction-container {
  background: rgb(255, 255, 255);
  max-height: 20%;
  padding: 8px 8px;
  margin-bottom: 12px;
  .mark-introduction-container {
    max-height: 60%;
    width: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    padding: 5px 0;
    box-sizing: border-box;
    justify-content: space-between;
    .mark-link-container,
    .introduction-link-container {
      height: 100%;
      width: 48%;
      background: #fff;
    }
    .mark-link-container {
      position: relative;
      border-right: 1px solid rgb(221, 220, 220);
      .mark-grade {
        color: rgb(253, 150, 53);
        span {
          font-size: 25px;
        }
      }
      .mark-raiders-num {
        margin-top: 5px;
        font-size: 12px;
        color: rgb(155, 155, 155);
      }
    }
    .introduction-link-container {
      position: relative;
      padding-left: 10px;
      h3 {
        padding: 8px 0 5px 0;
        font-size: 15px;
      }
      span {
        font-size: 12px;
        color: rgb(155, 155, 155);
      }
    }
  }
  .map-link-container {
    max-height: 50%;
    position: relative;
    border-top: rgb(238, 238, 238) solid 1px;
    padding: 10px 0;
    display: flex;
    span {
      font-size: 20px;
      margin-top: 3px;
      color: #ccc;
    }
    p {
      width: 80%;
      font-size: 14px;
      margin-top: 3px;
      margin-left: 10px;
      line-height: 18px;
    }
  }
}
#icon-next {
  position: absolute;
  top: 40%;
  right: 5px;
  font-size: 14px;
  color: rgb(206, 206, 206);
}
.gray-bg {
  position: fixed;
  z-index: 3;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(7, 7, 7, 0.541);
}
</style>