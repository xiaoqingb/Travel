<template>
  <div>
    <city-header ></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter='letter' :hotCities="hotCities" :cities="cities" ></city-list>
    <city-alphabet  :cities="cities" @change='handleLetterChange'></city-alphabet> 
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
      letter:'',
    }
  },
  mounted(){
    this.getCityInfo()
  },
  methods:{
    getCityInfo(){
        axios.get("/xiaoqingb.github.io/travel-platfrom/city").then(response => {
                      if (response.data) {
                          // console.log(response.data);
                          this.hotCities=response.data['hotCities'];
                          this.cities=response.data['cities'];

                      }
                  })
      },
      handleLetterChange(letter){
        this.letter=letter;
        // console.log(letter)
      }
  }
 
}


</script>

<style lang='less' scoped>

</style>