<template>
	<div class="container">
		<div class="my-header">
			<Headerbar :title="'我'">
				<a href="#/settings" v-show="loginstatus">设置</a>
			</Headerbar>
			<div class="user-info no-login" v-show="!loginstatus">
				<div class="user-logo">
					<img src="../../../static/images/mypageimg1.jpg" />
					<span>未登录</span>
				</div>
				<div class="entrance clearfix">
					<a class="register" href="#/register">注册</a>
					<a class="login" href="#/login">登录</a>
				</div>
			</div>
			<div class="logined" v-show="loginstatus">
				<div class="user-logo clearfix">
					<img src="static/images/userlogo.png" alt="" />
					<span>{{ account }}</span>
				</div>
				<ul class="bbm17">
					<li class="line">
						<a href="javascript:;">余额0.00元</a>
						<a href="javascript:;">充值</a>
					</li>
					<li class="line">
						<a href="javascript:;">我的优惠0</a>
						<a href="javascript:;">拿红包</a>
					</li>
					<li>
						<a href="javascript:;">积分0元</a>
						<a href="javascript:;">积分规则</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="my-action-nav" v-show="loginstatus">
			<a href="javascript:;">
				<i class="iconfont icon-pay"></i>
				<span>待付款</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-fahuo"></i>
				<span>待发货</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-daishouhuo"></i>
				<span>待收货</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-xiaolian"></i>
				<span>待评价</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-tuikuan"></i>
				<span>退款</span>
			</a>
		</div>
		<ul class="user-operation" v-show="loginstatus">
			<li class="bbm17"><span>我的团</span><i class="iconfont icon-jiantou"></i></li>
			<li><span>全部订单</span><i class="iconfont icon-jiantou"></i></li>
			<li class="bbm17"><span>我的关注</span><i class="iconfont icon-jiantou"></i></li>
			<li><span>做达人，享特权</span><i class="iconfont icon-jiantou"></i></li>
			<li><span>签到</span><i class="iconfont icon-jiantou"></i></li>
			<li class="bbm17"><span>电信用户积分</span><i class="iconfont icon-jiantou"></i></li>
		</ul>
		<ul class="user-operation">
			<li><span>帮助与反馈</span><i class="iconfont icon-jiantou"></i></li>
			<li><span>分享</span><i class="iconfont icon-jiantou"></i></li>
		</ul>
		<vFooter :is-active="5"></vFooter>
	</div>
</template>

<script>
import Headerbar from "../common/headerbar.vue";
export default {
	data() {
		return {
			account : "",
			loginstatus : JSON.parse(localStorage.getItem("loginstatus"))
		}
	},
	mounted() {
		if(JSON.parse(localStorage.getItem("userinfo"))){
			this.account = JSON.parse(localStorage.getItem("userinfo"))[0].account
		}
	},
	components : {
		Headerbar
	}
}
</script>

<style lang="less">
@bgC : #f6f6f6;
@mCl : #c0262c;
.bbm17 {
	border-bottom: 0.17rem solid @bgC;
}
.my-header {
    .my-headerbar {
        position: relative;
        font-size: 0.3rem;
        color: #b70e13;
        text-align: center;
        line-height: 0.8rem;
        font-weight: normal;
        border-bottom: 0.01rem solid #ebebeb;
        a {
            position: absolute;
            top: 0;
            right: 0;
            line-height: 0.8rem;
            font-size: 0.26rem;
            color: #b70e13;
            padding: 0 0.3rem;
            
        }
    }
    /*-----未登录-----*/
    .user-info {
        overflow: hidden;
        background-color: #f6f6f6;
        .user-logo {
            text-align: center;
            img {
                display: block;
                margin: 0.21rem auto;
            }
            span {
                display: block;
                font-size: 0.22rem;
                color: #000;
            }
        }
        .entrance {
            line-height: 0.9rem;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
            a{
                width: 1.4rem;
                height: 0.48rem;
                background-color: #fff;
                border-radius: 0.24rem;
                text-align: center;
                line-height: 0.48rem;
                color: #000;
            }
            .register {
                float: left;
                margin-left: 0.92rem;
            }
            .login {
                float: right;
                margin-right: 0.92rem;
            }
        }
    }
    /*----已登录-----*/
   .logined {
   		background-color: @bgC;
   		.user-logo {
   			overflow: hidden;
   			text-align: center;
   			img {
   				display: block;
   				height: 1.42rem;
   				margin: 0.17rem auto;
   			}
   			span {
   				line-height: 0.65rem;
   			}
   		}
   		ul {
   			display: flex;
   			background-color: #fff;
   			padding: 0.25rem 0;
   			li {
   				position: relative;
   				flex: 1;
   				text-align: center;
   				&.line {
   					
	   				&:after {
	   					position: absolute;
	   					right: -0.01rem;
	   					top: 0;
	   					content: "";
	   					width: 0.02rem;
	   					height: 100%;
	   					background-color: #dadada;
	   				}
   				}
   				a {
   					display: block;
   					color: #000000;
   					&:nth-child(2){
   						color: @mCl;
   					}
   				}
   			}
   		}
   }
}
.my-action-nav {
	display: flex;
	border-bottom: 1px solid @bgC;
	a {
		flex: 1;
		display: block;
		text-align: center;
		color: #000;
		padding: 0.15rem 0;
		.iconfont {
			font-size: 0.35rem;
			color: #6c6c6c;
		}
		span {
			display: block;
			
		}
	}
}

.user-operation {
    li {
        line-height: 0.9rem;
        span {
            font-size: 0.32rem;
            border-left: 0.05rem solid #b70a10;
            margin-left: 0.17rem;
            padding-left: 0.13rem;
        }
        .iconfont {
            float: right;
            margin-right: 0.3rem;
            font-size: 0.4rem;
        }
    }
}
</style>