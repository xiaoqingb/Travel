<template>
    <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
    <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->

    <div id="container" :style="{width: '100%', height: mapHeight + 'px'}"></div> 
</template>

<script>

    export default {
        name: "BMapComponent",
        props:{
            mapHeight:'',
            sightName:'',
        },
        data(){
            return{
            }
        },
        methods:{
            initMap(){
                let startLng='';
                let startLat='';
                let endLng='';
                let endLat='';
                // setp 1.初始化地图
                var map = new BMap.Map("container");    
                // 生成坐标点
                var point = new BMap.Point();    
                // map.centerAndZoom(point, 15);                 
                // 平移缩放控件   
                map.addControl(new BMap.NavigationControl());  
                // 比例尺控件  
                // map.addControl(new BMap.ScaleControl());    
                // 切换地图类型控件
                map.addControl(new BMap.MapTypeControl());  
                // 根据坐标点实例化一个小红标
                var marker = new BMap.Marker();        
                var myGeo = new BMap.Geocoder();      
                // setp 2.获取景点坐标
                console.log(this.sightName)
                // 将地址解析结果显示在地图上，并调整地图视野   
                // 这里要传一个景点的值，可以可以快速聚焦   
                myGeo.getPoint(this.sightName, function(point){
                    
                    endLng=point.lng;
                    endLat=point.lat;
                    if (point) {      
                        map.centerAndZoom(point, 17);  
                        // 创建景点标注       
                        map.addOverlay(new BMap.Marker(point));      
                    }      
                }, 
                // 这里还要加个城市限定，缩小搜索范围，不然搜不到
                '辽宁');
                var geolocation = new BMap.Geolocation();
                // console.log(geolocation)
                // 给访问者做标记
                function myFun(result){
                    startLng=result.center.lng;
                    startLat=result.center.lat;
                    var point2 = new BMap.Point(result.center.lng, result.center.lat);   
                    var marker2 = new BMap.Marker(point2);
                    // 创建起始城市标注    
                    map.addOverlay(marker2);
                    var cityName = result.name;
                    var marker = new BMap.Marker(result.point);  
                    // map.setCenter(cityName);
                    // alert("当前定位城市:"+cityName);
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun); 
                // var map = new BMap.Map("container"); 
            //    map.centerAndZoom(new BMap.Point(116.404, 39.915), 14); 
                // var driving = new BMap.DrivingRoute(map, { 
                //     renderOptions: { 
                //         map: map, 
                //         autoViewport: true 
                // } 
                // });
                // var start = new BMap.Point(startLng, startLat);
                // var end = new BMap.Point(endLng, endLat);
                // driving.search(start, end);
            }
        },
        created(){
           setTimeout(() => {
               this.initMap();
           }, 1500);
           console.log(this.sightName);
        },
        mounted(){
            
        },
    }

</script>

<style lang='less' scoped>
    #container{
        width: 100%;
    }
</style>