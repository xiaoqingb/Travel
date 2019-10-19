<template>
  <div>
    <city-header ></city-header>
    <city-search ></city-search>
    <city-list :hotCities="hotCities" :cities="cities" ></city-list>
    <city-alphabet  :cities="cities"></city-alphabet> 
  </div>
  
</template>

<script>
import cityHeader from './compoments/Header.vue'
import CitySearch from './compoments/Search.vue'
import CityList from './compoments/CityList.vue'
import CityAlphabet from './compoments/Alphabet.vue'
import mock from '../../mock/index.js'
import axios from 'axios'
export default {
  name:"City",
  components:{
    cityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      hotCities:'',
      cities:'',
    }
  },
  mounted(){
    this.getCityInfo()
  },
  methods:{
    getCityInfo(){
        axios.get("/city").then(response => {
                      if (response.data) {
                          console.log(response.data);
                          this.hotCities=response.data['hotCities'];
                          this.cities=response.data['cities'];
                          console.log(this.cities)
                          console.log(this.hotCities)
                      }
                  })
      }
  }
 
}


</script>

<style lang='less' scoped>

</style>