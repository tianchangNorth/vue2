<template>
  <div>
    <button @click="handleShow" appear>点击显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">Vue</h1>
    </transition-group>
  </div>
</template>

<script>
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
.hello-enter-active,
.hello-leave-active {
  transition: 1s linear;
}
/*进入起点*/ /*离开终点*/
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/*进入终点*/ /*离开起点*/
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>