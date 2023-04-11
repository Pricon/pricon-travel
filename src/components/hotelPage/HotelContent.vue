<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <div class="mainContent">
      <HotelMainComponent></HotelMainComponent>
      <HotelRankAside></HotelRankAside>
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
  components: {
    HeaderComponent,
    HotelMainComponent,
    HotelRankAside,
    FooterComponent,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 15px;
}
.mainContent {
  display: flex;
  justify-content: space-between;
}
</style>