//10
import VueRouter from "vue-router";
//11引入组件
import homeContainer from "../components/tabbar/HomeContainer.vue";
import searchContainer from "../components/tabbar/SearchContainer.vue";
import shopcarContainer from "../components/tabbar/ShopcarContainer.vue";
import vipContainer from "../components/tabbar/VipContainer.vue";
import newslistContainer from "../components/news/newlistContainer.vue";
import newsinfoContainer from "../components/news/newinfoContainer.vue";
//12创建路由实例

var router=new VueRouter({
	//配置路由规则
	routes:[
		{path:"/",redirect:"/home"},//重定向到首页
		{path:"/home",component:homeContainer},
		{path:"/home/newslist",component:newslistContainer},
		{path:"/home/newsinfo/:id",component:newsinfoContainer},
		{path:"/search",component:searchContainer},
		{path:"/shopcar",component:shopcarContainer},
		{path:"/vip",component:vipContainer}
	],
	linkActiveClass:"mui-active"
})

//13.将路由对象导出
export default router;



