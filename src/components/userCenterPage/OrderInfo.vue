<template>
  <div class="order_info_layout">
    <div class="title">全部订单</div>
    <div class="order_item" v-for="order in orderList" :key="order.id">
      <div class="order_item_title">
        <div class="title_div">
          <label>订单号:{{ order.orderNo }}</label>
          <span></span>
        </div>
        <div class="title_div">
          <label>预订日期:{{ order.orderDate }}</label>
          <span></span>
        </div>
        <!-- <button>删除订单</button> -->
      </div>
      <div class="order_item_info">
        <div class="info_left">
          <div class="hotel_name">{{ order.hotelName }}</div>
          <div class="date_and_days_and_roomnumber">
            {{ order.startTime }}&nbsp;至&nbsp;{{ order.endTime }}&nbsp;{{
              order.days
            }}晚/{{ order.roomNumber }}间
          </div>
          <div class="room_type">{{ order.roomName }}</div>
        </div>
        <div class="info_right">
          <div class="order_status">{{ order.status }}</div>
          <div class="price">
            在线付&nbsp;<span>{{ order.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderInfo",
  data() {
    return {
      orderList: [],
    };
  },
  async mounted() {
    let accounter = localStorage.getItem("accounter");

    let res = await this.$post("/usercenter/orderinfo", {
      accounter: accounter,
    });
    this.orderList = res.data;
  },
};
</script>

<style scoped>
.order_info_layout .title {
  background-color: #ecf5fe;
  font-size: 15px;
  font-weight: bold;
  padding: 8px;
  border-top: 2px solid #2d5db7;
  margin-bottom: 10px;
}
.order_info_layout .order_item {
  width: 100%;
  border: 1px solid rgba(128, 128, 128, 0.357);
  margin-bottom: 10px;
}
/* 头部布局 */
.order_item .order_item_title {
  background-color: #f6f6f6;
  font-size: 12px;
  padding: 5px 10px;
}
.order_item_title .title_div {
  display: inline-block;
  margin-right: 15px;
}
.order_item_title .title_div span {
  color: #3a84ee;
}
.order_item_title button {
  border: none;
  background: none;
  color: #3a84ee;
  font-size: 12px;
  cursor: pointer;
}

/* 预订酒店信息 */
.order_item_info {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
}
.order_item_info .info_left {
  font-size: 12px;
}
.order_item_info .info_left div {
  margin-bottom: 5px;
}
.info_left .hotel_name {
  font-size: 16px;
  font-weight: bold;
}

.info_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
}
.info_right .order_status {
  font-size: 15px;
  font-weight: bold;
  color: #3a84ee;
}
.info_right .price {
  font-size: 11px;
  color: grey;
}
.info_right .price span {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
.info_right .price span::before {
  content: "¥";
  color: black;
}
</style>