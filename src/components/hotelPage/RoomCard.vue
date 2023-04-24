<template>
  <div>
    <div class="room_card_layout" v-for="(room, index) in rooms" :key="index">
      <div class="room_card_left_middle">
        <div class="room_card_left">
          <img :src="room.pic" />
          <div class="room_name">{{ room.roomName }}</div>
          <div class="room_desc">
            <span v-for="desc in room.desc" :key="desc">{{ desc }}</span>
          </div>
          <button id="bt_room_details">查看客房信息</button>
        </div>
        <div class="room_card_middle">
          <div class="person">
            <i class="iconfont">&#xe8c8;</i>
            <i class="iconfont">&#xe8c8;</i>
          </div>
          <div class="breakfast">
            <span>2份早餐</span>
          </div>
          <div class="cancle_confirm">
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="订单预订成功后不可取消修改。若未入住将收取您全额房费(如用优惠券则以券后支付价为准）。"
            >
              <span slot="reference" id="notCancle">不可取消</span>
            </el-popover>
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="预订此房型后可快速确认订单。"
            >
              <span slot="reference" id="confirm">立即确认</span>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="room_card_right">
        <div class="room_price">{{ room.price }}</div>
        <div><button class="bt_reserve">预订</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: ["rooms"],
};
</script>

<style scoped>
.room_card_layout {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: white;
  padding: 25px;
}
.room_card_layout .room_card_left_middle {
  display: flex;
  flex-direction: row;
}
.room_card_layout .room_card_left {
  display: flex;
  flex-direction: column;
  max-width: 180px;
  border-right: 1px solid rgb(15 41 77 / 12%);
  padding-right: 30px;
}
.room_card_left img {
  width: 100px;
}
.room_card_left .room_name {
  font-size: 15px;
  font-weight: bold;
  color: #0f294d;
  margin: 5px 0;
}
.room_card_left .room_desc {
  color: #0f294d;
  font-size: 13px;
}
.room_card_left .room_desc span::after {
  font-family: "iconfont";
  content: "\e680";
}
.room_card_left .room_desc span:last-child:after {
  display: none;
}
.room_card_left #bt_room_details {
  border: none;
  background: none;
  color: #3a84ee;
  font-size: 10px;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  cursor: pointer;
}

.room_card_layout .room_card_middle {
  display: flex;
  align-items: center;
}
.room_card_layout .room_card_middle div {
  margin: 0 30px;
}
.room_card_middle .iconfont {
  font-size: 17px;
}
.room_card_middle .breakfast span,
.room_card_middle .cancle_confirm span {
  text-decoration: underline dotted;
  font-size: 14px;
  margin: 3px 0;
  cursor: pointer;
}

.room_card_middle .cancle_confirm {
  display: flex;
  flex-direction: column;
}
.room_card_middle .breakfast span,
.room_card_middle
  .cancle_confirm
  .el-popover__reference-wrapper
  .el-popover__reference#confirm {
  color: #06aebd;
}
.room_card_middle
  .cancle_confirm
  .el-popover__reference-wrapper
  .el-popover__reference#notCancle {
  color: #0f294d;
}

.room_card_layout .room_card_right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.room_card_right .room_price {
  color: #3a84ee;
  font-size: 23px;
  font-weight: bold;
}
.room_card_right .room_price::before {
  content: "¥";
}
.room_card_right .bt_reserve {
  cursor: pointer;
  background-color: orange;
  border: none;
  border-radius: 2px;
  color: white;
  font-size: 17px;
  width: 100px;
  height: 40px;
  margin-left: 20px;
}
</style>