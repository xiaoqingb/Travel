<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content"></div>
      <!-- :bannerImg="bannerImg" -->
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
      DetailHeader,
      DetailBanner,
    },
     data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  //  mounted () {
  //   this.getDetailInfo()
  // },
  // methods: {
  //   getDetailInfo () {
  //     axios.get('/detail')
  //     .then(this.handleGetDataSucc)
  //     .catch(function(err){
  //       console.log(err);
  //     })
  //   },
  //   handleGetDataSucc (response) {
  //     console.log(response)
  //     response = response.data
  //     if (response.ret && response.data) {
  //       const data = response.data
  //       this.sightName = data.sightName
  //       this.bannerImg = data.bannerImg
  //       this.gallaryImgs = data.gallaryImgs
  //       this.list = data.categoryList
  //     }
  //   }
  // },
 
}
</script>

<style lang ="less" scoped>
.content{
  width: 100%;
  height: 900px;
}

</style>