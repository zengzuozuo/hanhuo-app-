<template>
	<div class="home-say">
		<ul class="say-list">
			<li class="say-item" v-for="(item,index) in sayData.says" :key="index">
				<div class="top clearfix">
					<img class="usericon" :src="item.usericon"/>
					<div class="userinfo">
						<div class="info-head">
							<span class="nickname">{{ item.nickname }}</span>
							<img class="star" v-for="i in Number(item.shopstar.shopstar1)" src="../../../static/images/star.png"/>
						</div>
						<div class="info-body">
							<span class="shopname">{{ item.shopname }}</span>
							<a href="javascript:;">进店逛逛</a>
						</div>
						<div class="info-footer">
							<span class="submittime">{{ item.submittime }}</span>
						</div>
					</div>
					<a class="attention" href="javascript:;">关注</a>
				</div>
				<p class="content">
					{{ item.content }}
				</p>
				<div class="goodsimgwrap">
					<div class="imgbox" v-for="img in item.img.split(',')" >
						<img :src="img" alt="图片走丢了!" ref="img"/>
					</div>
				</div>
				<div class="operation">
					<a href="javascript:;">
						<i class="iconfont icon-weibiaoti1"></i>
						<span>赞Ta</span>
					</a>
					<a href="javascript:;">
						<i class="iconfont icon-qipao"></i>
						<span>评论</span>
					</a>
					<a href="javascript:;">
						<i class="iconfont icon-zhuanzai-zhongyao"></i>
						<span>转载</span>
					</a>
					<a href="javascript:;">
						<i class="iconfont icon-fenxiang01"></i>
						<span>分享</span>
					</a>
					<a href="javascript:;">
						<i class="iconfont icon-gengduo"></i>
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data : function(){
		return {
			sayData : [2]
		}
	},
	beforeCreate : function(){
		this.$http.get("static/json/home_say.json").then(function(res){
			console.log(res.data);
			this.sayData = res.data;
		})
		
	},
	mounted () {
  	}
	
}
</script>

<style lang="less">
.home-say {
	@linkC : #bc1219;
	.say-list {
		
		color: #000;
		
		.say-item {
			margin-top: 0.18rem;
			background-color: #eceeed;
			padding-top: 0.18rem;
		}
		.top {
			padding-left: 0.18rem;
			.usericon {
				float: left;
				height: 0.72rem;
				width: 0.72rem;
				border-radius: 50%;
			}
			.userinfo {
				float: left;
				padding-left: 0.09rem;
				font-size: 0.22rem;
				.info-head {
					
					.star {
						width: 0.29rem;
						height: 0.27rem;
					}
					
				}
				.info-body {
					a {
						color: @linkC; 
						
					}
				}
				.submittime {
					font-size: 0.19rem;
				}
			}
		}
		.content {
			padding:0.13rem 0.18rem;
		}
		.attention {
			float: right;
			width: 1.07rem;
			height: 0.43rem;
			border-radius: 0.06rem;
			text-align: center;
			line-height: 0.43rem;
			border: 0.03rem solid @linkC;
			box-sizing: border-box;
			color: @linkC;
			margin-top: 0.38rem;
			margin-right: 0.55rem;
		}
		.goodsimgwrap {
			display: flex;
			flex-wrap: nowrap;
			width: 100%;
			.imgbox {
				flex: 1;
				padding: 0.02rem;
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			
			
		}
		.operation {
			display: flex;
			line-height: 0.6rem;
			a {
				flex: 1;
				text-align: center;
				color: #000;
				font-size: 0.22rem;
				.iconfont {
					font-size: 0.34rem;
				}
			}
		}
	}
}
</style>