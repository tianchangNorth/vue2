<template>
  <div class="School">
    <h1>{{ name }}</h1>
    <h1>{{ address }}</h1>
    <button @click="sendSchoolName">点击把学校名称给app</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "atguigu",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.School {
  background-color: blue;
  padding: 10px;
}
</style>