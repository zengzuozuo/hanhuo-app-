<template>
<ul class="footer-nav" id="footer-nav">
	<li>
		<a href="#/" :class="{active : isActive == 1}">
			<i class="iconfont icon-shouye-shouye"></i>
			<span>首页</span>
		</a>
	</li>
	<li>
		<a href="#/message" :class="{active : isActive == 2}">
			<i class="iconfont icon-bf-icon-message"></i>
			<span>消息</span>
		</a>
	</li>
	<li>
		<a href="#/shopcart" :class="{active : isActive == 3}">
			<i class="iconfont icon-gouwuche"></i>
			<span>购物车</span>
		</a>
	</li>
	<li>
		<a href="#/goodsclass" :class="{active : isActive == 4}">
			<i class="iconfont icon-fenlei"></i>
			<span>类目</span>
		</a>
	</li>
	<li>
		<a href="#/my" :class="{active : isActive == 5}">
			<i class="iconfont icon-wode"></i>
			<span>我</span>
		</a>
	</li>
</ul>
</template>

<script>
export default {
	props : ["isActive"]
}
</script>

<style lang="less">
.footer-nav {
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.82rem;
    display: flex;
    background-color: #f6f6f6;
    border-top: 0.02rem solid #ececec;
    li {
        height: 100%;
        width: 20%;
        a {
            display: block;
            height: 100%;
            text-align: center;
            color: #6b6b6b;
            .iconfont {
                font-size: 0.4rem;
            }
            span {
                display: block;
                font-size: 0.21rem;
            }
            &.active {
                color: #c74146;
            }
        }
    }
}	
</style>