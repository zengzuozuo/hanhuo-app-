<template>
	<div class="container">
		<Headerbar :title="'消息'"></Headerbar>
		<ul class="top-nav">
			<li class="nav-item" v-for="(item,index) in topNavList">
				<a href="javascript:;">
					<img :src="item.img"/>
					<span>{{ item.text }}</span>
				</a>
			</li>
		</ul>
		<vFooter :is-active="2"></vFooter>
	</div>
</template>

<script>
import Headerbar from "../common/headerbar.vue";
export default {
	data : function(){
		return {
			topNavList : [
				{img : "static/images/message_01.jpg", text : "发现"},
				{img : "static/images/message_02.jpg", text : "吃货圈"},
				{img : "static/images/message_03.jpg", text : "话题"},
				{img : "static/images/message_04.jpg", text : "我的动态"}
			]
		}
	},
	components : {
		Headerbar
	}
}
</script>

<style lang="less">
.top-nav {
	display: flex;
	border-bottom: 0.17rem solid #f6f6f6;
	padding-top: 0.81rem;
	.nav-item {
		flex: 1;
		a {
			
			display: block;
			text-align: center;
			img {
				display: block;
				margin: 0.14rem auto 0;
				width: 0.8rem;
				height: 0.8rem;
			}
			span {
				display: inline-block;
				line-height: 0.4rem;
				padding-bottom: 0.05rem;
				font-size: 0.18rem;
				color: #000;
			}
		}
	}
}
</style>