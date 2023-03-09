<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校姓名</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>

<style>
.demo {
  background-color: burlywood;
  text-align: center;
}
</style>