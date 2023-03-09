/*
该文件是整个项目的入口文件
*/

//引入Vue
import Vue from 'vue'
//引入app组件，他是所有组件的父组件
import App from './App.vue'

//关闭Vue生产提示
Vue.config.productionTip = false

//创建Vue实例对象
new Vue({
  el:'#App',
  //将app组件放入容器中
  render: h => h(App),
})
