<template>
  <div><h1>我是About的内容</h1></div>
</template>

<script>
export default {
  name: "About",
  //通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", to, from);
    next();
  },
  //通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from);
    next();
  },
};
</script>
