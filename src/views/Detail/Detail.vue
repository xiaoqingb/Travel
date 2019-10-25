<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></detail-banner>
    <div class="map-mark-introduction-container">
        <div class="mark-introduction-container">
          <div class="mark-link-container">
            <div class="mark-grade">
              <span>4.9</span>分  很棒
            </div>
            <div class="mark-raiders-num">
                454545条评论  13条攻略
            </div>
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

    <div class="content">
      <detail-list 
      :list='list'
      ></detail-list>
    </div>

  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
      DetailHeader,
      DetailBanner,
      DetailList,
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
    }
  },
   mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/detail')
      .then(this.handleGetDataSucc)
      .catch(function(err){
        console.log(err);
      })
    },
    handleGetDataSucc (response) {
      console.log(response)
      if (response) {
        const data = response.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    },
    goToMap(){
      this.$router.push({path:'Map'})
    }
  },
 
}
</script>

<style lang ="less" scoped>
.content{
  overflow: hidden;
  width: 100%;
  height: 900px;
  background: rgb(255, 255, 255);
}
.detail{
  height: 100%;
  background: rgb(246, 246, 246);
}
.map-mark-introduction-container{
  background: rgb(255, 255, 255);
  max-height: 20%;
  padding: 8px 8px;
  margin-bottom: 12px;
  .mark-introduction-container{
    max-height: 60%;
    width: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    padding: 5px 0; 
    box-sizing: border-box;
    justify-content: space-between;
    .mark-link-container,.introduction-link-container{
      height:100%;
      width:48%;
      background: #fff;
    }
    .mark-link-container{
      position:relative;
      border-right: 1px solid rgb(221, 220, 220);
      .mark-grade{
        color: rgb(253, 150, 53);
        span{
          font-size: 25px;
        }
      }
      .mark-raiders-num{
        margin-top: 5px;
        font-size: 12px;
        color: rgb(155, 155, 155);
      }
    }
    .introduction-link-container{
      position:relative;
      padding-left: 10px;
      h3{
        padding: 8px 0 5px 0;
        font-size: 15px;
      }
      span{
        font-size: 12px;
        color: rgb(155, 155, 155);
      }
    }
    
  }
  .map-link-container{
    max-height: 50%;
    position:relative;
    border-top: rgb(238, 238, 238) solid 1px;
    padding: 10px 0;
    display: flex;
    span{
      font-size: 20px;
      margin-top: 3px;
      color: #ccc;
    }
    p{
      width: 80%;
      font-size: 14px;
      margin-top: 3px;
      margin-left: 10px;
      line-height: 18px;
    }
  }
}
#icon-next{
  position: absolute;
  top: 40%;
  right: 5px;
  font-size: 14px;
  color: rgb(206, 206, 206);
}
 

</style>