<template>
  <div class="demo">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>学生性别:{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: "18",
      sex: "男",
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