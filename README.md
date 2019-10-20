新事物：
em/rem单位,
stylus,
webpack,
awesome,
axios,
mock,
swiper,
better-scroll,
vuex,
函数节流


#### 2019-10-18 23：30  ---随笔
#### 接触了几个新东西，比如：

### 1.stylus
 这个有点像less的工具，但个人觉得代码风格不是很好，可阅读性比less低，而且基本功能less都有，像/deep/深度选择器一样，stylus是用>>>来绑定子元素。

### 2.swiper
 这个是移动端流行使用的轮播图插件，挺好用的
### 3.axios
 模拟数据传输的一个工具，在vue-cli@3之前，是在static目录里建立的，但是我现在这个4.0版本目录已经没有config，build，static这些目录了，
 硬着头皮上网查，真的给我查到了个mock这个东西，使用方法如下：
 
 step 1 :  先在src目录里建立一个mock文件夹
 
 step 2 :  在文件里创建index.js,然后输入以下代码
 
    import Mock from 'mockjs';
    Mock.mock('/city', { //输出数据
        city:'北京', 
    });
    Mock.mock('/login', { //输出数据
        account:'xxx', 
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
 2019-10-20 0:55    --随笔
 ### 4.better-scroll
 当下移动端流行的滚动条样式，这里就不做详述了，有官方文档可以看