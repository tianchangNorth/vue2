<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，等待使用者进行填充 -->
    <slot>默认值,当使用者没有传递具体结构时展示</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
};
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
</style>