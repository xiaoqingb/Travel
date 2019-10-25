<template>
    <ul class="list">
        <li class="item" v-for=" item of letters" :key="item" :ref="item" :id="item"
        @click="handlerLetterClick" 
        @touchstart.prevent="handleTouchStart" 
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
            {{item}}
        </li>
    </ul>
</template>

<script>

export default {
  name: "Alphabet",
  props:{
      cities:'',
  },
  data(){
      return{
          touchStatus:false,
          startY:0,
        //   函数节流
          timer:null,
      }
  },
  updated(){
      this.startY=this.$refs['A'][0].offsetTop
  },
  computed:{
      letters(){
          const letters=[];
          for(let i in this.cities){
              letters.push(i);
          }
          return letters;
        //   console.log(letters)
      }
  },
  methods:{
      handlerLetterClick(e){
          this.$emit('change',e.target.innerText)
        //   console.log(e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus=true
      },
      handleTouchMove(e){
        if (this.touchStatus) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer=setTimeout(() => {
                const touchY=e.touches[0].clientY -76;
                console.log(e.touches);
                const index=Math.floor((touchY-this.startY)/17);
                if (index>= 0 &&index<this.letters.length) {
                    this.$emit('change',this.letters[index])
                    console.log(this.letters[index]);
                }
            }, 7);
        }
      },
      handleTouchEnd(){
        this.touchStatus=false
      }
  },
  mounted(){
  }
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/varibles.less");
.list{
    position: absolute;
    right: 4px;
    top: 90px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15px;
    .item{
        font-size: 17px;
        text-align: center;
        color: @bgColor;
        height: 17px;
        &:visited{
            color: #000;
        }
    }
}
</style>