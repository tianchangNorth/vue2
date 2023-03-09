<template>
  <ul>
    <li>{{ $route.query.id }}{{ $route.query.title }}</li>
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