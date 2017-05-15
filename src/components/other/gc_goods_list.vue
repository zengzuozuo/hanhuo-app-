<template>
	<div class="gc-goods-list">
		<ArrowHeaderbar title="类目"></ArrowHeaderbar>
		<ul class="goods-list">
			<li class="goods-item" v-for="(item,index) in goodsList">
				<a href="#/goodsdetails">
					<img class="goodslogo" :src="item.goodslogo" alt="图片走丢了"/>
					<div class="goodsinfo">
						<p class="goodsname">{{ item.goodsname }}</p>
						<div class="goodsprice">
							<span class="now_price">¥{{ item.now_price }}</span>
							<span class="post_money_price">{{ item.post_money_price }}</span>
						</div>
						<div class="buyinfo">
							<span class="salescount">{{ item.salescount }}人付款</span>
							<span class="sourcearea">{{ item.sourcearea }}</span>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import ArrowHeaderbar from "../common/arrowheaderbar";
export default {
	data() {
		return {
			goodsList : []
		}
	},
	components : {
		ArrowHeaderbar
	},
	mounted : function(){
		this.getGoodsList();
	},
	methods : {
		getGoodsList() {
			this.$http.get("static/json/gc_goods_list.json").then(res => {
				console.log(res.data);
				this.goodsList = res.data.list;
			})
		}
	}
}
</script>

<style lang="less">
.gc-goods-list {
	background-color: #f6f6f6;
	padding-top: 0.95rem;
	.goods-list {
		.goods-item {
			background-color: #fff;
			padding-top: 0.17rem;
			margin-bottom: 0.19rem;
			a {
				display: flex;
				color: #000000;
				.goodslogo {
					float: left;
					width: 1.8rem;
					height: 1.8rem;
				}
				.goodsinfo {
					flex: 1;
					float: left;
					.goodsname {
						font-size: 0.25rem;
					}
					.goodsprice {
						line-height: 0.32rem;
						.now_price {
							font-size: 0.18rem;
							color: #bd1b21;
						}
						.post_money_price {
							font-size: 0.22rem;
						}
					}
					.buyinfo {
						font-size: 0.22rem;
					}
				}
			}
		}
	}
}
</style>