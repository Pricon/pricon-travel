// 主页
<template>
  <div class="container">
    <MemuLeft></MemuLeft>
    <HotelContent
      :isLogin="isLogin"
      :isHome="true"
      :hotelRecommend="hotelRecommend"
    ></HotelContent>
  </div>
</template>

<script>
import MemuLeft from "../components/homePage/MemuLeft";
import HotelContent from "../components/homePage/HotelContent";

export default {
  name: "MainPage",
  components: {
    MemuLeft,
    HotelContent,
  },
  data() {
    return {
      hotelRecommend: [],
      isLogin: false,
    };
  },
  activated() {
    let token = localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  async created() {
    let token = localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    // 30分钟后移出accounter和token
    setTimeout(function () {
      localStorage.removeItem("token");
      localStorage.removeItem("accounter");
    }, 1000 * 60 * 30);

    const res = await this.$post("/home", {
      city: ["北京", "上海", "南京", "杭州"],
    });
    this.hotelRecommend = res.data;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 1400px;
  overflow: auto;
}
</style>