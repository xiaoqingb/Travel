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
***

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
    }
 
 ### vue-cli更新后webpack的目录和配置文件都没有啦？？？？
 2019-10-20 0:55    --随笔
 ***
 ### 4.better-scroll
 当下移动端流行的滚动条样式，这里就不做详述了，有官方文档可以看
 ### 5.为什么我用mockjs之后，network里看不到请求？？
 因为mock本身就会拦截请求，当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
 ### 6.代码优化
 其实各个组件不用划分的太细，直接应用在home。vue里就好了，单独写出来的组件特点就是重复性比较高，不然就是不会单独写出来的
 ### 7.血的教训
 `
  Maximum call stack size exceeded
 `
 可能是因为父子组件的name重复了！！！！

  2019-10-22 12:55    --随笔
  ***
 ### 8. keep-alive
 自动保存各页面,除了detail页面， 因为detail中有个scroll全局事件，每次切换页面，都不会执行destroy等事件，这就造成了无法消除scroll事件，所以只能不保存detail页面了~~
 ### 9.list里有递归渲染组件


    <div v-for="(item,index) of list" :key="index" class="item">
        <div class="item-title">
            <span class="item-title-icon"></span>{{item.title}}
        </div>
        <div v-if="item.children">
            <detail-list list='item.children'></detail-list>
        </div>
    </div>
#### Data:
    list: [
      {
      title:'成人票',
      children:[{
        title:'成人三馆联票',

      },{
        title:'成人五馆联票',

      }]
 通过判断item.children是否存在，是则继续渲染detail—list

 ### 10. 关于API，是在build之后执行的  -todo


      npm run build api = https://192.168.166.156:8444 命令行执行之后整个页面的 api 接口前缀就会改为https://192.168.166.156:8444

### 11.babel-polyfill插件
这将模拟完整的ES2015 +环境，并且打算在应用程序中使用，而不是在库/工具中使用。（使用时，该polyfill会自动加载babel-node）
这意味着可以使用新的内置函数，如Promise
### 12.在手机端拖动字母列表时，页面会跟着拖动，解决方法如下:


### 13.调用百度接口的时候，出现了以下错误
    vue.runtime.esm.js?2b0e:619 [Vue warn]: Error in created hook: "TypeError: Cannot read property 'gc' of undefined"
我去网上搜了一下，发现是因为返回的资源还没有加载完就调用，才会报错，所以应该加个setTimeOut，给它一点缓冲时间