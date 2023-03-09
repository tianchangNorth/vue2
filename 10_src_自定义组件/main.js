import App from './App.vue'
import Vue from 'vue'

Vue.config.productionTip = false
new Vue({
el:'#app',
data:{},
render:h=>h(App),
// mounted() {
//     setTimeout(() => {
//        this.$destroy() 
//     }, 3000);
// },
})
