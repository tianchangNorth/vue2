import Vue from "vue";
import App from './App.vue'

//引入store
import store from './store/index';

Vue.config.productionTip = false
const vm = new Vue({
el:'#app',
render:h=>h(App),
store,
beforeCreate() {
    Vue.prototype.$bus= this
},
})
console.log(vm);
