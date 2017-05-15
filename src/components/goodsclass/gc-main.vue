<template>
	<div class="gc-main" id="gc-main">
		<div class="gc-nav" id="gc-nav">
			<ul class="nav-list">
				<li class="nav-item" v-for="(item,index) in gCNavData.catogory || gCNavData.citydata">
					<a href="javascript:;" :class="{'active' : isActive == index}" @click="navClick(index,item.id || item.cityid)">{{ item.name || item.cityname }}</a>
				</li>
			</ul>
		</div>
		<div class="gc-list-wrap" id="gc-list-wrap">
			<ul class="gc-list">
				<li class="gc-item" v-for="item in gCListData.list">
					<div class="title" id="gc-item-title">
						{{ item.name }}
					</div>
					<div class="item-sub-wrap">
						<a class="item-sub" href="#/goodslist" v-for="subitem in item.list">
							<img :src="subitem.img"/>
							<span>{{ subitem.name }}</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props : ["gCNavData","onceId"],
	data() {
		return {
			gCListData : [],
			isActive : 0
		}
	},
	watch : {
		onceId : function(){
			this.navClick(0,this.onceId);
		}
	},
	updated : function(){
		var gcNavScroll = new iScroll("#gc-nav",{
			preventDefault: false
		});
		var gcListScroll = new iScroll("#gc-list-wrap",{
			preventDefault: false
		});
	},
	mounted : function(){
		this.setElemH("gc-main","gc-header","footer-nav");
	},
	methods : {
		setElemH : function(elemId){
			var screenH = window.screen.availHeight;
			for(var i=1,len=arguments.length;i < len;i++){
				screenH -= document.getElementById(arguments[i]).offsetHeight;
			}
			document.getElementById(elemId).style.height = screenH + "px";
		},
		navClick : function(index,id){
			this.isActive = index;
			var url = "";
			switch (id) {
				case 10 :
					url = "static/json/gc_list.json";
				break;
				case 24 :
					url = "static/json/gc_list24.json";
				break;
				case 25 :
					url = "static/json/gc_list25.json";
				break;
				case 34 :
					url = "static/json/gc_list34.json";
				break;
				case "bsq" :
					url = "static/json/gc_list25.json";
				break;
				default :
					url = "static/json/gc_list.json";
				break;
			}
			this.$http.get(url).then(res => {
				this.gCListData = res.body;
			})
		}
	}
}
</script>

<style lang="less">
.gc-main {
	display: flex;
	padding-top: 1.85rem;
	padding-bottom: 0.82rem;
	.gc-nav {
		position: relative;
		width: 1.6rem;
		height: 100%;
		overflow: hidden;
		.nav-list {
			position: absolute;
			width: 100%;
			.nav-item {
				a {
					display: block;
					line-height: 0.8rem;
					font-size: 0.23rem;
					color: #000;
					text-align: center;
					border-left: 0.05rem solid transparent;
					box-sizing: border-box;
					background-color: #f6f6f6;
					border-bottom: 0.02rem solid #eeeeee;
					&.active {
						background-color: #fff;
						border-left: 0.05rem solid #b8090e;
					}
				}
			}
		}
	}
	.gc-list-wrap {
		flex: 1;
		/*overflow-y: auto;*/
		position: relative;
		overflow: hidden;
		height: 100%;
		.gc-list {
			position: absolute;
			.gc-item {
				.title {
					font-size: 0.19rem;
				}
				.item-sub-wrap {
					display: flex;
					flex-wrap: wrap;
					.item-sub {
						display: block;
						width: 50%;
						text-align: center;
						padding: 0.24rem 0;
						img {
							display: block;
							height: 1.2rem;
							margin: 0 auto;
						}
						span {
							font-size: 0.25rem;
							color: #000;
							line-height: 0.34rem;
						}
					}
				}
			}
		}
	}
}
</style>