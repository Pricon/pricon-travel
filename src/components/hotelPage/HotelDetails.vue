<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotels/list' }"
        >酒店列表</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/hotels/detals' }"
        >酒店名</el-breadcrumb-item
      >
    </el-breadcrumb>
    <HotelCardComponent
      :hotelList="hotelList"
      :type="false"
    ></HotelCardComponent>
    <div
      v-for="(hotel, index) in hotelList"
      :key="index"
      class="room_list_layout"
    >
      <RoomCard :rooms="hotel.rooms"></RoomCard>
    </div>
  </div>
</template>

<script>
import HotelCardComponent from "./HotelCardComponent.vue";
import RoomCard from "./RoomCard.vue";
export default {
  name: "HotelDetails",
  components: { HotelCardComponent, RoomCard },
  data() {
    return {
      hotelList: [
        {
          hotelName: "绿地铂骊Q酒店(上海浦东店)",
          pic: "https://dimg04.c-ctrip.com/images/02025120008f2imau93F5_R_300_225_R5_Q70_D.jpg",
          rate: 4.7,
          price: 677,
          keywords: ["迪士尼", "浦东国际机场"],
          service: [
            "桌球室",
            "接机服务",
            "免费停车",
            "行李寄存",
            "闪住",
            "健身房",
          ],
          rooms: [
            {
              roomName: "庭院豪华大床房",
              pic: "https://dimg04.c-ctrip.com/images/2h0915000000xv3ilEAE5_W_1080_808_R5_D.jpg_.webp",
              desc: ["1张2米特大床", "37m²", "有窗", "禁烟"],
              persons: 2,
              breakfast: "2",
              isCancle: false,
              isComfirm: true,
              price: 677,
            },
            {
              room_name: "雅致双床房",
              pic: "https://dimg04.c-ctrip.com/images/2h0115000000y5mad36A8_W_1080_808_R5_D.jpg_.webp",
              desc: ["2张1.5米单人床", "47m²", "有窗", "禁烟"],
              breakfast: "2",
              persons: 2,
              isCancle: false,
              isComfirm: true,
              price: 604,
            },
            {
              room_name: "庭院雅致双床房",
              pic: "https://dimg04.c-ctrip.com/images/200c1c000001dl13l3A2E_W_1080_808_R5_D.jpg_.webp",
              desc: ["2张1.5米单人床", "47m²", "有窗", "禁烟"],
              breakfast: "2",
              persons: 2,
              isCancle: false,
              isComfirm: true,
              price: 688,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.room_list_layout {
  margin-top: 20px;
}
</style>