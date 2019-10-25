<template>
    <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
    <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->

    <div id="container"></div> 


</template>

<script>

    export default {
        name: "BMapComponent",
        data:function(){
            return{
                mapStyle:{
                    width:'100%',
                    height:this.mapHeight +'px'
                }
            }
        },
        methods:{
            xxx(){
                var map = new BMap.Map("container");    
                var point = new BMap.Point(116.404, 39.915);    
                map.centerAndZoom(point, 15);    
                window.setTimeout(function(){  
                    map.panTo(new BMap.Point(116.409, 39.918));    
                }, 500);
            }
        },
        created(){
            this.xxx()
        //    setTimeout(() => {
        //        this.xxx();
        //    }, 1000);
    }
    }
        // props:{
        //     // 地图在该视图上的高度
        //     mapHeight:{
        //         type:Number,
        //         default:500
        //     },
        //     // 经度
        //     longitude:{
        //         type:Number,
        //         default:156.404
        //     }
        //     ,
        //     // 纬度
        //     latitude:{
        //         type:Number,
        //         default:39.915
        //     },
        //     description:{
        //         type:String,
        //         default:'天安门'
        //     }
        // },

        // ready:function(){
        //     //  实例化地图
        //     var map =newBMap.Map("allmap");

        //     var point =newBMap.Point(120.391655,36.067588);
        //     var marker =newBMap.Marker(point);
        //     map.addOverlay(marker);
        //     map.centerAndZoom("北京",3);
        //     // 信息窗的配置信息
        //     var opts ={
        //         width :250,
        //         height:75,
        //         title :"地址：",
        //     }
        //     var infoWindow =newBMap.InfoWindow(this.description, opts);// 创建信息窗口对象
        //     marker.addEventListener("click",function(){
        //         map.openInfoWindow(infoWindow,point);
        //     });
        //     map.enableScrollWheelZoom(true);
        //     map.openInfoWindow(infoWindow,point);//开启信息窗口
        // },
    //     mounted(){
    //         var map = new BMap.Map("allmap");
    //         var geolocation = new BMap.Geolocation();
    //         //比例尺
    //         map.addControl(new BMap.ScaleControl());     
    //         //地图类型
    //         map.addControl(new BMap.MapTypeControl());      
    //         // 缩放控件
    //         map.addControl(new BMap.NavigationControl());
    //         geolocation.getCurrentPosition(function(r){
    //             var point = new BMap.Point(r.point.lng,r.point.lat);
    //             map.centerAndZoom(point,12);
    //             if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //                 var mk = new BMap.Marker(r.point);
    //                 map.addOverlay(mk);
    //                 map.panTo(r.point);

    //                 function myFun(result){
    //                     var cityName = result.name;
    //                     map.setCenter(cityName);
    //                     alert("当前定位城市:"+cityName);
    //                 }
    //             }

    //             else {
    //                 alert('failed'+this.getStatus());
    //             }
    //         });
    //     }

    // }
</script>

<style lang='less' scoped>
    #container{
        height:100%;
        width: 100%;
    }
</style>