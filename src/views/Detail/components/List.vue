<template>
  <div>
      <div v-for="(item,index) of list" :key="index" class="item">
          <div class="item-title">
              <span class="item-title-icon"></span>{{item.title}}
          </div>
          <div v-if="item.children">
              <detail-list class="item-children" :list='item.children'>
                    <detail-list class="item-children" :list='item.children'></detail-list>
              </detail-list>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        list:'',
    }
}
</script>

<style lang='less' scoped>
.item{
    position: relative;
    .item-title{
    margin: 15px 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    }
    .item-title-icon{
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .2rem;
        background-size: .4rem 3rem;
    }
    .item-children{
        margin: 15px 20px;
        .item-children{
            margin: 15px 30px;
        }
    }
    
}

</style>