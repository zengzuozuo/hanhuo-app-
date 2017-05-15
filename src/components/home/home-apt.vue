<template>
	<div class="home-apt">
		<ul class="groupbuy">
			<li class="clearfix" v-for="item in groupbuy">
				<a href="javascript:;">
					<img :src="item.largelogo"/>
					<h3>{{ item.goodsname }}</h3>
					<p>{{ item.introduction }}</p>
				</a>
				<div class="discount">
					<div class="sub">
						<span class="goodsdiscount">{{ item.goodsdisicount }}</span>
						<span class="people">{{ item.peoplenum }}人团</span>
					</div>
				</div>
				<div class="kaituan-wrap">
					<div class="ct-left">
						<span>{{ item.peoplenum }}人团</span>
						<span>{{ item.groupbuy_price }}</span>
					</div>
					<div class="ct-right">
						<span>去开团</span>
						<i class="iconfont icon-jiantou"></i>
					</div>
					<img src="../../../static/images/kaituan.png"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			groupbuy : []
		}
	},
	created : function(){
		this.getHomeData()
	},
	methods : {
		getHomeData : function(){
			this.$http.get("./static/json/home_data.json").then((res) => {
				this.groupbuy = res.data.groupbuy;
			})
		}
	}
}
</script>

<style lang="less">
.home-apt {
    .groupbuy {
        padding: 0.08rem;
        background-color: #eceeed;
        li {
            position: relative;
            padding: 0.08rem;
            margin-top: 0.14rem;
            background-color: #fff;
            a {
                display: block;
                img {
                    width: 100%;
                }
                h3 {
                    padding: 0.16rem;
                    color: #000;
                    font-size: 0.24rem;
                    font-weight: normal;
                }
                p {
                    padding: 0 0.16rem;
                    font-size: 0.21rem;
                    color: #808080;
                }
            }
            .discount {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                width: 0.87rem;
                height: 0.87rem;
                border-radius: 50%;
                border: 0.04rem solid #f66400;
                background-color: #fff;
                .sub {
                    width: 0.77rem;
                    height: 0.77rem;
                    border-radius: 50%;
                    border: 0.04rem solid #fab55f;
                    margin: 0.02rem auto;
                    text-align: center;
                    .goodsdiscount {
                        display: block;
                        font-size: 0.15rem;
                        color: #f66400;
                        padding-top: 0.12rem;
                        line-height: 0.22rem;
                    }
                    .people {
                        font-size: 0.15rem;
                    }
                }
            }
            .kaituan-wrap {
            	position: relative;
            	float: left;
            	height: 0.54rem;
            	color: #fff;
            	margin: 0.2rem 0;
            	.ct-left {
            		float: left;
            		width: 2.4rem;
            		line-height: 0.54rem;
            		background-color: #000000;
            		font-size: 0.16rem;
            		span {
            			&:nth-child(1){
            				float: left;
            				padding-left: 0.7rem;
            				font-size: 0.16rem;
            			}
            			&:nth-child(2){
            				float: right;
            				padding-right: 0.23rem;
            				font-size: 0.18rem;
            			}
            		}
            	}
            	.ct-right {
            		float: right;
            		width: 1.4rem;
            		line-height: 0.54rem;
            		background-color: #de2027;
            		border-radius: 0 0.27rem 0.27rem 0;
            		span {
            			float: left;
            			padding-left: 0.14rem;
            			font-size: 0.16rem;
            		}
            		.iconfont {
            			float: right;
        				font-size: 0.16rem;
        				padding-right: 0.23rem;
        			}
            	}
            	img {
            		position: absolute;
            		left: -0.16rem;
            		top: -0.1rem;
            		height: 0.74rem;
            		width: 0.74rem;
            	}
            }
        }
    }
}
</style>