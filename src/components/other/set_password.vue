<template>
	<div class="set-password">
		<ArrowHeaderbar title="设置密码"></ArrowHeaderbar>
		<div class="content">
			<form action="">
				<ul>
					<li>
						<i class="iconfont icon-mima"></i>
						<input type="password" name="" id="" v-model="passwordone" value="" placeholder="请设置密码"/>
					</li>
					<li>
						<i class="iconfont icon-mima"></i>
						<input type="password" name="" id="" v-model="passwordtwo" value="" placeholder="再次输入密码"/>
					</li>
				</ul>
				<a href="javascript:;" class="next-btn" @click="regSuccess">完成</a>
			</form>
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
			errTipText : "信息错误",
			errBoxIsShow : false,
			passwordone : "",
			passwordtwo : "",
			userInfoArr : []
		}
	},
	components : {
		ArrowHeaderbar
	},
	methods : {
		regSuccess() {
			if(this.passwordone.trim() == "") {
				this.errTipText = "密码不能为空";
				this.showErr();
			}else if(this.passwordone.trim().length < 6){
				this.errTipText = "密码位数小于6";
				this.showErr();
			}else if(!(this.passwordone == this.passwordtwo)){
				this.errTipText = "两次密码输入不一致";
				this.showErr();
			}else {
				var userObj = this.$route.query;
				userObj.password = this.passwordtwo;
				this.userInfoArr.push(userObj);
				localStorage.setItem("userinfo",JSON.stringify(this.userInfoArr));
				console.log(localStorage);
				console.log("注册成功！");
				this.$router.push("login");
//				localStorage.clear();
			}
		},
		showErr() { //显示错误信息框
			this.errBoxIsShow = true;
			setTimeout(() => {
				this.errBoxIsShow = false;
			},2000)
		}
	}
}
</script>

<style lang="less">
@mCl : #c42a28;
.set-password {
	background-color: #f5f5f5;
	height: 100%;
	.content {
		position: relative;
		padding: 1rem 0.5rem 0.5rem;
		form {
			ul {
				li {
					position: relative;
					padding-top: 0.26rem;
					border-bottom: 0.02rem solid #d3d3d3;
					line-height: 0.68rem;
					.iconfont {
						color: #b2a589;
						font-size: 0.3rem;
					}
					input {
						height: 0.68rem;
						border: none 0;
						background-color: initial;
						padding-left: 0.1rem;
						width: 80%;
					}
				}
			}
			.tip {
				color: @mCl;
				font-size: 0.17rem;
				padding: 0.13rem 0;
			}
			.next-btn {
				display: block;
				width: 100%;
				background-color: @mCl;
				border: none 0;
				border-radius: 0.08rem;
				font-size: 0.32rem;
				color: #fff;
				text-align: center;
				font-weight: bold;
				line-height: 0.7rem;
				margin-top: 0.16rem;
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>