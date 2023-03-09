<template>
  <div class="demo">
    <h2>学校名称:{{ name | mySlice }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="hello">点击</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷165154156415",
      address: "北京",
    };
  },
};
</script>

<style>
.demo {
  background-color: burlywood;
  text-align: center;
}
</style>