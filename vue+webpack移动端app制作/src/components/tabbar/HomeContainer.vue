<template>
	<div>
		<mt-swipe :auto="4000">
			<!--vuefor循环-->
			<mt-swipe-item v-for="item in lunbotuList" :key="item.id">
				<img :src="item.img" />
			</mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
					<span class="mui-icon"><img src="../../img/menu1.png"/></span>
					<div class="mui-media-body">Home</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon"><img src="../../img/menu2.png"/><span class="mui-badge">5</span></span>
					<div class="mui-media-body">Email</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon"><img src="../../img/menu3.png"/></span>
					<div class="mui-media-body">Chat</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon"><img src="../../img/menu4.png"/></span>
					<div class="mui-media-body">location</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon"><img src="../../img/menu5.png"/></span>
					<div class="mui-media-body">Search</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon"><img src="../../img/menu6.png"/></span>
					<div class="mui-media-body">Phone</div>
				</a>
			</li>
		</ul>

	</div>
</template>

<script>
	//19
	import { Toast } from "mint-ui";
	export default {
		data() {
			return {
				lunbotuList: []
			}
		},
		created() {
			this.getLunbotu(); //生命周期方法
		},
		methods: {
			getLunbotu() {
				this.$http.get("api/getlunbo").then(result => {
					if(result.body.status == 0) { //成功
						this.lunbotuList = result.body.message;
					} else { //失败
						Toast("轮播图加载失败");
					}
				})
			}
		}
	}
</script>

<style scoped>
	.mint-swipe {
		height: 200px;
	}
	
	img {
		width: 100%;
		height: 100%;
	}
</style>