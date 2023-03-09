<template>
  <div class="School">
    <h1>{{ name }}</h1>
    <h1>{{ address }}</h1>
    <h2>学生的名字是{{ studentName }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log("有人发布了hello消息");
      this.studentName = data;
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.School {
  background-color: blue;
  padding: 10px;
}
</style>