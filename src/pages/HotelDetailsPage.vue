// 酒店预定信息展示页面
<template>
  <div class="hotel_details_layout">
    <HeaderAndSearch
      :isLogin="isLogin"
      :searchInfo="searchInfo"
      :isHome="false"
      @updateSearchInfo="updateSearchInfo"
    ></HeaderAndSearch>
    <div class="main_content">
      <HotelDetails
        :hotelInfo="[hotelInfo]"
        :roomInfo="roomInfo"
        :searchInfo="searchInfo"
      ></HotelDetails>
    </div>
  </div>
</template>

<script>
import HeaderAndSearch from "../components/hotelPage/HeaderAndSearch.vue";
import HotelDetails from "../components/hotelPage/HotelDetails.vue";

export default {
  name: "HotelDetailsPage",
  components: { HeaderAndSearch, HotelDetails },
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
      hotelInfo: {},
      roomInfo: {},
    };
  },
  async created() {
    // 获取登录状态
    let token = localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

    let type = this.$route.query.type;
    if (type == "jump") {
      this.searchInfo.destination = this.$route.query.destination;
      this.searchInfo.startTime = parseInt(this.$route.query.startTime);
      this.searchInfo.endTime = parseInt(this.$route.query.endTime);
      this.searchInfo.roomNumber = parseInt(this.$route.query.roomNumber);
      this.searchInfo.adultNumber = parseInt(this.$route.query.adultNumber);
      this.searchInfo.childNumber = parseInt(this.$route.query.childNumber);
      this.searchInfo.hotelLevel = this.$route.query.hotelLevel;
      this.searchInfo.keywords = this.$route.query.keywords;
      this.hotelInfo.name = this.$route.query.hotelName;
      this.hotelInfo.rate = parseInt(this.$route.query.hotelRate);
      this.hotelInfo.keywords = this.$route.query.hotelKeyword;
      this.hotelInfo.services = this.$route.query.hotelServices;
      this.hotelInfo.pic = this.$route.query.hotelPic;
      this.hotelInfo.price = this.$route.query.hotelPrice;
    } else if (type == "search") {
      this.hotelInfo.name = this.$route.query.hotelName;

      let res = await this.$post("/hotels/hotel", {
        hotelName: this.hotelInfo.name,
      });
      let info = res.data;
      let kwArray = info.keywords.split(",");
      let ssArray = info.services.split(",");
      this.roomInfo = res.data;
      this.hotelInfo.rate = info.rate;
      this.hotelInfo.keywords = kwArray;
      this.hotelInfo.services = ssArray;
      this.hotelInfo.pic = info.pic;
      this.hotelInfo.price = info.price;
    }
  },
  async mounted() {
    let res = await this.$post("/hotels/details", {
      hotelName: this.hotelInfo.name,
    });
    res.data.forEach((room) => {
      // 返回的keywords是字符串，这里转换成数组
      let desc = room.desc;
      let descArray = desc.split(",");
      room.desc = descArray;
    });
    this.roomInfo = res.data;
  },
  async activated() {
    // 获取登录状态
    let token = localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

    let type = this.$route.query.type;
    if (type == "jump") {
      this.searchInfo.destination = this.$route.query.destination;
      this.searchInfo.startTime = parseInt(this.$route.query.startTime);
      this.searchInfo.endTime = parseInt(this.$route.query.endTime);
      this.searchInfo.roomNumber = parseInt(this.$route.query.roomNumber);
      this.searchInfo.adultNumber = parseInt(this.$route.query.adultNumber);
      this.searchInfo.childNumber = parseInt(this.$route.query.childNumber);
      this.searchInfo.hotelLevel = this.$route.query.hotelLevel;
      this.searchInfo.keywords = this.$route.query.keywords;
      this.hotelInfo.name = this.$route.query.hotelName;
      this.hotelInfo.rate = parseInt(this.$route.query.hotelRate);
      this.hotelInfo.keywords = this.$route.query.hotelKeyword;
      this.hotelInfo.services = this.$route.query.hotelServices;
      this.hotelInfo.pic = this.$route.query.hotelPic;
      this.hotelInfo.price = this.$route.query.hotelPrice;
    } else if (type == "search") {
      this.hotelInfo.name = this.$route.query.hotelName;

      let res = await this.$post("/hotels/hotel", {
        hotelName: this.hotelInfo.name,
      });
      let info = res.data;
      let kwArray = info.keywords.split(",");
      let ssArray = info.services.split(",");
      this.roomInfo = res.data;
      this.hotelInfo.rate = info.rate;
      this.hotelInfo.keywords = kwArray;
      this.hotelInfo.services = ssArray;
      this.hotelInfo.pic = info.pic;
      this.hotelInfo.price = info.price;
    }

    let res = await this.$post("/hotels/details", {
      hotelName: this.hotelInfo.name,
    });
    res.data.forEach((room) => {
      // 返回的keywords是字符串，这里转换成数组
      let desc = room.desc;
      let descArray = desc.split(",");
      room.desc = descArray;
    });
    this.roomInfo = res.data;
  },
  methods: {
    updateSearchInfo(key, value) {
      this.searchInfo[key] = value;
    },
  },
};
</script>

<style scoped>
.hotel_details_layout {
  margin: 0;
  width: 100%;
  min-width: 1280px;
  height: 100%;
  box-sizing: border-box;
}
.main_content {
  background-color: #f5f7fa;
  margin-top: 15px;
  padding: 15px 100px;
}
</style>