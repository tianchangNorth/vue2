<template>
  <div class="app">
    <h1>{{ msg }},学生的名字是：{{ name }}</h1>

    <!-- 通过父组件给子组件传递函数类型的propos实现子给父传参 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件传参 .once只执行一次 第一种写法-->
    <Student
      @atguigu="getStudentName"
      @demo="m1"
      @click.native="show"
    ></Student>

    <!-- 通过父组件给子组件绑定一个自定义事件传参  第二种写法-->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "欢迎学习vue",
      name: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("这是学校的名称:", name);
    },
    getStudentName(name) {
      console.log(name);
      this.name = name;
    },
    m1() {
      console.log("demo方法被调用了");
    },
    show() {
      alert("......");
    },
  },
  mounted() {
    // this.$refs.student.$on("atguigu", this.getStudentName);
    // this.$refs.student.$once("atguigu", this.getStudentName);//一次性 once
  },
};
</script>

<style scoped>
.app {
  background-color: skyblue;
  margin-top: 10px;
  padding: 10px;
}
</style>