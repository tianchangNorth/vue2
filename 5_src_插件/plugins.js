export default {
    install(Vue){
        //全局过滤器
        Vue.filter("mySlice", (value) => {
            return value.slice(0, 3);
          });

        //定义全局指令
        Vue.directive("fbind", {
        //指令与元素成功绑定时（一上来）
        bind(element, binding) {
          console.log("bind");
          element.value = binding.value;
        },
        //指令所在元素被插入页面时
        inserted(element, binding) {
          console.log("inserted");
          element.focus();
        },
        //指令所在模板被重新解析时
        update(element, binding) {
          console.log("update");
          element.value = binding.value;
        },
      });

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    t:200
                }
            }
        })

        //给Vue原型添加方法
         Vue.prototype.hello = ()=>{
            alert('你好')
         }
    }
}