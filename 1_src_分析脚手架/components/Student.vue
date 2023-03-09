<template>
  <div>
    <h2>学生名称:{{ my_name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      my_name: "郭少",
      age: "21",
    };
  },
};
</script>