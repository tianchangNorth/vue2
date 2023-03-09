<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleChecked(todo.id)"
      />
      <!-- 如下代码也能实现功能但不推荐，因为违反原则，修改了props -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @keyup.enter="handleBlur(todo, $event)"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      v-show="!todo.isEdit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;
      // console.log(e.target.value);
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
    handleChecked(id) {
      //通知App组件将对应的todo对象的done值取反
      this.$bus.$emit("checkTodo", id);
    },
    //获得要删除的id
    handleDelete(id) {
      if (confirm("确定删除么？")) {
        //通知app删除对应项
        // this.$bus.$emit("deleteTodo", id);
        PubSub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>