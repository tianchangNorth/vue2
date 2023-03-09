<template>
  <div>
    <Banner></Banner>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 通过链接方式跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <!-- 通过路由器跳转 -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "App",
  components: {
    About,
    Home,
    Banner,
  },
};
</script>