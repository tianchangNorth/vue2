import Vue from "vue";
import App from './App.vue'
//引入vuerouter
import VueRouter from "vue-router";
//引入路由器
import router from "./router";

Vue.config.productionTip = false
//引用插件
Vue.use(VueRouter)

//添加以下代码 解决重复请求报错问题 
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
el:'#app',
render:h=>h(App),
router:router
})

