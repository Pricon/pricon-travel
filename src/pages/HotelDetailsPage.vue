// 酒店预定信息展示页面
<template>
  <div>
    <HeaderAndSearch></HeaderAndSearch>
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
};
</script>

<style>
</style>