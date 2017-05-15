<template>
	<div class="">
		<Gcheader v-on:ee="cFn"></Gcheader>
		<Gcmain :g-c-nav-data="gCNavData" :once-id="onceId"></Gcmain>
		<vFooter :is-active="4"></vFooter>
	</div>
</template>

<script>
import Gcheader from "./gc-header";
import Gcmain from "./gc-main";
export default {
	data() {
		return {
			gCNavData : [],
			onceId : 0
		}
	},
	components : {
		Gcheader,
		Gcmain
	},
	methods : {
		cFn : function(data,id){
			this.gCNavData = data;
			this.onceId = id;
			this.$emit("cut");
		}
	}
}
</script>

<style>
</style>