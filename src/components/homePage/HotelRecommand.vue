// 酒店推荐组件
<template>
  <div class="hotel_recommand_layout">
    <div class="hotel_recommand_title">
      <span>酒店<span class="high_light">推荐</span></span>
      <div class="bt_city_layout">
        <button
          v-for="item in hotelList"
          :key="item.city"
          @click="changeHotelImg(item)"
        >
          {{ item.city }}
        </button>
      </div>
    </div>
    <div class="hotel_recommand_card">
      <HotelCards :hotelInfo="tempList"> </HotelCards>
    </div>
  </div>
</template>

<script>
import HotelCards from "./HotelCards";
export default {
  name: "HotelRecommand",
  props: ["hotelList"],
  components: { HotelCards },
  data() {
    return {
      tempList: "",
    };
  },
  watch: {
    hotelList(newVal, oldVal) {
      if (oldVal.length == 0 && newVal.length != 0) {
        this.tempList = newVal[0].hotelInfo;
      }
    },
  },
  methods: {
    changeHotelImg(item) {
      this.tempList = item.hotelInfo;
    },
  },
};
</script>

<style scoped>
/* 整体布局 */
.hotel_recommand_layout {
  width: 740px;
  margin: 30px 0;
}
.hotel_recommand_title,
.bt_city_layout {
  display: flex;
  justify-content: space-between;
}

.hotel_recommand_title span {
  font-size: 25px;
}
.hotel_recommand_title .high_light {
  color: rgb(255, 119, 0);
}
.hotel_recommand_title .bt_city_layout button {
  margin: 5px;
  font-size: 15px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 10px;
  width: 65px;
  height: 30px;
}
.hotel_recommand_title .bt_city_layout button:hover {
  background-color: #f3f8fd;
  color: #3377ed;
  border-radius: 5px;
}
.hotel_recommand_title .bt_city_layout button:focus {
  background-color: #d1e6fa;
  color: #3377ed;
  border-radius: 5px;
}
</style>