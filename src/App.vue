<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
	@import url("css/ba.css");
/*去除点击高亮*/
html,body {
	height: 100%;
}
.app {
	height: 100%;
}
a {
    -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
}
</style>
