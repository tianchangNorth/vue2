//该文件专门用于创建整个文件的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'
//创建一个路由器
export default  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})