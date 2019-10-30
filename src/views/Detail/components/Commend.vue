<template>
  <div id="commend">
    <div class="header">
        <span class="iconfont">&#xe67f;</span>
        <h2>官方推荐</h2>    
    </div>
    <div class="commend-list">
        <div class="commend-item" v-for="(item,index) of ticketMsg" :key="index">
            <div class="item-left">
                <div class="ticket">
                    {{item.name}}
                </div>
                <div class="limit-time">
                    <span class="iconfont clock-icon">&#xe7d2;</span><span class="time">  {{item.buyTime}}</span> 
                </div>
                <span class="label" v-for="(item,index) of item.limitCondition" :key="index">
                    {{item.limit}}
                </span>
            </div>
            <div class="item-right">
                <div class="price">
                    <span class="dolor">￥</span>        
                    <span class="money">{{item.price}}</span>
                </div>
                <div class="reserve-btn" @click.self="showReserveWindow(item.name,item.price)">
                    预订
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'Commend',
    props:{
        showReserve:'',
       
    },
    data(){
        return{
             ticketMsg:[
                {
                    name:'北京八达岭长城 (旺季) 成人票',
                    price:'45',
                    buyTime:'19:00前可订今日',
                    limitCondition:[
                        {
                        limit:'无需换票'
                        },
                        {
                        limit:'条件退'
                        },
                        {
                        limit:'自营'
                        }
                    ]
                }, {
                    name:'北京八达岭长城 (旺季) 成人票',
                    price:'45',
                    buyTime:'19:00前可订今日',
                    limitCondition:[
                        {
                        limit:'无需换票'
                        },
                        {
                        limit:'条件退'
                        },
                        {
                        limit:'自营'
                        }
                    ]
                }, {
                    name:'北京八达岭长城 (旺季) 成人票',
                    price:'45',
                    buyTime:'19:00前可订今日',
                    limitCondition:[
                        {
                        limit:'无需换票'
                        },
                        {
                        limit:'条件退'
                        },
                        {
                        limit:'自营'
                        }
                    ]
                }, 
            ]
        }
    },

    methods:{
        showReserveWindow(ticketName,ticketPrice){
            console.log('点击了预订按钮')
            this.$emit('showReserve',ticketName,ticketPrice)
        }
    }
}
</script>

<style lang='less' scoped>
#commend{
    height: auto;
    width: 100%;
    padding: 0 9px;
    box-sizing: border-box;
    margin-bottom: 12px;
    background: #fff;
    .header{
    width: 100%;
    display: flex;
    padding: 8px 0;
    box-sizing: border-box;
    align-items: center;
        span{
            color:rgb(255, 120, 57);
            font-size: 25px;
        }
        h2{
            font-size: 17px;
        }
    }
    .commend-list{
        width: 100%;
        .commend-item{
            padding: 15px 0;
            border-top: #ccc solid 0.5px;
            display: flex;
            .item-left{
                width: 70%;
                .ticket{
                    font-size: 14px;
                }
                .limit-time{
                    display: flex;
                    align-content: center;
                    margin: 8px 0;
                  
                    .clock-icon{
                        color:rgb(15, 167, 187);
                        font-size: 13px;
                    }
                    .time{
                        font-size: 13px;
                    }
                }
                .label{
                    color:rgb(15, 167, 187);
                    border: 1px solid rgb(15, 167, 187);
                    margin-right: 5px;
                    padding: 1px;
                    font-size: 13px;
                }
            }
            .item-right{
                width: 30%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .price{
                    color: rgb(248, 163, 26);
                    .money{
                        font-size: 20px;
                    }
                }
                .reserve-btn{
                    font-size: 18px;
                    text-align: center;
                    background: rgb(248, 163, 26);
                    color: #fff;
                    width: 80%;
                    height: 40%;
                    padding: 5px 0 3px 0;
                    border-radius: 5px;
                }
            }
        }
    }
}


</style>