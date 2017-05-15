<template>
	<div class="register">
		<ArrowHeaderbar title="注册"></ArrowHeaderbar>
		<div class="content">
			<form action="">
				<ul>
					<li>
						<i class="iconfont icon-shouji"></i>
						<input type="text" name="" id="" value="" v-model="inputVal.phone" placeholder="请输入您的手机号码"/>
					</li>
					<li>
						<img class="imgicon" src="static/images/yanzheng_icon.jpg" alt="" />
						<input type="text" name="" id="" value="" v-model="inputVal.imgCode" placeholder="请输入验证码"/>
						<span class="verificationImg">
							<img :src="verificationImg[0].img" class="img_code" @click="cutImg"/>
						</span>
					</li>
					<li>
						<img class="imgicon" src="static/images/yanzheng_icon.jpg" alt="" />
						<input type="text" value="" v-model="this.noteCode" placeholder="请输入短信验证码"/>
						<span class="note">
							<input id="registgetcode" type="button" @click="getNoteCode" value="获取验证码" class="num_code" />
						</span>
					</li>
					<li>
						<i class="iconfont icon-shouji"></i>
						<input type="text" name="" id="" value="" placeholder="请输入邀请码或手机号"/>
					</li>
				</ul>
				<p class="tip">
					注：填写好友手机号码邀请码，你和好友同时获得5元红包。 悄悄告诉你，汉货君已经发到手软了~~~
				</p>
				<a href="javascript:;" class="next-btn" @click="judge">下一步</a>
			</form>
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
			verificationImg : [
				{img:"static/images/verificationImg/code0963.png",text:"0963"},
				{img:"static/images/verificationImg/code1557.png",text:"1557"},
				{img:"static/images/verificationImg/code1978.png",text:"1978"},
				{img:"static/images/verificationImg/code3459.png",text:"3459"},
				{img:"static/images/verificationImg/code4340.png",text:"4340"},
				{img:"static/images/verificationImg/code8176.png",text:"8176"},
				{img:"static/images/verificationImg/code8799.png",text:"8799"},
			],
			judgeStatus : [
				{name: "phoneJ", status: false},
				{name: "codeJ", status: false},
				{name: "noteJ", status: false},
				{name: "inviteJ", status: false}
			],
			errTipText : "信息错误",
			errBoxIsShow : false,
			inputVal : {
				phone : "18888888888",
				imgCode : "0963"
			},
			noteCode : ""
		}
	},
	components : {
		ArrowHeaderbar
	},
	methods : {
		cutImg() { //验证图片切换
			this.verificationImg.sort((a,b) => {
				return Math.random()-0.5;
			});
		},
		getNoteCode() { //获取验证码
			this.noteCode = Math.random().toString().substr(2,4);
		},
		judge() { //下一步验证号码验证
			var phoneReg = /^(15|13|18|17|14)\d{9}$/;
			if(!phoneReg.test(this.inputVal.phone)){
				this.errTipText = "手机号码填写有误"
				this.showErr()
			}else if(!(this.inputVal.imgCode == this.verificationImg[0].text)){
				this.errTipText = "验证码有误"
				this.showErr()
			}else if(this.noteCode.trim() == "") {
				this.errTipText = "短信验证不能为空"
				this.showErr()
			}else{
//				var userObj = {
//					user
//				}
				this.$router.push({ path: 'setpassword', query: { account: this.inputVal.phone }})
//				this.$router.push("setpassword");
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
.register {
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
					.imgicon {
						height: 0.3rem;
						vertical-align: middle;
					}
					input {
						height: 0.68rem;
						border: none 0;
						background-color: initial;
						padding-left: 0.1rem;
					}
					.verificationImg {
						position: absolute;
						right: 0;
						img {
							width: 1.62rem;
							height: 0.72rem;
						}
					}
					.note {
						position: absolute;
						right: 0;
						input {
							width: 1.62rem;
							height: 0.72rem;
							background-color: #0575b5;
							border-radius: 0.06rem;
							font-size: 0.23rem;
							color: #fff;
						}
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