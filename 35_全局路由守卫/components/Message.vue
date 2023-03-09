<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转参数并携带params参数,to字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->

        <!-- 跳转参数并携带params参数,to对象写法  不能用path只能用name-->
        <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Detail from "./Detail.vue";
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  components: {
    Detail,
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>