<template>
	<div class="gc-header" id="gc-header">
		<div class="headerbar">
			<div class="options clearfix">
				<a class="opt-goods" :class="{'active' : isActive == 'goods'}" href="javascript:;" @click="getGCNavData('goods',10)">商品分类</a>
				<a class="opt-territory" :class="{'active' : isActive == 'territory'}" href="javascript:;" @click="getGCNavData('territory','bsq')">地域分类</a>
			</div>
		</div>
		<div class="headerbtm">
			<a class="searchbox" href="javascript:;">
				<i class="iconfont icon-fangdajing"></i>
				<span>寻找店类好货</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			gCNavData : [],
			isActive : ""
		}
	},
	mounted() {
		this.getGCNavData("goods",10);
	},
	methods : {
		getGCNavData : function(type,id){
			var url = "";
			switch (type) {
				case "goods":
					url = "static/json/gc_nav.json";
					this.isActive = "goods";
				break;
				case "territory":
					url = "static/json/gc_nav_territory.json";
					this.isActive = "territory";
				break;
				default :
					url = "static/json/gc_nav.json";
					this.isActive = "goods";
				break;
			}
			this.$http.get(url).then(function(res){
				this.gCNavData = res.data;
				this.$emit("ee",res.data,id);
			})
		},
	}
}
</script>

<style lang="less">
.gc-header {
	position: fixed;
	z-index: 9;
	width: 100%;
	left: 0;
	top: 0;
	background-color: #fff;
	.headerbar {
		height: 0.8rem;
		background-color: #f6f6f6;
		overflow: hidden;
		.options {
			position: relative;
			width: 3.12rem;
			margin: 0.16rem auto;
			border: 0.02rem solid #666666;
			border-radius: 0.1rem;
			overflow: hidden;
			a {
				float: left;
				width: 1.56rem;
				box-sizing: border-box;
				text-align: center;
				line-height: 0.46rem;
				font-size: 0.25rem;
				color: #666;
				
				&.active {
					background-color: #666;
					color: #fff;
				}
			}
		}
	}
	.headerbtm {
		border-top: 0.02rem solid #ececec;
		border-bottom: 0.02rem solid #ececec;
		padding: 0.18rem 0;
		.searchbox {
			display: block;
			margin: 0 auto;
			width: 6rem;
			background-color: #ececec;
			border-radius: 0.06rem;
			font-size: 0.23rem;
			color: #000;
			text-align: center;
			line-height: 0.6rem;
			.iconfont {
				font-size: 0.4rem;
			}
		}
	}
}	
</style>