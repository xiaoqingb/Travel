<template>
    <div>
        <div class="search">
                <input v-model="keyword" class="search-input" name="" type='text' placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref="SearchWrapper"
            v-show="keyword">
            <ul>
                <li class="item" v-for="item of list" :key="item.id"  @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="item" v-show="hasData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from "vuex";
export default {
    name:'CitySearch',
    data(){
        return{
            timer:null,
            keyword:'',
            list:[],
        }
    },
    props:{
        cities:'',
    },
    computed:{
        hasData(){
            return !this.list.length
        }
    },
    methods:{
            handleCityClick(city){
      this.$store.commit('changeCity',city);
      this.$router.push('/')
    //   console.log(city)
    }
    },
    watch:{
        keyword(){
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list=[];
                return;
            }
            this.timer=setTimeout(() => {
                const result=[];
                for(let i in this.cities){
                    this.cities[i].forEach((val)=>{
                        if (val.spell.indexOf(this.keyword) > -1||val.name.indexOf(this.keyword) > -1) {
                            result.push(val);
                        }
                    })
                }
                this.list=result;
            }, 100);
        }
    },
     mounted(){
      this.scroll=new BScroll(this.$refs.SearchWrapper)
  },
}
</script>

<style lang='less' scoped>
@import url('~@/assets/styles/varibles.less');
.search{
    z-index:2;
    background: @bgColor;
    height: 33px;
    padding:0 5px  4px 5px;
    color: #666;
    .search-input{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        text-align: center;
        color: rgba(119, 119, 119);
    }
}
.search-content{
    z-index:1;
    overflow: hidden;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    .item{
    height: 33px;
      line-height: 33px;
      padding-left: 8px;
      font-size: 15px;
      color: rgb(88, 88, 88);
      border-bottom: rgba(204, 204, 204, 0.527) 0.5px solid;
    }
}


    


</style>