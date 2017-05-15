<template>
	<div class="container">
		<Headerbar :title="'购物车'" :button="'编辑全部'"></Headerbar>
		<div class="goods-content-list">
			<div class="goods-details" v-for="i in 10">
				<div class="input-check">
					<div class="check-box" :class="{'active' : checked}">
						<p class="iconfont icon-gou1"></p>
					</div>
				</div>
				<div class="details-info">
					<div class="details-info-img">
						<img src="http://images.hanhuo.me/Images/2015/12/21/goods1450641213_small.jpg" alt="图片" title="tupian" />
					</div>
					<div class="details-info-miaoshu">
						<p class="miaoshu-title">法国 斐丽丝松露形代可可脂巧克力(巧克力制品）(500g金色璀璨型)</p>
						<div class="maioshu-price">
							<span>¥39.00</span>
							<a href="javascript:;" class="bianji">
								<span class="iconfont icon-bianji5"></span>
							</a>
							<span class="shuliang">×1</span>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="buybar">
			<div class="check-all" @click="checked = !checked">
				<i class="iconfont icon-check-off" :class="{'icon-check-on' : checked}"></i>
				<span>全选</span>
			</div>
			<a class="botton" href="javascript:;">结算</a>
		</div>
		<vFooter :is-active="3"></vFooter>
	</div>
</template>

<script>
	import Headerbar from "../common/headerbar.vue";
	export default {
		data: function() {
			return {
				checked: false
			}
		},
		components: {
			Headerbar
		}
	}
</script>

<style lang="less">
	.goods-content-list {
		padding: 0.81rem 0 0.96rem; 
		.goods-details {
			width: 100%;
			height: 1.55rem;
			padding: 0 0.3rem 0 0.2rem;
			border-bottom: 1px solid #f6f6f6;
			box-sizing: border-box;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			.input-check {
				width: 0.5rem;
				height: 1.55rem;
				float: left;
				padding-top: 0.54rem;
				box-sizing: border-box;
				.check-box {
					width: 0.3rem;
					height: 0.3rem;
					border-radius: 0.02rem;
					border: 1px solid #d3d3d3;
					.iconfont {
						text-align: center;
						font: 0.24rem e("/") 0.3rem "microsoft yahei";
						color: #FFFFFF;
					}
				}
				.check-box.active {
					width: 0.3rem;
					height: 0.3rem;
					border-radius: 0.02rem;
					background-color: #c0272d;
					.iconfont {
						text-align: center;
						font: 0.24rem e("/") 0.3rem "microsoft yahei";
						color: #FFFFFF;
					}
				}
			}
			.details-info {
				width: 5.4rem;
				height: 1.55rem;
				float: left;
				&:after {
					content: "";
					display: block;
					clear: both;
				}
				.details-info-img {
					width: 1.25rem;
					height: 1.55rem;
					float: left;
					img {
						width: 100%;
						height: auto;
						display: block;
					}
				}
				.details-info-miaoshu {
					width: 4.06rem;
					height: 1.55rem;
					float: left;
					.miaoshu-title {
						height: 0.82rem;
						font: 0.2rem e("/") 0.36rem "microsoft yahei";
						overflow: hidden;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					    word-break: break-all;
					}
					.maioshu-price {
						height: 0.56rem;
						font: 0.16rem e("/") 0.56rem "microsoft yahei";
						&:after {
							content: "";
							display: block;
							clear: both;
						}
						.iconfont {
							font-size: 0.13rem;
						}
						.shuliang {
							float: right;
							padding-right: 0.15rem;
						}
						.bianji {
							font: 0.32rem e("/") 0.56rem "microsoft yahei";
							float: right;
							color: #ed7b7b;
						}
					}
				}
			}
		}
	}
	
	.buybar {
		position: fixed;
		left: 0;
		bottom: 0.84rem;
		height: 0.94rem;
		width: 100%;
		background-color: #f6f6f6;
		border-top: 0.02rem solid #ebebeb;
		.check-all {
			float: left;
			padding-left: 0.06rem;
			.iconfont {
				display: inline-block;
				font-size: 0.45rem;
				line-height: 0.94rem;
				padding: 0 0.17rem;
				&.icon-check-on {
					color: #c0272d;
				}
			}
			span {
				font-size: 0.22rem;
				vertical-align: 0.08rem;
			}
		}
		.botton {
			float: right;
			width: 1.35rem;
			height: 0.86rem;
			background-color: #c0272d;
			text-align: center;
			line-height: 0.86rem;
			font-size: 0.34rem;
			color: #fff;
			border-radius: 0.08rem;
			margin: 0.04rem 0.18rem 0 0;
		}
	}
</style>