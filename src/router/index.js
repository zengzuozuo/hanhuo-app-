import Vue from 'vue'
import Router from 'vue-router';
import Home from "../components/home/home.vue";
import Apt from "../components/home/home-apt.vue";
import Say from "../components/home/home-say.vue";
import My from "../components/my/my.vue";
import Message from "../components/message/message.vue";
import Shopcart from "../components/shopcart/shopcart.vue";
import Goodsclass from "../components/goodsclass/goodsclass.vue";
import Register from "../components/other/register.vue";
import GcGoodsList from "../components/other/gc_goods_list";
import Goodsdetails from "../components/other/goods_details";
import Setpassword from "../components/other/set_password";
import Login from "../components/other/login";
import Settings from "../components/other/settings";
import Barcode from "../components/other/barcode"; //二维码扫描

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: "/apt",
      children : [
      	{
      		path: "apt",
      		component : Apt
      	},
      	{
      		path: "say",
      		component : Say
      	}
      ]
    },
    {
    	path: "/my",  //用户页面
    	component: My
    },
    {
    	path: "/message",  //消息页面
    	component: Message
    },
    {
    	path: "/shopcart",  //购物车
    	component: Shopcart
    },
    {
    	path: "/goodsclass",  //商品列表
    	component: Goodsclass
    },
    {
    	path: "/register", //账号注册
    	component: Register
    },
    {
    	path: "/goodslist",
    	component: GcGoodsList
    },
    {
    	path: "/goodsdetails",
    	component: Goodsdetails
    },
    {
    	path: "/setpassword",
    	component: Setpassword
    },
    {
    	path: "/login",
    	component: Login
    },
    {
    	path: "/settings",
    	component: Settings
    },
    {
    	path: "/barcode",
    	component: Barcode
    }
  ],
  linkActiveClass : "active"
})
