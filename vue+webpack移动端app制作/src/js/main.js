//项目入口文件
//1.引入vue
import Vue from "vue";
//2.加载app组件
import app from "./app.vue";
//5.引入mint_ui
//16加载轮播图
import {Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);
//17
import VueResource from "vue-resource";
Vue.use(VueResource);
//18
Vue.http.options.root="http://www.liulongbin.top:3005";
//6.引入style.css
import "mint-ui/lib/style.css";
//7引入mui.min.css
import "../css/mui.min.css";
//8引入icons-extra.css
import "../css/icons-extra.css";
//9.安装路由

import VueRouter from "vue-router";
Vue.use(VueRouter);
//14讲路由router.js映入
import router from "./router.js";
//19.创建时间过滤器
//20.下载时间插件：npm i moment -S
import moment from "moment";
Vue.filter("dataFormat",function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dateStr).format(pattern);
})
//3.创建vue实例，加载app组件
var vn=new Vue({
	el:"#app",
	render:c=>c(app),
	router//15.将路由对象挂载
})

//4.执行npm run dev