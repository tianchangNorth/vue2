<template>
  <ul>
    <li :style="{ opacity }">欢迎学习VUE</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.1;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 100);
    console.log("@@@@@@@@");
  },
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>