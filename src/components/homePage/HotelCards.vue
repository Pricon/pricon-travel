<template>
  <div class="hotel_cards">
    <el-card
      :body-style="{ padding: '0px' }"
      v-for="hotelItem in hotelInfo"
      :key="hotelItem.id"
      @click.native="toDetailPage(hotelItem)"
    >
      <div class="handle_image">
        <img :src="hotelItem.pic" class="image" />
      </div>
      <!-- 酒店信息 -->
      <div class="hotel_details">
        <div class="hotelName">{{ hotelItem.name }}</div>
        <div class="rate">
          <el-rate v-model="hotelItem.rate" disabled text-color="#ff9900">
          </el-rate>
          <div class="score_price">
            <div class="rate_score_item">
              <div class="rate_score">
                <span>{{ hotelItem.rate }}</span>
                <span>/{{ totalScore }}</span>
              </div>
              <span>超棒</span>
            </div>
            <div class="price">{{ hotelItem.price }}</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "HotelCards",
  props: ["hotelInfo"],
  data() {
    return {
      totalScore: 5,
    };
  },
  methods: {
    toDetailPage(hotel) {
      // 返回的keywords是字符串，这里转换成数组
      let keywords = hotel.keywords;
      let keyArray = keywords.split(",");
      // 返回的services是字符串，这里转换成数组
      let services = hotel.services;
      let serviceArray = services.split(",");
      this.$router.push({
        path: "/hotels/details",
        query: {
          type: "jump",
          destination: "上海",
          hotelName: hotel.name,
          hotelRate: hotel.rate,
          hotelKeyword: keyArray,
          hotelServices: serviceArray,
          hotelPic: hotel.pic,
          hotelPrice: hotel.price,
        },
      });
    },
  },
};
</script>

<style scoped>
.hotel_cards {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}
.hotel_cards .el-card {
  border-radius: 10px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.1s linear;
}

.image {
  width: 100%;
  display: block;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.hotel_cards .handle_image {
  height: 175px;
  overflow: hidden;
}
.hotel_cards .el-card:hover {
  /* box-shadow: 0 0 15px rgb(171, 171, 171); */
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.hotel_cards .el-card:hover .image {
  transform: scale(105%, 105%);
}

.hotel_details {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 15px;
}
.hotelName {
  font-size: 16px;
  font-weight: bold;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rate {
  display: flex;
  flex-direction: column;
}
.hotel_details .rate .el-rate__icon {
  font-size: 15px;
  margin: 0;
  padding: 0;
}

.score_price {
  display: flex;
  justify-content: space-between;
}
.rate_score_item {
  margin-top: 5px;
  display: flex;
  align-content: center;
}
.rate_score {
  background-color: #3b7cec;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 50px;
  text-align: center;
}
.rate_score span:first-child {
  color: white;
  font-size: 17px;
}
.rate_score span:last-child {
  color: white;
  opacity: 0.5;
  font-size: 10px;
}
.rate_score_item > span {
  color: #3377ed;
  font-size: 15px;
  margin-left: 5px;
  line-height: 24px;
}

.hotel_details .price {
  color: #3377ed;
  font-size: 20px;
  text-align: right;
  font-weight: bold;
}
.hotel_details .price::before {
  color: #3377ed;
  font-size: 15px;
  content: "¥";
}
</style>