<template>
  <div id="app">
    <keep-alive  exclude="Detail,Map">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="less">
#app{
  height: 100%;
}
body,html{
  height:100%;
}
</style>

