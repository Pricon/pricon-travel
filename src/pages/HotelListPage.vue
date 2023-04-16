// 酒店搜索列表页面
<template>
  <div>
    <HeaderAndSearch></HeaderAndSearch>
    <div class="main_content">
      <HotelKeyword></HotelKeyword>
      <HotelList></HotelList>
    </div>
  </div>
</template>

<script>
import HeaderAndSearch from "../components/hotelPage/HeaderAndSearch.vue";
import HotelKeyword from "../components/hotelPage/HotelKeyword.vue";
import HotelList from "../components/hotelPage/HotelList.vue";

export default {
  name: "HotelListPage",
  components: { HeaderAndSearch, HotelKeyword, HotelList },
};
</script>

<style scoped>
.main_content {
  background-color: #f5f7fa;
  padding: 15px 100px;
  margin-top: 15px;
}
</style>