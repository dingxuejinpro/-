<template>
	<div>
		<h1 class="title">{{newsinfo.title}}</h1>
		<p class="subtitle">
			<span>发布时间：{{newsinfo.add_time|dataFormat}}</span>
			<span>点击：{{newsinfo.click}}次</span>
		</p>
		<hr />
		<div class="content" v-html="newsinfo.content">
			<div>
				<s-box></domment-box>
		</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	import comment from "mint-ui";
	export default{
		data(){
			return{
				id:this.$route.params.id,
				newsinfo:{}
			}
		},
		created(){
			this.getNewsInfo();
		},
		methods:{
			getNewsInfo(){
				this.$http.get("api/getnew/"+this.id).then(result=>{
					if(result.body.status==0){
					this.newsinfo=result.body.message[0];
					}else{
						Toast("新闻列表加载失败")
					}
				})
			}
		},
	components:{
		"comment box"
	}
</script>

<style lang="less" scoped>
	.title{
		font-size: 16px;
		text-align: center;
		margin: 15px 0;
		color: red;
	}
	.subtitle{
		font-size: 13px;
		color: skyblue;
		display: flex;
		justify-content: space-between;
	}
</style>