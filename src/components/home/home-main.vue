<template>
	<div class="home-main">
		<div class="threetitle">
			<router-link to="/apt" >爱拼团</router-link>
			<router-link to="/say" >有话说</router-link>
		</div>
		<img class="groupbuybanner" :src="homeData.groupbuybanner" />
		<div class="groupcatelistnew-wrap">
			<ul class="groupcatelistnew-list">
				<li class="groupcatelistnew-item" v-for="item in homeData.groupcatelistnew">
					<a href="javascript:;">
						<img :src="item.img"/>
					</a>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		props : ["homeData"],
		data() {
			return {
				isActive : 0
			}
		}
	}
</script>

<style lang="less">
.home-main {
	.threetitle {
		display: flex;
		background-color: #f6f6f6;
		a {
			flex: 1;
			text-align: center;
			line-height: 0.56rem;
			color: #9c9c9c;
			font-size: 0.27rem;
			border-bottom: 0.04rem solid transparent;
			&.active {
				border-color: #bb1219;
			}
		}
	}
	.groupbuybanner {
		display: block;
		height: 2.44rem;
	}
	.groupcatelistnew-wrap {
		width: 100%;
		overflow: auto;		
		.groupcatelistnew-list {
			width: 8*1.66rem;
			.groupcatelistnew-item {
				float: left;
				padding: 0.15rem 0.15rem;
				a {
					display: block;
					img {
						display: block;
						width: 1.36rem;
						height: 1.32rem;
					}
				}
			}
		}
	}
}
</style>