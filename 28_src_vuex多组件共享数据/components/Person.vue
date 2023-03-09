<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personObj" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personObj"]),
  },
  methods: {
    add() {
      const person = { id: nanoid(), name: this.name };
      this.$store.commit("ADD", person);
      this.name = "";
    },
  },
};
</script>

<style>
</style>