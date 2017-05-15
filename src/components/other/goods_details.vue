<template>
	<div class="goods-details">
		<ArrowHeaderbar title="详情"></ArrowHeaderbar>
		<div class="goods-info">
			<Mainswiper classname="details-swiper" :imgdata="bannerImg"></Mainswiper>
			<div class="content-text" v-if="detailsData.goodsdata">
				
				<p class="goodsname">{{ detailsData.goodsdata.goodsname }}</p>
				<div class="buyinfo">
					<div>
						<span class="nowprice">¥{{ detailsData.goodsdata.nowprice }}</span>
						<span class="extdes extdes1">{{ detailsData.goodsdata.extdes }}</span>
						<span class="extdes extdes2">{{ detailsData.goodsdata.extdes2 }}</span>						
					</div>
					<div>
						<span class="oldprice">价格：¥<del>{{ detailsData.goodsdata.oldprice }}</del></span>
					</div>
					<div>
						<span>{{ detailsData.goodsdata.extdes2 }}</span>
						<span class="salescount">销售量{{ detailsData.goodsdata.salescount }}笔</span>
						<span>{{ detailsData.shopdata.address }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="goods-img-show" v-if="detailsData.goodsdata">
			<img v-for="pic in detailsData.goodsdata.parameters" :src="pic"/>
		</div>
		<div class="goods-operation">
			<a href="javascript:;" class="small-btn">
				<i class="iconfont icon-bf-icon-message"></i>
				<span>客服</span>
			</a>
			<a href="javascript:;" class="small-btn">
				<i class="iconfont icon-shoucang"></i>
				<span>关注</span>
			</a>
			<a href="javascript:;" class="large-btn addcart" @click="addCartFn">加入购物车</a>
			<a href="javascript:;" class="large-btn now-buy">立即购买</a>
		</div>
	</div>
</template>

<script>
import ArrowHeaderbar from "../common/arrowheaderbar";
import Mainswiper from "../common/main_swiper.vue";
export default {
	data() {
		return {
			bannerImg : [],
			detailsData : []
		}
	},
	components : {
		ArrowHeaderbar,
		Mainswiper
	},
	mounted() {
		this.getGoodsDetails();
	},
	methods : {
		getGoodsDetails() {
			this.$http.get("static/json/goods_details.json").then(res => {
				console.log(res.data);
				this.detailsData = res.data;
				this.bannerImg = res.data.goodsdata.images;
			})
		},
		addCartFn() {
			console.log(this.$data)
		}
	}
}
</script>

<style lang="less">
@mCl : #99353f;
.goods-details {
	padding-top: 0.95rem;
	.goods-info {
		.details-swiper {
			img {
				display: block;
				height: 5.5rem;
				margin: 0 auto;
			}
			.swiper-pagination-bullet-active {
				background-color: #bd1b21;
			}
		}
		.content-text {
			color: #000000;
			padding: 0.2rem;
			.goodsname {
				
			}
			.buyinfo {
				span {
					padding: 0 0.1rem;
				}
				.extdes {
					display: inline-block;
					padding: 0 0.1rem;
					color: #fff;
					border-radius: 0.04rem;
					font: 0.18rem/0.26rem "微软雅黑";
					&.extdes1 {
						background-color: #ff8e1b;
					}
					&.extdes2 {
						background-color: #5c2695;
					}
				}
				.nowprice {
					color: @mCl;
				}
				.oldprice {
					color: #757575;
				}
			}
		}
	}
	.goods-img-show {
		img {
			width: 100%;
		}
	}
	.goods-operation {
		position: fixed;
		display: flex;
		width: 100%;
		left: 0;
		bottom: 0;
		height: 0.88rem;
		a {
			display: inline-block;
			height: 0.88rem;
			text-align: center;
			color: #fff;
		}
		.small-btn {
			background-color: #939393;
			width: 0.88rem;
			font-size: 0.18rem;
			.iconfont {
				display: inline-block;
				font-size: 0.38rem;
				padding-top: 0.1rem;
			}
			span {
				display: block;
			}
			&:nth-child(1) {
				border-right: 1px solid #fff;
			}
		}
		.large-btn {
			flex: 1;
			line-height: 0.88rem;
			font-size: 0.22rem;
			&.addcart {
				background-color: #f8bd19;
			}
			&.now-buy {
				background-color: @mCl;
			}
		}
	}
}
</style>