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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    //借助mapState  mapGetters生成计算属性从state中读取（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    //数组写法
    ...mapState(["sum", "school", "subject"]),

    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(["bigSum"]),
    //靠程序员自己写的计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    /* ***************************************************** */
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.number);
    },
    decrement() {
      this.$store.commit("JIAN", this.number);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.number);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.number);
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>