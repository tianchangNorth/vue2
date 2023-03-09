<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img slot="center" src="./assets/logo.png" alt="" />
      <a href="" slot="footer">美食</a>
    </Category>

    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">
          {{ g }}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="">电子游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>

    <Category title="电影" :listData="films">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "星巴克", "牛排", "小龙虾"],
      games: ["命运2", "只狼", "红色警戒", "土豆兄弟"],
      films: ["<<教父>>", "<<阿甘正传>>", "<<肖申克>>", "<<这个杀手>>"],
    };
  },
};
</script>
<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>

