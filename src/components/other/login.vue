<template>
	<div class="login-page">
		<ArrowHeaderbar title="登录"></ArrowHeaderbar>
		<div class="login-main">
			<div class="login-input">
				<span class="iconfont icon-shouji"></span>
				<input type="text" v-model="inputAccount" placeholder="请输入注册的手机号" class="login-phone" />
			</div>
			<div class="login-input">
				<span class="iconfont icon-mima"></span>
				<input type="password" v-model="inputPassword" placeholder="请输入您的密码" class="login-phone" />
			</div>
			<div class="forget-mima">
				<a href="javascript:;">忘记密码</a>
			</div>
			<div class="login-btn" @click="loginFun">登录</div>
			<div class="login-register">
				<span>没有账号?</span>
				<a href="#/register">立即注册＞</a>
			</div>
			<a class="WeChat" href="javascript:;">
				<i class="iconfont icon-111"></i>
				<span>微信快捷注册登录</span>
			</a>
			<transition name="fade">
				<span class="err-tip" v-show="errBoxIsShow">{{ errTipText }}</span>
			</transition>
		</div>
	</div>
</template>

<script>
	import ArrowHeaderbar from "../common/arrowheaderbar";
	export default {
		data() {
			return {
				inputAccount : "",
				inputPassword : "",
				errTipText : "信息错误",
				errBoxIsShow : false,
			}
		},
		methods : {
			loginFun() {
				if(JSON.parse(localStorage.getItem("userinfo")) === null){
					this.errTipText = "用户名密码错误";
					this.showErr();
					return;
				}
				var userInfo = JSON.parse(localStorage.getItem("userinfo"));
				for(var i=0,len=userInfo.length;i<len;i++){
					if(userInfo[i].account === this.inputAccount){
						if(userInfo[i].password === this.inputPassword) {
							localStorage.setItem("loginstatus",true)
							this.$router.push("my");
						}else {							
							this.errTipText = "用户名密码错误";
							this.showErr();
						}
					}else {
						this.errTipText = "用户名密码错误";
						this.showErr();
					}
				}
			},
			showErr() { //显示错误信息框
				this.errBoxIsShow = true;
				setTimeout(() => {
					this.errBoxIsShow = false;
				},2000)
			}
		},
		components: {
			ArrowHeaderbar
		}
	}
</script>

<style lang="less">
	@mCl : #c42a28;
	.login-main {
		position: relative;
		padding: 2rem 0.3rem 0 0.3rem;
		.login-input {
			width: 100%;
			height: 0.64rem;
			background: #FFFFFF;
			border-bottom: 1px solid #eeeeef;
			box-sizing: border-box;
			display: flex;
			span {
				width: 0.48rem;
				display: inline-block;
				text-align: center;
				font: 0.28rem e("/") 0.62rem "microsoft yahei";
				color: #b2a589;
			}
			.login-phone {
				flex: 1;
				border: 0;
			}
		}
		.forget-mima {
			height: 0.86rem;
			text-align: right;
			padding-right: 0.15rem;
			box-sizing: border-box;
			a {
				font: 0.26rem e("/") 0.86rem "microsoft yahei";
				color: #737373;
			}
		}
		.login-btn {
			height: 0.62rem;
			width: 100%;
			background: #b50509;
			border-radius: 0.04rem;
			font: 0.22rem e("/") 0.62rem "microsoft yahei";
			color: #FFFFFF;
			text-align: center;
		}
		.login-register {
			height: 0.84rem;
			text-align: center;
			font: 0.24rem e("/") 0.84rem "microsoft yahei";
			color: #727272;
			a {
				color: #ff4f4f;
			}
		}
		.login-wx {
			height: 1.09rem;
			display: flex;
			.login-wx-bg {
				flex: 1;
				padding-top: 0.37rem;
				img {
					height: auto;
					width: 100%;
					display: block;
				}
			}
			.login-wx-img {
				width: 0.82rem;
				height: 1.09rem;
				img {
					height: auto;
					width: 100%;
					display: block;
				}
			}
		}
		.WeChat {
			display: block;
			text-align: center;
			margin-top: 0.58rem;
			.iconfont {
				color: #48c50b;
				font-size: 1.04rem;
			}
			span {
				display: block;
				font-size: 0.28rem;
				color: @mCl;
				line-height: 0.5rem;
			}
			
		}
		/*提示框*/
		.err-tip { 
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate(-50%,100%);
			padding: 0.04rem 0.2rem;
			display: block;
			line-height: 0.4rem;
			color: #fff;
			background-color: rgba(0,0,0,.7);
		}
	}
</style>