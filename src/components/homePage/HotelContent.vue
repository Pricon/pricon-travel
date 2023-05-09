<template>
  <div class="hotel_content_container">
    <div class="header_main_content">
      <HeaderComponent :isLogin="isLogin" :isHome="isHome"></HeaderComponent>
      <div class="mainContent">
        <HotelMainComponent
          :hotelRecommend="hotelRecommend"
        ></HotelMainComponent>
        <HotelRankAside></HotelRankAside>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import HotelMainComponent from "./HotelMainComponent.vue";
import HotelRankAside from "./HotelRankAside.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  name: "HotelContent",
  props: ["isLogin", "isHome", "hotelRecommend"],
  components: {
    HeaderComponent,
    HotelMainComponent,
    HotelRankAside,
    FooterComponent,
  },
};
</script>

<style scoped>
.hotel_content_container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.header_main_content {
  margin-left: 80px;
}
.mainContent {
  display: flex;
}
</style>