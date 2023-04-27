// 酒店搜索列表页面
<template>
  <div>
    <HeaderAndSearch
      :isLogin="isLogin"
      :searchInfo="searchInfo"
      @changeCity="changeCity"
    ></HeaderAndSearch>
    <div class="main_content">
      <HotelKeyword
        :hot="hotelList.hotArea"
        :bus="hotelList.businessArea"
        :airStation="hotelList.airportOrStation"
        :adminArea="hotelList.administrativeArea"
        @selectKeyword="selectKeyword"
        @deleteKeyword="deleteKeyword"
      ></HotelKeyword>
      <HotelList :hotelList="hotelList.hotels"></HotelList>
    </div>
  </div>
</template>

<script>
import HeaderAndSearch from "../components/hotelPage/HeaderAndSearch.vue";
import HotelKeyword from "../components/hotelPage/HotelKeyword.vue";
import HotelList from "../components/hotelPage/HotelList.vue";

export default {
  name: "HotelListPage",
  components: { HeaderAndSearch, HotelKeyword, HotelList },
  data() {
    return {
      // city: "上海",
      searchInfo: {
        destination: "",
        startTime: 0,
        endTime: 0,
        roomNumber: 1,
        adultNumber: 1,
        childNumber: 0,
        hotelLevel: "",
        keywords: "",
      },
      hotelList: {},
      keywordsList: [],
    };
  },
  computed: {
    isLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.searchInfo.destination = this.$route.query.destination;
    this.searchInfo.startTime = parseInt(this.$route.query.startTime);
    this.searchInfo.endTime = parseInt(this.$route.query.endTime);
    this.searchInfo.roomNumber = parseInt(this.$route.query.roomNumber);
    this.searchInfo.adultNumber = parseInt(this.$route.query.adultNumber);
    this.searchInfo.childNumber = parseInt(this.$route.query.childNumber);
    this.searchInfo.hotelLevel = this.$route.query.hotelLevel;
    this.searchInfo.keywords = this.$route.query.keywords;
  },
  async mounted() {
    // 请求酒店列表和关键字（热门区域、商圈、机场车站、行政区）
    let res = await this.$post("/hotels/list", {
      city: this.searchInfo.destination,
    });
    this.hotelList = res.data;

    res.data.hotels.forEach((hotel) => {
      // 返回的keywords是字符串，这里转换成数组
      let keywords = hotel.keywords;
      let keyArray = keywords.split(",");
      hotel.keywords = keyArray;
      // 返回的services是字符串，这里转换成数组
      let services = hotel.services;
      let serviceArray = services.split(",");
      hotel.services = serviceArray;
    });
  },
  methods: {
    async changeCity(value) {
      // this.city = value;
      let res = await this.$post("/hotels/list", {
        city: value,
      });
      this.hotelList = res.data;

      res.data.hotels.forEach((hotel) => {
        // 返回的keywords是字符串，这里转换成数组
        let keywords = hotel.keywords;
        let keyArray = keywords.split(",");
        hotel.keywords = keyArray;
        // 返回的services是字符串，这里转换成数组
        let services = hotel.services;
        let serviceArray = services.split(",");
        hotel.services = serviceArray;
      });
    },
    selectKeyword(value) {
      this.keywordsList.push(value);
    },
    deleteKeyword(index) {
      this.keywordsList.splice(index, 1);
    },
  },
};
</script>

<style>
.main_content {
  background-color: #f5f7fa;
  padding: 15px 100px;
  margin-top: 15px;
}
</style>