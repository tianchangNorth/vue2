<template>
  <div class="demo">
    <h2>学生名称:{{ school_name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      school_name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.school_name);
    },
  },
};
</script>

<style>
.demo {
  background-color: blue;
}
</style>