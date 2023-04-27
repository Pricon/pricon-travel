// 主页
<template>
  <div class="container">
    <MemuLeft></MemuLeft>
    <HotelContent
      :isLogin="isLogin"
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
    };
  },
  computed: {
    isLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },
  async created() {
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
}
</style>