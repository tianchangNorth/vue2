<template>
  <div>
    <Student></Student>
    <hr />
    <School></School>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
import School from "@/components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style>
.demo {
  background-color: burlywood;
  align-content: center;
}
</style>