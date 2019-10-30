<template>
    <div class="container">
              <div id="reserve-btn">立即预定</div>
        <div class="reserve-msg" >
        <div class="back-reserve" @click="closeWindow">
          x
        </div>
        <h2>{{this.buyingTicketName}}</h2>

        <div class="ticket-price">
            <span class="doller">￥</span>
            <span class="price">{{this.ticketPrice}}</span>&nbsp;/张
        </div>
        <h4>价格日历</h4>
        <div class="day-container">
            <div class="choose-day" 
            v-for="(item,index) of dayList" 
            :key="index"
            :class="{bgBlue: item.light}"
            @click='chooseTime(item.name)'
            >
                <p>{{item.name}}</p>
                <p>{{item.day}}</p>
            </div>

            <div class="choose-day" @click='chooseTime("自定义")' :class="{bgBlue: light3}">
                <div class="block" >
                    <el-date-picker id="xxx"
                    size='mini'
                    format='MM-dd'
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <p class="prompt">需要在游玩的当天19:00前预定</p>
    </div>

    </div>
    
</template>

<script>
export default {
    name:'ReserveWindow',
    props:{
        buyingTicketName:'',
        ticketPrice:'',
    }, 
     data() {
      return {
        radio1: '上海',
        pickerOptions: {
        //   disabledDate(time) {
        //     return time.getTime() > Date.now();
        //   }
          
        },
        value:'222',
        value1: '',
        light3:false,
        whichDay:'今天',
        whichOneLight:0,
        dayList:[
              {
                name:'今天',
                day:this.today(),
                light:false,
              },
              {
                name:'明天',
                day:this.tomorrow(),
                light:false,
              },
              {
                name:'后天',
                day:this.theDayAfterTomorrow(),
                light:false,
              },
          ],
      };
    },
    methods:{
        // 关闭预定小窗口
        closeWindow(){
            this.$emit('closeWindow');
        },
        // 生成三天的日期 (今明后天)
        today(){
            const date = new Date();
            date.setTime(date.getTime());
            let time =  (date.getMonth() + 1) + "-" + date.getDate();
            return time;
        },
        tomorrow(){
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24);
            let time =  (date.getMonth() + 1) + "-" + date.getDate();
            return time;
        },
        theDayAfterTomorrow(){
            const date = new Date();
            date.setTime(date.getTime() + 2*3600 * 1000 * 24);
            let time =  (date.getMonth() + 1) + "-" + date.getDate();
            return time;
        },
        // 选择时间，变换颜色以及赋值给全局变量whichDay
        chooseTime(time){
                   console.log() 
            for(let i=0;i<3;i++){
                    this.dayList[i].light=false;
            };
            // 判断按了哪个按钮
            switch(time){
                case '今天':
                    this.whichOneLight=0;
                    break;
                case '明天':
                    this.whichOneLight=1;
                    break;
                case '后天':
                    this.whichOneLight=2;
                    break;
                case '自定义':
                    this.whichOneLight=3;

                    break;
            }
             if(this.whichOneLight<=2){
                 this.light3=false;
                this.dayList[this.whichOneLight].light=true;
                this.whichDay=this.dayList[this.whichOneLight].name;
             }else{
                //  this.whichDay=this.value1;
                 console.log(this.value1)
             }
        },
    },
    mounted(){
        console.log(this.buyingTicketName);
        // .onclick=this.chooseTime('自定义');
 
    },
    watch:{
        value1(newval,oldval){
            let time =  (newval.getMonth() + 1) + "-" + newval.getDate();
            this.value=time;
            // console.log(newval,oldval)
            // 点亮日期选择按钮
            this.light3=true;
            // 赋值给全局变量whichDay
            this.whichDay =  (newval.getMonth() + 1) + "-" + newval.getDate();
        }
    }

}
</script>

<style lang='less' scoped>

.container{
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  z-index: 4;
  bottom: 0;
  height: auto;
  width: 100%;
  background: rgb(255, 255, 255);

}
.reserve-msg {
  padding:20px 10px 0 10px;
  width: 100%;
  box-sizing: border-box;
  .back-reserve{
    font-size: 14px;
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    line-height: 19px;
    border:1px solid rgb(180, 180, 180);
    color:rgb(180, 180, 180);
    text-align: center;
    right: 10px;
    top: 10px;
  }
  h2{
      font-size: 20px;
      margin-bottom: 15px;
  }
  h4{
      margin-top: 20px;
      margin-bottom: 10px;
  }
  .ticket-price{
      font-size: 13px;
      color: rgb(172, 172, 172);
      .doller{
          font-size: 11px;
          color: rgb(251, 161, 42)
      }
      .price{
          font-size: 20px;
          color: rgb(251, 161, 42)
      }
  }
}

.day-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /deep/.el-input__inner{
        border: rgba(204, 204, 204, 0);
    }
    .choose-day{
    overflow: hidden;
    height: 30px;
    width: 23%;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .choose-day:nth-last-child(1){
        display: block;

        /deep/.el-input__inner{
            background: rgba(0, 0, 0, 0);
        }

    }
}
.bgBlue{
    background: rgb(56, 92, 250);
    color: rgb(236, 236, 236);
    /deep/.el-input__inner{
        color: #fff;
    }
}
.prompt{
    margin: 15px 0;
    color: rgb(251, 161, 42);
}
#reserve-btn{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: rgb(251, 161, 42);
    color: #fff;
}

</style>