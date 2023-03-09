<template>
  <div>
    <button @click="handleShow" appear>点击显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
</script >

<style scoped>
h1 {
  background-color: orange;
}
.hello-enter-active {
  animation: atguigu 1s linear;
}
.hello-leave-active {
  animation: atguigu 1s linear reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>