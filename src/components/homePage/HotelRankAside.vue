// 酒店口碑榜
<template>
  <div class="hotel_rank_layout">
    <el-carousel height="680px" arrow="never">
      <el-carousel-item v-for="item in rankList" :key="item.id">
        <el-image
          style="width: 450px; height: 680px"
          :src="item.pic"
          fit="cover"
          :alt="item.cityName"
        ></el-image>
        <div class="rank_layout">
          <div>{{ item.cityName }}酒店口碑榜</div>
          <div class="rank">
            <div
              class="rank_item"
              v-for="(hotel, index) in item.hotels"
              :key="index"
            >
              <el-image
                style="width: 45px; height: 45px"
                :src="hotel.pic"
                fit="cover"
              ></el-image>
              <div class="hotel_info">
                <div>{{ hotel.hotelName }}</div>
                <div>{{ hotel.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HotelRankAside",
  data() {
    return {
      rankList: [
        {
          id: 1,
          cityName: "三亚",
          pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Ffa92f76c-436a-427f-8338-2ba7b7c03433%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683517032&t=603aa040d42bd3c9599066ae9d07ba3b",
          hotels: [
            {
              hotelName: "三亚凤凰岛度假酒店",
              price: 859,
              pic: "https://dimg04.c-ctrip.com/images/200h1c000001d89i60997_R_300_225_R5_Q70_D.jpg",
            },
            {
              hotelName: "三亚亚特兰蒂斯就酒店",
              price: 1899,
              pic: "https://dimg04.c-ctrip.com/images/02023120009bzn4xu3318_R_300_225_R5_Q70_D.jpg",
            },
            {
              hotelName: "三亚红树林度假世界",
              price: 1599,
              pic: "https://dimg04.c-ctrip.com/images/200s1900000169opw2822_R_600_400_R5_D.jpg",
            },
          ],
        },
        {
          id: 2,
          cityName: "厦门",
          pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe648a137-bcd6-49f7-9e64-a7fa1d107aa4%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683512749&t=f644ea12c9bc2088dd041a19eee7f7d7",
          hotels: [
            {
              hotelName: "厦门W酒店",
              price: 1409,
              pic: "https://dimg04.c-ctrip.com/images/02067120009cusiv3A67E_W_1080_808_R5_D.jpg",
            },
            {
              hotelName: "厦门特房波特曼七星湾酒店·曦海",
              price: 100,
              pic: "https://dimg04.c-ctrip.com/images/1mc4b12000ar7i4nw093A_R_600_400_R5_D.jpg",
            },
            {
              hotelName: "厦门日月谷温泉度假村",
              price: 958,
              pic: "https://dimg04.c-ctrip.com/images/200d14000000vxk6q8EF4_R_600_400_R5_D.jpg",
            },
          ],
        },
        {
          id: 3,
          cityName: "澳门",
          pic: "https://img.zcool.cn/community/010ba35832eb75a8012060c8f6e422.JPG@1280w_1l_2o_100sh.jpg",
          hotels: [
            {
              hotelName: "澳门伦敦人酒店",
              price: 9310,
              pic: "https://dimg04.c-ctrip.com/images/02035120009hfit39E290_R_600_400_R5_D.jpg",
            },
          ],
        },
        {
          id: 4,
          cityName: "拉萨",
          pic: "https://www.xinhuanet.com/politics/2015-09/15/128230888_14422845347911n.jpg",
          hotels: [
            {
              hotelName: "拉萨布达拉宫广场亚朵酒店",
              price: 625,
              pic: "https://dimg04.c-ctrip.com/images/1mc0a12000ar0vwmg5530_R_600_400_R5_D.jpg",
            },
            {
              hotelName: "古藏殊华供养客栈",
              price: 449,
              pic: "https://dimg04.c-ctrip.com/images/0204i120009elkfrn0B27_R_300_225_R5_Q70_D.jpg",
            },
            {
              hotelName: "拉萨五年一班民宿",
              price: 399,
              pic: "https://dimg04.c-ctrip.com/images/20071600000101sthAE2A_R_300_225_R5_Q70_D.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
/* 口碑排行榜整体布局 */
.hotel_rank_layout {
  position: sticky;
  right: 0;
  top: 0;
  width: 425px;
  height: 680px;
  margin-right: 4vw;
  margin-left: 20px;
}

/* 走马灯内部布局 */
.hotel_rank_layout .el-carousel {
  border-radius: 15px;
}
.hotel_rank_layout .el-carousel img {
  transition: 0.5s;
  position: relative;
}

/* 导航栏整体布局 */
.hotel_rank_layout .el-carousel__indicators {
  position: absolute;
  top: 60px;
  left: 75px;
  z-index: 10000;
}
/* 导航栏按钮布局 */
.hotel_rank_layout .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.hotel_rank_layout .is-active .el-carousel__button {
  width: 45px;
}

/* 排行榜整体布局 */
.rank_layout {
  display: flex;

  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10000;
}
.rank_layout > div:first-child {
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 180px;
}

.rank {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

/* 每个item的内部布局 */
.rank .rank_item {
  width: 180px;
  height: 50px;
  background-color: rgba(240, 238, 238, 0.55);
  margin: 5px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 3px;
}

.rank_item .hotel_info {
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.418);
}
.rank .rank_item img {
  border-radius: 5px;
}

.rank_item .hotel_info div:first-child {
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 120px;
}

.hotel_info div:last-child {
  text-align: right;
  font-size: 15px;
}
.hotel_info div:last-child::before {
  content: "¥";
  font-size: 5px;
}
.hotel_info div:last-child::after {
  content: ".0起";
}
</style>