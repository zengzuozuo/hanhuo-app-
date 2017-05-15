<template>
	<div class="arrowheaderbar">
		<i class="iconfont icon-zuo" @click="goBack"></i>
		<h3>{{ title }}<span>{{ subtitle }}</span></h3>
	</div>
</template>

<script>
export default {
	props : ["title","subtitle"],
	methods : {
		goBack (){
			this.$router.go(-1);
		}
	}
}
</script>

<style lang="less">
@mCl : #b50509;
.arrowheaderbar {
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	width: 100%;
	height: 0.94rem;
	border-bottom: 0.01rem solid #d6d6d6;
	background-color: #fff;
	.iconfont {
		position: absolute;
		left: 0.3rem;
		color: @mCl;
		font-size: 0.53rem;
		line-height: 0.94rem;
	}
	h3 {
		font-weight: normal;
		color: @mCl;
		font-size: 0.29rem;
		text-align: center;
		line-height: 0.94rem;
		span {
			font-size: 0.16rem;
		}
	}
}
</style>