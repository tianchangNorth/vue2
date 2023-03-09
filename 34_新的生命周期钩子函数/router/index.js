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
                            path:'detail/:id/:title',
                            component:Detail,

                            //props第一种写法值为对象，该对象中所有的key-value都会以props形式传给Detail组件
                            // props:{a:1,b:hello},
                            
                            //第二种写法值为布尔值，若布尔值为真，就会把路由组件收到的所有params参数以props形式传给组件
                            props:true,

                                   //第三种写法 值为 函数
                            // props($route){
                            //     return {id:$route.query.id,title:$route.query.title}
                            // }
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