// 酒店列表
<template>
  <div class="hotel_list_layout">
    <div class="keywords_layout">
      <el-tag v-for="(k, index) in keywords" :key="index"
        >{{ k }}
        <i class="iconfont">&#xe602;</i>
      </el-tag>
      <button id="clearAll">清除</button>
    </div>
    <HotelCardComponent
      :hotelList="hotelList"
      :isShow="true"
    ></HotelCardComponent>
  </div>
</template>

<script>
import HotelCardComponent from "./HotelCardComponent.vue";
export default {
  name: "HotelList",
  components: { HotelCardComponent },
  data() {
    return {
      keywords: ["迪士尼乐园"],
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
        },
        {
          hotelName: "上海国际旅游度假区融侨酒店",
          pic: "https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg",
          rate: 4.6,
          price: 667,
          keywords: ["迪士尼", "浦东国际机场"],
          service: ["桌球室", "接机服务", "免费停车", "行李寄存"],
        },
        {
          hotelName: "原舍青荚民宿(浦东星火店)",
          pic: "https://dimg04.c-ctrip.com/images/0205v12000a91u8a4362F_R_300_225_R5_Q70_D.jpg",
          rate: 5,
          price: 1804,
          keywords: ["外滩", "上海站"],
          service: ["桌球室", "接机服务", "免费停车", "行李寄存"],
        },
      ],
    };
  },
};
</script>

<style>
.hotel_list_layout {
  margin: 30px 0;
}
.hotel_list_layout .keywords_layout {
  padding: 15px;
  background-color: white;
}
/* 关键字展示区域 */
.keywords_layout .el-tag,
.hotel_card_left_info .hotel_service_tag .el-tag {
  cursor: pointer;
  margin-right: 5px;
}
.keywords_layout .el-tag:hover {
  background-color: white;
}
.keywords_layout .iconfont {
  font-size: 13px;
}
.keywords_layout button#clearAll {
  border: none;
  background: none;
  color: #409eff;
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
}
</style>