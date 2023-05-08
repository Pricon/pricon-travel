<template>
  <div>
    <div class="room_card_layout" v-for="(room, index) in rooms" :key="index">
      <div class="room_card_left_middle">
        <div class="room_card_left">
          <img :src="room.pic" />
          <div class="room_name">{{ room.name }}</div>
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
        <div>
          <button class="bt_reserve" @click="reserve(room)">预订</button>
          <el-dialog title="确认订单信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="酒店名称:">
                <span>{{ form.hotelName }}</span>
              </el-form-item>
              <el-form-item label="入住日期:">
                <span
                  >{{ form.start_end_date[0] }}&nbsp;至&nbsp;{{
                    form.start_end_date[1]
                  }}&nbsp; {{ form.days }}晚/{{ form.roomNumber }}间
                </span>
              </el-form-item>
              <el-form-item label="房间类型:">
                <span>{{ form.roomName }}</span>
              </el-form-item>
              <el-form-item label="价格:">
                <span>¥{{ form.price }}</span>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitForm(form)"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: ["rooms", "searchInfo"],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        orderDate: "", //预订时间
        hotelName: "",
        start_end_date: [], //入住时间
        days: 0,
        roomNumber: 0,
        roomName: 0,
        price: 0,
        status: "已完成",
      },
    };
  },
  methods: {
    reverseTime(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 < 10 ? "0" + date.getMonth() : date.getMonth() + 1;
      let day = date.getDate();
      return year + "-" + month + "-" + day;
    },
    reserve(roomInfo) {
      this.dialogFormVisible = true;
      this.form.hotelName = roomInfo.hotelName;
      this.form.start_end_date[0] = this.reverseTime(this.searchInfo.startTime);
      this.form.start_end_date[1] = this.reverseTime(this.searchInfo.endTime);
      this.form.days =
        (this.searchInfo.endTime - this.searchInfo.startTime) /
        (3600 * 1000 * 24);
      this.form.roomNumber = this.searchInfo.roomNumber;
      this.form.roomName = roomInfo.name;

      this.form.price = this.form.days * roomInfo.price * this.form.roomNumber;
    },
    async submitForm(form) {
      let accounter = localStorage.getItem("accounter");

      let date = Date.now();
      this.form.orderDate = this.reverseTime(date);

      let res = await this.$post("/hotels/reserve", {
        form: form,
        accounter: accounter,
      });
      if (res.code == 0 && res.msg == "success") {
        this.dialogFormVisible = false;
        this.$alert("预订成功！", {
          confirmButtonText: "确定",
        });
      } else {
        this.dialogFormVisible = false;
        this.$alert("预订失败，请重新预订！", {
          confirmButtonText: "确定",
        });
      }
    },
  },
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