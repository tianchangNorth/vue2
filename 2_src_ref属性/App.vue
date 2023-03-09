<template>
  <div class="demo">
    <img src="../1_src_分析脚手架/assets/logo.png" alt="" />
    <h1 ref="title">欢迎学习Vue</h1>
    <button @click="showDom">点我获取上方Dom元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School";
export default {
  name: "App",
  components: {
    School,
  },
  methods: {
    showDom() {
      console.log(this.$refs.title); //title元素
      console.log(this.$refs.sch); //School实例对象
    },
  },
};
</script>

<style>
</style>