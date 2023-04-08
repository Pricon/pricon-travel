<template>
  <div class="container">
    <HeaderContent></HeaderContent>
    <div class="mainContent">
      <HotelContent></HotelContent>
      <HotelRankAside></HotelRankAside>
    </div>
  </div>
</template>

<script>
import HeaderContent from "./HeaderContent.vue";
import HotelContent from "./HotelContent.vue";
import HotelRankAside from "./HotelRankAside.vue";
export default {
  name: "MainContent",
  components: {
    HeaderContent,
    HotelContent,
    HotelRankAside,
  },
};
</script>

<style scoped>
.container {
  width: 85%;
  padding: 0 50px 0 165px;
}
.mainContent {
  display: flex;
}
</style>