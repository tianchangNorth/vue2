<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
};
</script>

<style>
.app {
  background-color: skyblue;
  margin-top: 10px;
  padding: 10px;
}
</style>