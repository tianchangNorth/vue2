<template>
  <div class="Student">
    <h2>{{ number }}</h2>
    <button @click="add">点击＋1</button>
    <h2>学生的名字是:{{ name }}</h2>
    <h2>学生的年龄是:{{ age }}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁当前student组件实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      number: 0,
      name: "张三",
      age: 18,
    };
  },
  methods: {
    add() {
      console.log("add被调用了");
      this.number++;
    },
    sendStudentName() {
      //触发Student实例身上的atguigu事件
      this.$emit("atguigu", this.name);
      // this.$emit("demo");
    },
    unbind() {
      this.$off("atguigu"); //解绑一个自定义事件
      //   this.$off(["atguigu", "demo"]); //解绑多个自定义事件
      // this.$off(); //解绑全部自定义事件
    },
    death() {
      this.$destroy(); //销毁当前student组件实例，销毁后所有的student实例的自定义事件全都不奏效了
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