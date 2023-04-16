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
    <div class="hotel_list">
      <div class="hotel_card" v-for="hotel in hotelList" :key="hotel.rate">
        <div class="hotel_card_left">
          <img :src="hotel.pic" />
          <div class="hotel_card_left_info">
            <div>
              <div class="hotel_name">{{ hotel.hotelName }}</div>
              <div class="hotel_rate">
                <el-rate v-model="hotel.rate" disabled text-color="#ff9900">
                </el-rate>
                <!-- <i class="iconfont">&#xe63f;</i> -->
              </div>
            </div>
            <div class="hotel_keywords">
              <span v-for="k in hotel.keywords" :key="k"
                >{{ k }}<i class="iconfont">&#xe680;</i></span
              >
            </div>
            <div class="hotel_service_tag">
              <el-tag v-for="s in hotel.service" :key="s" size="small">{{
                s
              }}</el-tag>
            </div>
          </div>
        </div>

        <div class="hotel_card_right">
          <div class="hotel_rate_value">
            <el-tag>{{ hotel.rate }}</el-tag>
          </div>
          <div class="hotel_price">
            <span>{{ hotel.price }}</span>
          </div>
          <button id="detail">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelList",
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

/* 酒店列表 */
.hotel_list_layout .hotel_list {
  margin-top: 20px;
}
.hotel_list .hotel_card {
  background-color: white;
  margin-bottom: 5px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.hotel_list .hotel_card:hover {
  box-shadow: -1px 2px 6px 0 rgb(15 41 77 / 12%);
}
.hotel_card_left {
  display: flex;
  align-content: center;
}
.hotel_card_left img {
  width: 200px;
  height: 180px;
}
.hotel_card_left .hotel_card_left_info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: flex-start;
  max-width: 300px;
}
.hotel_card_left_info .hotel_name {
  font-size: 18px;
  font-weight: bold;
}
.hotel_card_left_info .hotel_rate {
  margin-top: 5px;
}
.hotel_card_left_info .hotel_rate .el-rate__icon {
  font-size: 20px;
  margin: 0;
  margin-left: -3px;
  padding: 0;
}
.hotel_card_left_info .hotel_keywords {
  font-size: 13px;
  color: #455873;
  margin: 20px 0;
}
.hotel_card_left_info .hotel_keywords span:last-child i {
  display: none;
}

.hotel_card_left_info .hotel_service_tag .el-tag {
  background-color: white;
  border: 1px solid rgba(255, 111, 0, 0.5);
  color: #ff6f00;
  font-size: 12px;
}

.hotel_card_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.hotel_card_right .hotel_rate_value .el-tag {
  background-color: #5477c8;
  color: white;
  font-size: 15px;
  border: none;
}
.hotel_card_right .hotel_price {
  font-size: 23px;
  color: #3a84ee;
  margin-top: 50px;
  font-weight: bold;
}
.hotel_card_right .hotel_price::before {
  content: "¥";
}
.hotel_card_right .hotel_price::after {
  content: "起";
  color: black;
  font-size: 13px;
  font-weight: normal;
}
.hotel_card_right #detail {
  background-color: #3a84ee;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 17px;
  padding: 10px 17px;
  margin-top: 15px;
  cursor: pointer;
}
</style>