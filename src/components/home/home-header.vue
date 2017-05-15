<template>
	<div class="home-header">
		<div class="home-headerbar">
			<div class="icon-box" @click="goPage">
				<i class="iconfont icon-saoyisao"></i>
				<span>扫一扫</span>
			</div>
			<div class="searchbox">
				<i class="iconfont icon-fangdajing"></i>
				<input type="text" placeholder="上全球保税,购全球正品" />
			</div>
			<div class="icon-box">
				<i class="iconfont icon-xiangji"></i>
				<span>发&nbsp;&nbsp;&nbsp;帖</span>
			</div>
			<div class="icon-box">
				<i class="iconfont icon-kefu"></i>
				<span>联系我</span>
			</div>
		</div>
		<Mainswiper classname="home-swiper" :imgdata="homeData.banners"></Mainswiper>
		<!--<div class="swiper-container">
			<div class="swiper-wrapper" v-if="homeData">
				<div class="swiper-slide" v-for="imgUrl in homeData.banners">
					<a href="javascript:;">
						<img :src="imgUrl.img" alt="" />
					</a>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>-->
	</div>
</template>

<script>
import Mainswiper from "../common/main_swiper.vue";
export default {
	props : ["homeData"],
//	mounted : function(){
//		new Swiper(".swiper-container", {
//			autoplay: 3000,
//			loop: true,
//			pagination: ".swiper-pagination",
//			observer: true,
//			autoplayDisableOnInteraction : false
//		});
//	},
	components : {
		Mainswiper
	},
	methods : {
		goPage() {
			this.$router.push("barcode");
		}
	}
}
</script>

<style lang="less">
.home-header {
	position: relative;
	height: 3.2rem;
	.home-headerbar {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		height: 0.92rem;
		width: 100%;
		box-sizing: border-box;
		padding: 0.16rem 0.1rem;
		>div {
			float: left;
		}
		.searchbox {
			position: relative;
			width: 4rem;
			height: 0.62rem;
			border-radius: 0.08rem;
			overflow: hidden;
			.iconfont {
				position: absolute;
				left: 0.09rem;
				top: 0.09rem;
				font-size: 0.4rem;
				color: #828286;
			}
			input {
				width: 100%;
				height: 100%;
				border: none;
				padding: 0 0 0 0.56rem;
				box-sizing: border-box;
				font-size: 0.2rem;
				background-color: rgba(255, 255, 255, .6);
			}
		}
		.icon-box {
			width: 0.7rem;
			text-align: center;
			margin-top: -0.1rem;
			.iconfont {
				font-size: 0.4rem;
				color: #fff;
			}
			span {
				display: block;
				font-size: 0.15rem;
				color: #fff;
			}
		}
	}
	.home-swiper {
		height: 100%;
		.swiper-wrapper {
			height: 100%;
			.swiper-slide {
				height: 100%;
				img {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
}
</style>