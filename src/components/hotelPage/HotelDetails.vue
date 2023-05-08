<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{
          path: '/hotels/list',
          query: {
            destination: this.searchInfo.destination,
            startTime: this.searchInfo.startTime,
            endTime: this.searchInfo.endTime,
            roomNumber: this.searchInfo.roomNumber,
            adultNumber: this.searchInfo.adultNumber,
            childNumber: this.searchInfo.childNumber,
            hotelLevel: this.searchInfo.hotelLevel,
            keywords: this.searchInfo.keywords,
          },
        }"
        >酒店列表</el-breadcrumb-item
      >
      <el-breadcrumb-item
        :to="{
          path: '/hotels/details',
          query: {
            type: 'jump',
            destination: this.searchInfo.destination,
            startTime: this.searchInfo.startTime,
            endTime: this.searchInfo.endTime,
            roomNumber: this.searchInfo.roomNumber,
            adultNumber: this.searchInfo.adultNumber,
            childNumber: this.searchInfo.childNumber,
            hotelLevel: this.searchInfo.hotelLevel,
            keywords: this.searchInfo.keywords,
            hotelName: hotelInfo.name,
            hotelRate: hotelInfo.rate,
            hotelKeyword: hotelInfo.keywords,
            hotelServices: hotelInfo.services,
            hotelPic: hotelInfo.pic,
            hotelPrice: hotelInfo.price,
          },
        }"
        >酒店名</el-breadcrumb-item
      >
    </el-breadcrumb>
    <HotelCardComponent
      :hotelList="hotelInfo"
      :isShow="false"
    ></HotelCardComponent>
    <div class="room_list_layout">
      <RoomCard :rooms="roomInfo" :searchInfo="searchInfo"></RoomCard>
    </div>
  </div>
</template>

<script>
import HotelCardComponent from "./HotelCardComponent.vue";
import RoomCard from "./RoomCard.vue";
export default {
  name: "HotelDetails",
  props: ["hotelInfo", "roomInfo", "searchInfo"],
  components: { HotelCardComponent, RoomCard },
};
</script>

<style>
.room_list_layout {
  margin-top: 20px;
}
</style>