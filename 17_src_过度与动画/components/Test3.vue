<template>
  <div>
    <button @click="handleShow" appear>点击显示/隐藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">Vue</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    handleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>