<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称按回车键确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  // props: ["addTodo"],
  methods: {
    //将用户输入包装成一个todo对象
    add(e) {
      //校验数据 trim()去除前面空格
      if (!e.target.value.trim()) {
        alert("输入不能为空！！！");
      } else {
        //将用户数据包装成一个todo对象
        const todoObj = { id: nanoid(), title: e.target.value, done: false };
        //通过app组件去添加一个todo对象
        // this.addTodo(todoObj);
        this.$emit("addTodo", todoObj);
        //清空输入
        e.target.value = "";
      }
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>