<template>
	<div class="container">
		<HomeHeader :home-data="homeData"></HomeHeader>
		<HomeNav></HomeNav>
		<HomeMain :home-data="homeData"></HomeMain>
		<vFooter :is-active="1"></vFooter>
	</div>
</template>

<script>
import HomeHeader from "./home-header.vue";
import HomeNav from "./home-nav.vue";
import HomeMain from "./home-main.vue";

export default {
	data : function(){
		return {
			homeData : []
		}
	},
	components : {
		HomeHeader,
		HomeMain,
		HomeNav
	},
	created : function(){
		this.getHomeData();
	},
	methods : {
		getHomeData : function(){
			this.$http.get("./static/json/home_data.json").then((res) => {
				this.homeData = res.data;
			})
		}
	}
}
</script>

<style>
.container {
    padding-bottom: 0.82rem;
}	
</style>