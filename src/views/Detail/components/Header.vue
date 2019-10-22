<template>
    <div class="header">
        <router-link to="/" v-show="showAbs">
            <div class="header-abs">
                <div class="iconfont back-icon">&#xe618;</div>
            </div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
                <router-link to="/">
                    <div class="iconfont header-fixed-back">&#xe618;</div>
                </router-link>
                景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:1
            }
        }
    },
    // 挂载后绑定滚动事件
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(){
            const Top=document.documentElement.scrollTop;
            console.log(document.documentElement.scrollTop)
            if (Top>40) {
                let opacity =Top/165;
                opacity=opacity >= 1 ? 1:opacity;
                this.opacityStyle={opacity}
                this.showAbs=false;
            }else{
                this.showAbs=true;
            }
        }
    },
    // 销毁后取消滚动时间
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
}
</script>
    
<style lang='less' scoped>
@import url('~@/assets/styles/varibles.less');
@import url('~@/assets/styles/iconfont.css');

.header-abs{
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    font-size: 25px;
    background:rgba(0, 0, 0, 0.5) ;
    z-index: 1;
    color: rgb(116, 116, 116);
    display: flex;
    justify-content: center;
    align-items: center;

}
.header-fixed{
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2;
height: @headerHeight;
line-height: @headerHeight;
text-align: center;
background: @bgColor;
color: #fff;
    .header-fixed-back{
        position: absolute ;
        top: 0;
        left: 0; 
        width: 32px;
        color: #fff;
    }
}
</style>