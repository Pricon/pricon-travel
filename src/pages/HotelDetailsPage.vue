// 酒店预定信息展示页面
<template>
  <div>
    <HeaderAndSearch :isLogin="isLogin"></HeaderAndSearch>
    <div class="main_content">
      <HotelDetails></HotelDetails>
    </div>
  </div>
</template>

<script>
import HeaderAndSearch from "../components/hotelPage/HeaderAndSearch.vue";
import HotelDetails from "../components/hotelPage/HotelDetails.vue";

export default {
  name: "HotelDetailsPage",
  components: { HeaderAndSearch, HotelDetails },
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
};
</script>

<style>
</style>