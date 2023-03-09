<template>
  <ul>
    <li>{{ $route.params.id }}{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>