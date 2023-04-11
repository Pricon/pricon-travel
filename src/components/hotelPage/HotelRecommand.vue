// 酒店推荐组件
<template>
  <div class="hotel_recommand_layout">
    <div class="hotel_recommand_title">
      <span>酒店<span class="high_light">推荐</span></span>
      <div class="bt_city_layout">
        <button
          v-for="item in hotelList"
          :key="item.id"
          @click="changeHotelImg(item)"
        >
          {{ item.hotelsInfo.cityName }}
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
  components: { HotelCards },
  data() {
    return {
      hotelList: [
        {
          id: 1,
          hotelsInfo: {
            cityName: "北京",
            hotels: [
              {
                id: 1,
                hotelName: "美朋·轻奢酒店(北京朝阳站店)",
                pic: "https://dimg04.c-ctrip.com/images/02004120009sis204DFD7_R_300_225_R5_Q70_D.jpg",
                rate: 4.6,
                price: 465,
              },
              {
                id: 2,
                hotelName: "桔子水晶北京丽泽商务区中心酒店",
                pic: "https://dimg04.c-ctrip.com/images/0204l120009or3szh8E46_R_300_225_R5_Q70_D.jpg",
                rate: 4.9,
                price: 754,
              },
              {
                id: 3,
                hotelName: "北京贯通建徽酒店",
                pic: "https://dimg04.c-ctrip.com/images/0203l120008225w2y661F_R_300_225_R5_Q70_D.jpg",
                rate: 4.6,
                price: 570,
              },
            ],
          },
        },
        {
          id: 2,
          hotelsInfo: {
            cityName: "上海",
            hotels: [
              {
                id: 1,
                hotelName: "绿地铂骊Q酒店(上海浦东店)",
                pic: "https://dimg04.c-ctrip.com/images/02025120008f2imau93F5_R_300_225_R5_Q70_D.jpg",
                rate: 4.7,
                price: 677,
              },
              {
                id: 2,
                hotelName: "上海国际旅游度假区融侨酒店",
                pic: "https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg",
                rate: 4.6,
                price: 667,
              },
              {
                id: 3,
                hotelName: "原舍青荚民宿(浦东星火店)",
                pic: "https://dimg04.c-ctrip.com/images/0205v12000a91u8a4362F_R_300_225_R5_Q70_D.jpg",
                rate: 5,
                price: 1804,
              },
            ],
          },
        },
        {
          id: 3,
          hotelsInfo: {
            cityName: "杭州",
            hotels: [
              {
                id: 1,
                hotelName: "杭州滨江江南大道亚朵X酒店",
                pic: "https://dimg04.c-ctrip.com/images/0204e1200090co6v76DB1_R_300_225_R5_Q70_D.jpg",
                rate: 4.8,
                price: 688,
              },
              {
                id: 2,
                hotelName: "忆泊酒店(杭州奥体中心店)",
                pic: "https://dimg04.c-ctrip.com/images/0206o120009lfgzt57B55_R_300_225_R5_Q70_D.jpg",
                rate: 4.7,
                price: 918,
              },
              {
                id: 3,
                hotelName: "杭州萧山国际机场森·庭酒店",
                pic: "https://dimg04.c-ctrip.com/images/200a1g000001h6ly6203C_R_300_225_R5_Q70_D.jpg",
                rate: 4.7,
                price: 834,
              },
            ],
          },
        },
        {
          id: 4,
          hotelsInfo: {
            cityName: "南京",
            hotels: [
              {
                id: 1,
                hotelName: "南京夫子庙夜泊秦淮君亭酒店",
                pic: "https://dimg04.c-ctrip.com/images/02073120008ipmrtk9378_R_300_225_R5_Q70_D.jpg",
                rate: 4.9,
                price: 1859,
              },
              {
                id: 2,
                hotelName: "夫子庙·金陵精品酒店",
                pic: "https://dimg04.c-ctrip.com/images/20081f000001gqvzz3562_R_300_225_R5_Q70_D.jpg",
                rate: 4.7,
                price: 1118,
              },
              {
                id: 3,
                hotelName: "南京艺美风尚酒店",
                pic: "https://dimg04.c-ctrip.com/images/0200312000a238e4l61B5_R_300_225_R5_Q70_D.jpg",
                rate: 4.3,
                price: 501,
              },
            ],
          },
        },
      ],
      tempList: "",
    };
  },
  mounted() {
    this.tempList = this.hotelList[0].hotelsInfo.hotels;
  },
  methods: {
    changeHotelImg(hotelInfo) {
      this.tempList = hotelInfo.hotelsInfo.hotels;
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