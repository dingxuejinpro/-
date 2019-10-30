<template>
	<div class="app-contaier">
		<mt-header fixed title="战新：vue项目实战"></mt-header>
		<!--<div>内容</div>-->
		<transition>
			<router-view></router-view>
		</transition>
		<router-link  to="/home/newslist">
			</router-link>
		<!--<div>底部</div>通过mui实现-->
		
		<!--//16.将router挂载到vm上，要修改tabber的标签，将a改为router-link,将href改为to-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			
			
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>

<style scoped>
	.app-contaier{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	}
	.v-enter,.v-leave-to{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.5s ease;
	}
</style>