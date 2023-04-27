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
  props: ["hotelList"],
  components: { HotelCardComponent },
  data() {
    return {
      keywords: ["迪士尼乐园"],
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