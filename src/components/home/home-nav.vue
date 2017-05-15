<template>
	<ul class="home-nav">
		<li v-for="item in listData">
			<a href="javascript:;">
				<img :src="item.img" :alt="item.text"/>
				<span>{{ item.text }}</span>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			listData : [
				{img:"static/images/quanqiubaoshui.png",text:"全球保税"},
				{img:"static/images/liangpipuzi.png",text:"良品铺子"},
				{img:"static/images/loulanmiyu.png",text:"楼兰蜜语"},
				{img:"static/images/xindongguoye.png",text:"鑫东果业"},
				{img:"static/images/zhongyingchupin.png",text:"中影出品"},
				{img:"static/images/chongzhi.png",text:"充值"},
				{img:"static/images/eqianzheng.png",text:"e签证"},
				{img:"static/images/zhongchou.png",text:"众筹"},
				{img:"static/images/yiweitao.png",text:"宜味淘"},
				{img:"static/images/yufuyuan.png",text:"誉福园"}
			]
		}
	}
}
</script>

<style lang="less">
.home-nav {
    display: flex;
    flex-wrap: wrap;
    li {
        width: 20%;
        a {
            display: block;
            text-align: center;
            padding-top: 0.22rem;
            img {
                width: 0.66rem;
                height: 0.66rem;
            }
            span {
                display: block;
                font-size: 0.18rem;
                color: #6b6b6b;
            }
        }
    }
}
</style>