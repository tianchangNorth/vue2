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
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    //借助mapActions生成对应的方法,方法中会调用对应的dispath去联系Actiond（对象写法）
    // ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    //数组写法
    ...mapActions(["jiaOdd", "jiaWait"]),

    //借助mapMutations生成对应的方法,方法中会调用对应的commit去联系mutations（对象写法）
    // ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    //数组写法
    ...mapMutations(["JIA", "JIAN"]),

    // increment() {
    //   this.$store.commit("JIA", this.number);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.number);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.number);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.number);
    // },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>