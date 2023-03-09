<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前放大十倍求和为:{{ bigSum }}</h1>
    <h1>学校名称:{{ school }}</h1>
    <h1>学科:{{ subject }}</h1>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(number)">+</button>
    <button @click="JIAN(number)">-</button>
    <button @click="jiaOdd(number)">当前求和为奇数再加</button>
    <button @click="jiaWait(number)">等一等再加</button>
    <h3>下方组件的总人数是:{{ personObj.length }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject", "personObj"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    ...mapActions(["jiaOdd", "jiaWait"]),
    ...mapMutations(["JIA", "JIAN"]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>