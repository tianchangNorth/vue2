//该文件专门用于创建整个文件的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Message from '../components/Message.vue'
import News from '../components/News.vue'
import Detail from '../components/Detail.vue'
//创建一个路由器
export default  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail
                        }
                    ]
                },                {
                    path:'news',
                    component:News
                },
            ]
        },
    ]
})