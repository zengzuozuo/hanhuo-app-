<template>
	<div class="settings">
		<ArrowHeaderbar title="设置"></ArrowHeaderbar>
		<div class="content">
			
			<div class="login-btn" @click="outlogin">退出登录</div>
		</div>
	</div>
</template>

<script>
import ArrowHeaderbar from "../common/arrowheaderbar";
export default {
	components : {
		ArrowHeaderbar
	},
	methods : {
		outlogin(){
			localStorage.setItem("loginstatus",false)
			this.$router.push("my");
		}
	}
}
</script>

<style lang="less">
.settings {
	.content {
		padding-top: 2rem;
		.login-btn {
			height: 0.62rem;
			width: 80%;
			margin: 0 auto;
			background: #b50509;
			border-radius: 0.04rem;
			font: 0.22rem e("/") 0.62rem "microsoft yahei";
			color: #FFFFFF;
			text-align: center;
		}
	}
}
</style>