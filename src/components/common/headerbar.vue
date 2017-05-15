<template>
	<h2 class="my-headerbar">
		{{ title }}
		<slot></slot>
	</h2>
</template>

<script>
export default {
	props : ["title"]
}
</script>

<style lang="less">
.my-headerbar {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    font-size: 0.3rem;
    color: #b70e13;
    text-align: center;
    line-height: 0.8rem;
    font-weight: normal;
    border-bottom: 0.01rem solid #ebebeb;
    background-color: #fff;
    a {
        position: absolute;
        top: 0;
        right: 0;
        line-height: 0.8rem;
        font-size: 0.26rem;
        color: #b70e13;
        padding: 0 0.3rem;
        
    }
}
</style>