<template>
  <div class="container">
    <HeaderContent></HeaderContent>
    <HotelContent></HotelContent>
  </div>
</template>

<script>
import HeaderContent from "./HeaderContent.vue";
import HotelContent from "./HotelContent.vue";
export default {
  name: "MainContent",
  components: {
    HeaderContent,
    HotelContent,
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  padding: 0 165px;
}
</style>