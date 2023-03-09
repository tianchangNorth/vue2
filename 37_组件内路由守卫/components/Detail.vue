<template>
  <ul>
    <li>{{ id }}{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>