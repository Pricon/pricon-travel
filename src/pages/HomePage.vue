// 主页
<template>
  <div class="container">
    <MemuLeft></MemuLeft>
    <HotelContent></HotelContent>
  </div>
</template>

<script>
import MemuLeft from "../components/hotelPage/MemuLeft";
import HotelContent from "../components/hotelPage/HotelContent";

export default {
  name: "MainPage",
  components: {
    MemuLeft,
    HotelContent,
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