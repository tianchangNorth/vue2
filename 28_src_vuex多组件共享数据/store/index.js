//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'

//引入Vue
import Vue from 'vue'

//使用Vuex
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions={
    jiaOdd(context,value){
        console.log('action中的jiaOdd被调用了',context,value);
       if (context.state.sum % 2 ===1) {
        context.commit('JIA',value)
       }
    },
    jiaWait(context,value){
        console.log('action中的jiaWait被调用了',context,value);
        setTimeout(()=>{
            context.commit('JIA',value)
        },1000)
    },
}

//准备mutations——用于响应组件中的动作
const mutations={
    JIA(state,value){
        console.log('mutation中的JIA被调用了',state,value);
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutation中的JIAN被调用了',state,value);
        state.sum -= value
    },
    ADD(state,value){
        state.personObj.unshift(value)
    }
    
}

//准备state——用于响应组件中的动作
const state = {
    sum:0,
    school:'aiguigu',
    subject:'前端',
    personObj:[{id:'001',name:'张三'}]
}

const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})