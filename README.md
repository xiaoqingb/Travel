新事物：
em/rem
stylus
webpack
awesome
axios
mock...4
swiper
better-scroll
####2019-10-18 23：30  ---随笔
###接触了几个新东西，比如：

### 1.stylus
 这个有点像less的工具，但个人觉得代码风格不是很好，可阅读性比less低，而且基本功能less都有，像/deep/深度选择器一样，stylus是用>>>来绑定子元素。

### 2.swiper
 这个是移动端流行使用的轮播图插件，挺好用的
### 3.axios
 模拟数据传输的一个工具，在vue-cli@3之前，是在static目录里建立的，但是我现在这个4.0版本目录已经没有config，build，static这些目录了，
 硬着头皮上网查，真的给我查到了个mock这个东西，使用方法如下：
 
 step 1 :  先在main.js里建立一个mock.js
 
 step 2 :  在文件里输入以下代码
 
    import Mock from 'mockjs';
    Mock.mock('/index', { //输出数据
        city:'北京', 
    });`
   
 step 3 : 在接收axios的组件里写入以下代码
 
    //先导入包
    import mock from '../../mock.js' 
    import axios from 'axios'
    
    //然后在methods里写接收函数
    getHomeInfo(){
      axios.get("/index").then(response => {
        if (response.data) {
            console.log(response.data);
            //拿到数据后就可以传给子组件了
        }
      })
    }`
 
 ### vue-cli更新后webpack的目录和配置文件都没有啦？？？？