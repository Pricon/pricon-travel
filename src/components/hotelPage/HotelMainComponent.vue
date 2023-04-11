// 酒店页面的主页面
<template>
  <div class="hotel_content_layout">
    <HotelReservation></HotelReservation>
    <ADVContent></ADVContent>
    <HotelRecommand></HotelRecommand>
  </div>
</template>

<script>
import HotelReservation from "./HotelReservation";
import ADVContent from "./ADVContent";
import HotelRecommand from "./HotelRecommand";

export default {
  name: "HotelMainComponent",
  components: {
    HotelReservation,
    ADVContent,
    HotelRecommand,
  },
};
</script>

<style scoped>
.hotel_content_layout {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>