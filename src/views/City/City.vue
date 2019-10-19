<template>
  <div>
    <city-header ></city-header>
    <city-search ></city-search>
  </div>
  
</template>

<script>
import cityHeader from './compoments/Header.vue'
import CitySearch from './compoments/Search.vue'
export default {
    name:"City",
    components:{
      cityHeader,
      CitySearch
    }
}
</script>

<style lang='less' scoped>

</style>