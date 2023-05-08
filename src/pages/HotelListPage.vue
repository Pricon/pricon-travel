// 酒店搜索列表页面
<template>
  <div class="hotel_list">
    <HeaderAndSearch
      :isLogin="isLogin"
      :isHome="false"
      :searchInfo="searchInfo"
      @changeCity="changeCity"
    ></HeaderAndSearch>
    <div class="main_content">
      <HotelKeyword
        :hot="keywordsArea.hotArea"
        :bus="keywordsArea.businessArea"
        :airStation="keywordsArea.airportOrStation"
        :adminArea="keywordsArea.administrativeArea"
        @selectKeyword="selectKeyword"
      ></HotelKeyword>
      <HotelList
        :hotelList="hotelList"
        :keywords="keywords"
        @deleteKeyword="deleteKeyword"
        @clearAll="clearAll"
        @toHotelDetail="toHotelDetail"
      ></HotelList>
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
      keywordsList: {
        area: "",
        level: [],
        advanced: {
          rate: [],
          roomType: [],
          hotelType: [],
          breakfast: [],
        },
      },
      keywordsArea: {},
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
    keywords() {
      let arr = [];
      let area = this.keywordsList.area;
      let level = this.keywordsList.level;
      let advanced = this.keywordsList.advanced;
      if (area) {
        arr.push(area);
      }
      level.forEach((e) => {
        arr.push(e);
      });
      advanced.rate.forEach((e) => {
        arr.push(e);
      });
      advanced.roomType.forEach((e) => {
        arr.push(e);
      });
      advanced.hotelType.forEach((e) => {
        arr.push(e);
      });
      advanced.breakfast.forEach((e) => {
        arr.push(e);
      });
      return arr;
    },
  },
  created() {
    if (this.$route.query.length != 0) {
      this.searchInfo.destination = this.$route.query.destination;
      this.searchInfo.startTime = parseInt(this.$route.query.startTime);
      this.searchInfo.endTime = parseInt(this.$route.query.endTime);
      this.searchInfo.roomNumber = parseInt(this.$route.query.roomNumber);
      this.searchInfo.adultNumber = parseInt(this.$route.query.adultNumber);
      this.searchInfo.childNumber = parseInt(this.$route.query.childNumber);
      this.searchInfo.hotelLevel = this.$route.query.hotelLevel;
      this.searchInfo.keywords = this.$route.query.keywords;
    }
  },
  async mounted() {
    // 请求酒店列表
    let res = await this.$post("/hotels/list", {
      city: this.searchInfo.destination,
    });

    res.data.forEach((hotel) => {
      // 返回的keywords是字符串，这里转换成数组
      let keywords = hotel.keywords;
      let keyArray = keywords.split(",");
      hotel.keywords = keyArray;
      // 返回的services是字符串，这里转换成数组
      let services = hotel.services;
      let serviceArray = services.split(",");
      hotel.services = serviceArray;
    });
    this.hotelList = res.data;

    // 关键字（热门区域、商圈、机场车站、行政区）
    let keywordsRes = await this.$post("/hotels/keywords", {
      city: this.searchInfo.destination,
    });

    this.keywordsArea = keywordsRes.data;
  },
  methods: {
    async changeCity(value) {
      // 请求酒店列表
      this.searchInfo.destination = value;
      let res = await this.$post("/hotels/list", {
        city: value,
      });
      this.hotelList = res.data;

      res.data.forEach((hotel) => {
        // 返回的keywords是字符串，这里转换成数组
        let keywords = hotel.keywords;
        let keyArray = keywords.split(",");
        hotel.keywords = keyArray;
        // 返回的services是字符串，这里转换成数组
        let services = hotel.services;
        let serviceArray = services.split(",");
        hotel.services = serviceArray;
      });

      // 关键字（热门区域、商圈、机场车站、行政区）
      let keywordsRes = await this.$post("/hotels/keywords", {
        city: value,
      });

      this.keywordsArea = keywordsRes.data;
    },
    selectKeyword(type, value) {
      // 更新关键字
      if (type == "area") {
        // 如果是区域，只能选择一个tag
        this.keywordsList.area = value;
      } else if (type == "level") {
        // 可以选择多个tag
        if (-1 == this.keywordsList.level.indexOf(value)) {
          this.keywordsList.level.push(value);
        }
      } else if (type.includes("advanced")) {
        let arr = type.split(".");
        let advanedType = arr[1];
        if (-1 == this.keywordsList.advanced[advanedType].indexOf(value)) {
          this.keywordsList.advanced[advanedType].push(value);
        }
      }

      // 根据关键字获取酒店列表
      this.getHotelList(this.keywordsList);
    },
    deleteKeyword(item) {
      if (item == this.keywordsList.area) {
        this.keywordsList.area = "";
      } else if (-1 != this.keywordsList.level.indexOf(item)) {
        let index = this.keywordsList.level.indexOf(item);
        this.keywordsList.level.splice(index, 1);
      } else if (-1 != this.keywordsList.advanced.rate.indexOf(item)) {
        let index = this.keywordsList.advanced.rate.indexOf(item);
        this.keywordsList.advanced.rate.splice(index, 1);
      } else if (-1 != this.keywordsList.advanced.roomType.indexOf(item)) {
        let index = this.keywordsList.advanced.roomType.indexOf(item);
        this.keywordsList.advanced.roomType.splice(index, 1);
      } else if (-1 != this.keywordsList.advanced.hotelType.indexOf(item)) {
        let index = this.keywordsList.advanced.hotelType.indexOf(item);
        this.keywordsList.advanced.hotelType.splice(index, 1);
      } else if (-1 != this.keywordsList.advanced.breakfast.indexOf(item)) {
        let index = this.keywordsList.advanced.breakfast.indexOf(item);
        this.keywordsList.advanced.breakfast.splice(index, 1);
      }
      // 根据关键字获取酒店列表
      this.getHotelList(this.keywordsList);
    },
    clearAll() {
      this.keywordsList = {
        area: "",
        level: [],
        advanced: {
          rate: [],
          roomType: [],
          hotelType: [],
          breakfast: [],
        },
      };
      this.getHotelList(this.keywordsList);
    },
    async getHotelList(kw) {
      let res = await this.$post("/hotels/list", {
        city: this.searchInfo.destination,
        area: kw.area,
        level: kw.level,
        advanced: kw.advanced,
      });
      this.hotelList = res.data;

      res.data.forEach((hotel) => {
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
    toHotelDetail(hotel) {
      this.$router.push({
        path: "/hotels/details",
        query: {
          type: "jump",
          destination: this.searchInfo.destination,
          startTime: this.searchInfo.startTime,
          endTime: this.searchInfo.endTime,
          roomNumber: this.searchInfo.roomNumber,
          adultNumber: this.searchInfo.adultNumber,
          childNumber: this.searchInfo.childNumber,
          hotelLevel: this.searchInfo.hotelLevel,
          keywords: this.searchInfo.keywords,
          hotelName: hotel.name,
          hotelRate: hotel.rate,
          hotelKeyword: hotel.keywords,
          hotelServices: hotel.services,
          hotelPic: hotel.pic,
          hotelPrice: hotel.price,
        },
      });
    },
  },
  async activated() {
    this.searchInfo.destination = this.$route.query.destination;
    this.searchInfo.startTime = parseInt(this.$route.query.startTime);
    this.searchInfo.endTime = parseInt(this.$route.query.endTime);
    this.searchInfo.roomNumber = parseInt(this.$route.query.roomNumber);
    this.searchInfo.adultNumber = parseInt(this.$route.query.adultNumber);
    this.searchInfo.childNumber = parseInt(this.$route.query.childNumber);
    this.searchInfo.hotelLevel = this.$route.query.hotelLevel;
    this.searchInfo.keywords = this.$route.query.keywords;

    // 请求酒店列表
    let res = await this.$post("/hotels/list", {
      city: this.searchInfo.destination,
    });

    res.data.forEach((hotel) => {
      // 返回的keywords是字符串，这里转换成数组
      let keywords = hotel.keywords;
      let keyArray = keywords.split(",");
      hotel.keywords = keyArray;
      // 返回的services是字符串，这里转换成数组
      let services = hotel.services;
      let serviceArray = services.split(",");
      hotel.services = serviceArray;
    });
    this.hotelList = res.data;

    // 关键字（热门区域、商圈、机场车站、行政区）
    let keywordsRes = await this.$post("/hotels/keywords", {
      city: this.searchInfo.destination,
    });

    this.keywordsArea = keywordsRes.data;
  },
};
</script>

<style>
.hotel_list {
  overflow-x: scroll;
  min-width: 1280px;
  height: 100%;
}
.main_content {
  background-color: #f5f7fa;
  padding: 15px 100px;
  margin-top: 15px;
}
</style>