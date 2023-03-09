<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转参数并携带query参数,to字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link
        > -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}</router-link
        >
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
};
</script>

<style>
</style>