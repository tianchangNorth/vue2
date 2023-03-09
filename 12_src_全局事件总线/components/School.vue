<template>
  <div class="School">
    <h1>{{ name }}</h1>
    <h1>{{ address }}</h1>
    <h2>学生的名字是{{ studentName }}</h2>
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
      studentName: "",
    };
  },
  methods: {
    getName(name) {
      console.log("我是School收到了数据");
      this.studentName = name;
    },
  },
  mounted() {
    this.$bus.$on("getName", this.getName);
  },
  beforeDestroy() {
    this.$bus.$off("getName");
  },
};
</script>

<style scoped>
.School {
  background-color: blue;
  padding: 10px;
}
</style>