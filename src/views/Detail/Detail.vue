<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></detail-banner>
    <div class="content">
    <detail-list 
    :list='list'
    ></detail-list>
    </div>
      <!-- :bannerImg="bannerImg" -->
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
      DetailList
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
    }
  },
 
}
</script>

<style lang ="less" scoped>
.content{
  width: 100%;
  height: 900px;
}

</style>