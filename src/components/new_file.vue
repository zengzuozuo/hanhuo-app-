<template>
	<div class="main">
	    <div id="warpper">
	        <ul>
	            <li v-for="item in iList">{{item.text}}</li>
	        </ul>
	    </div>
	</div>
</template>

<script>
var iScroll = require("iscroll/build/iscroll-probe.js");
export default {
	data : function(){
        return {
            iList : [
                {text : "列表文字1"},
                {text : "列表文字2"},
                {text : "列表文字3"},
                {text : "列表文字4"},
                {text : "列表文字5"},
                {text : "列表文字6"},
                {text : "列表文字1"},
                {text : "列表文字2"},
                {text : "列表文字3"},
                {text : "列表文字4"},
                {text : "列表文字5"},
                {text : "列表文字6"}
            ]
        }
    },
    mounted : function(){
        var myScroll = new iScroll("#warpper",{
            scrollbars : true,//是否显示滚动条
            fadeScrollbars : true,//是否渐隐滚动条
            shrinkScrollbars : "scale",
            mouseWheel : true,
            probeType : 3 //当列表每滚动一个像素即触发scroll事件
        });

        myScroll.on("scroll" , function(event){
            console.log(this);
        })
    }
}
</script>

<style lang="less">
#warpper {
	position: relative;
	height: 1rem;
	border: 1px solid #c33;
	ul {
		position: absolute;
	}
}
</style>