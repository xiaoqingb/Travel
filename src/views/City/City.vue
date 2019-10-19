<template>
  <div>
    <city-header ></city-header>
    <city-search ></city-search>
    <city-list ></city-list>
    <city-alphabet ></city-alphabet> 
  </div>
  
</template>

<script>
import cityHeader from './compoments/Header.vue'
import CitySearch from './compoments/Search.vue'
import CityList from './compoments/CityList.vue'
import CityAlphabet from './compoments/Alphabet.vue'
export default {
    name:"City",
    components:{
      cityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
}
</script>

<style lang='less' scoped>

</style>