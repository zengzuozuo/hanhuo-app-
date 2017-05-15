<template>
	<div class="swiper-container" :class="classname">
		<div class="swiper-wrapper" v-if="imgdata">
			<div class="swiper-slide" v-for="imgUrl in imgdata">
				<a href="javascript:;">
					<img :src="imgUrl.img || imgUrl" alt="" />
				</a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
export default {
	props : {
		classname : {},
		imgdata : {}
	},
	updated : function(){
		var swiper = new Swiper("."+this.classname, {
			autoplay: 5000,
			loop: true,
			pagination: ".swiper-pagination",
			observer: true,
			autoplayDisableOnInteraction : false
		});
	}
}
</script>

<style>
</style>