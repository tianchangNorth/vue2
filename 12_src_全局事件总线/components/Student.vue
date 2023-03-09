<template>
  <div class="Student">
    <h2>学生的名字是:{{ name }}</h2>
    <h2>学生的年龄是:{{ age }}</h2>
    <button @click="sendName">点击发送学生姓名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendName() {
      this.$bus.$emit("getName", this.name);
    },
  },
};
</script>

<style scoped>
.Student {
  background-color: cadetblue;
  padding: 10px;
  margin-top: 5px;
}
</style>