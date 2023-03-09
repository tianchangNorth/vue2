<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: "18",
      sex: "男",
    };
  },
  mixins: [hunhe, hunhe2],
};
</script>

<style>
.demo {
  background-color: burlywood;
  text-align: center;
}
</style>