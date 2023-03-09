//该文件专门用于创建整个文件的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Message from '../components/Message.vue'
import News from '../components/News.vue'
import Detail from '../components/Detail.vue'
//创建一个路由器
const router= new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'jia',
            path:'/home',
            component:Home,
            meta:{title:'家'},
            children:[
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true ,title:'消息'},
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
                            meta:{title:'详情'},
                        }
                    ]
                },                
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                },
            ]
        },
    ]
})

//全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from);
    // if (to.name==='xiaoxi' || to.name==='xinwen')
    if (to.meta.isAuth)
    {
        if (localStorage.getItem('school')==='atguigu') {
            next()
        }else{
            alert('学校名称不对')
        }
    }else{
        next()
    }
})
//全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from);
    document.title = to.meta.title 
})

export default router