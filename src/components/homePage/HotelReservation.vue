// 酒店预订组件
<template>
  <div class="hotel_reservation_layout">
    <!-- 标题文字 -->
    <div class="title_layout">
      <div>预订酒店</div>
      <div class="title_right">安心订，放心住</div>
    </div>
    <!-- 选择目的地和入住时间 -->
    <div class="positon_date_layout">
      <!-- 选择目的地、酒店 -->
      <div class="destination">
        <div>目的地/酒店名称</div>
        <el-input
          v-model="destination"
          placeholder="输入城市或者酒店名称"
          clearable
          size="small"
        >
        </el-input>
      </div>
      <!-- 分割线 -->
      <el-divider direction="vertical"></el-divider>

      <!-- 选择日期 -->
      <div class="select_date">
        <div>入住时间</div>
        <el-date-picker
          v-model="start_end_date"
          type="daterange"
          :range-separator="days + '晚'"
          start-placeholder="入住时间"
          end-placeholder="退房时间"
          size="small"
          format=" MM 月 dd 日"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
    </div>

    <!-- 房间以及人数、酒店等级、关键词 -->
    <div class="details_layout">
      <div class="details">
        <!-- 选择房间数量和入住人数 -->
        <div class="rooms_and_pepole_number">
          <div>房间以及住客人数</div>
          <div class="dropdown">
            <div class="dropdown-link" @click="changeDropdownDisplay('rooms')">
              <span>
                {{ rooms.roomNumber }}间，{{
                  rooms.adultNumber + rooms.childNumber
                }}位&nbsp;&nbsp;&nbsp;
              </span>
              <i class="iconfont" v-if="!rooms.isShowDropdown">&#xe60c;</i>
              <i
                class="iconfont"
                v-else-if="rooms.isShowDropdown"
                style="color: #3377ed"
                >&#xe606;</i
              >
            </div>
            <div class="dropdown_menu" v-show="rooms.isShowDropdown">
              <div class="dropdown_item">
                <div>房间</div>
                <div class="input_number">
                  <button
                    class="bt_decrease iconfont"
                    @click="decreaseRoomNumber()"
                  >
                    &#xe600;
                  </button>
                  <input
                    type="text"
                    v-model.number="rooms.roomNumber"
                    min="1"
                  />
                  <button
                    class="bt_increase iconfont"
                    @click="increaseRoomNumber()"
                  >
                    &#xeb89;
                  </button>
                </div>
              </div>
              <div class="dropdown_item">
                <div>成人</div>
                <div class="input_number">
                  <button
                    class="bt_decrease iconfont"
                    @click="decreaseAdultNumber()"
                  >
                    &#xe600;
                  </button>
                  <input
                    type="text"
                    v-model.number="rooms.adultNumber"
                    min="1"
                  />
                  <button
                    class="bt_increase iconfont"
                    @click="increaseAdultNumber()"
                  >
                    &#xeb89;
                  </button>
                </div>
              </div>
              <div class="dropdown_item">
                <div>儿童</div>
                <div class="input_number">
                  <button
                    class="bt_decrease iconfont"
                    @click="decreaseChildNumber()"
                  >
                    &#xe600;
                  </button>
                  <input
                    type="text"
                    v-model.number="rooms.childNumber"
                    min="0"
                  />
                  <button
                    class="bt_increase iconfont"
                    @click="increaseChildNumber()"
                  >
                    &#xeb89;
                  </button>
                </div>
              </div>
              <!-- <el-divider></el-divider>
              <button id="confirm" @click="hiddenDropdownMenu()">确定</button> -->
            </div>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider direction="vertical"></el-divider>
        <!-- 选择酒店级别 -->
        <div class="hotel_level">
          <div>酒店级别</div>
          <div class="dropdown">
            <div class="dropdown-link" @click="changeDropdownDisplay('level')">
              <span> {{ hotelLevel }}&nbsp;&nbsp;&nbsp; </span>
              <i class="iconfont" v-if="!level.isShowDropdown">&#xe60c;</i>
              <i
                class="iconfont"
                v-else-if="level.isShowDropdown"
                style="color: #3377ed"
                >&#xe606;</i
              >
            </div>
            <div class="dropdown_menu" v-show="level.isShowDropdown">
              <div @click="changIconStatus(2)" class="dropdown_item">
                二星（钻）及以下&nbsp;<i
                  class="iconfont"
                  style="color: #3377ed"
                  v-show="level.secondLevel"
                  >&#xe8e5;</i
                >
              </div>
              <div @click="changIconStatus(3)" class="dropdown_item">
                三星（钻）<i
                  class="iconfont"
                  style="color: #3377ed"
                  v-show="level.thirdLevel"
                  >&#xe8e5;</i
                >
              </div>
              <div @click="changIconStatus(4)" class="dropdown_item">
                四星（钻）<i
                  class="iconfont"
                  style="color: #3377ed"
                  v-show="level.fourthLevel"
                  >&#xe8e5;</i
                >
              </div>
              <div @click="changIconStatus(5)" class="dropdown_item">
                五星（钻）<i
                  class="iconfont"
                  style="color: #3377ed"
                  v-show="level.fifthLevel"
                  >&#xe8e5;</i
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider direction="vertical"></el-divider>
        <div class="input_keywords">
          <div>关键字（选填）</div>
          <el-input
            v-model="keywords"
            placeholder="机场/火车站/酒店名称"
            clearable
            size="small"
          >
          </el-input>
        </div>
      </div>
      <button id="bt_search">
        <span>搜索</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelReservation",
  data() {
    return {
      destination: "",
      keywords: "",
      pickerOptions: {
        // 默认小于当前时间的日期不可选择
        disabledDate(time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24;
        },
      },
      start_end_date: "",
      rooms: {
        roomNumber: 1,
        adultNumber: 1,
        childNumber: 0,
        isShowDropdown: false,
      },
      level: {
        secondLevel: false,
        thirdLevel: false,
        fourthLevel: false,
        fifthLevel: false,
        isShowDropdown: false,
      },
    };
  },
  mounted() {
    this.start_end_date = this.getNowTime();
  },
  methods: {
    //默认开始时间为当前时间，结束时间为当前时间的下一天（明天）
    getNowTime() {
      const start = Date.now();
      const end = Date.now() + 3600 * 1000 * 24;
      return [start, end];
    },
    changeDropdownDisplay(moduleName) {
      if (moduleName == "rooms") {
        this.rooms.isShowDropdown = !this.rooms.isShowDropdown;
      } else if (moduleName == "level") {
        this.level.isShowDropdown = !this.level.isShowDropdown;
      }
    },
    changIconStatus(iconLevel) {
      switch (iconLevel) {
        case 2:
          this.level.secondLevel = !this.level.secondLevel;
          break;
        case 3:
          this.level.thirdLevel = !this.level.thirdLevel;
          break;
        case 4:
          this.level.fourthLevel = !this.level.fourthLevel;
          break;
        case 5:
          this.level.fifthLevel = !this.level.fifthLevel;
          break;
        default:
          break;
      }
    },
    increaseRoomNumber() {
      this.rooms.roomNumber++;
    },
    decreaseRoomNumber() {
      if (this.rooms.roomNumber > 0) {
        this.rooms.roomNumber--;
      }
    },
    increaseAdultNumber() {
      this.rooms.adultNumber++;
      if (this.rooms.adultNumber / 2 > this.rooms.roomNumber) {
        this.rooms.roomNumber++;
      }
    },
    decreaseAdultNumber() {
      if (this.rooms.adultNumber > 0) {
        this.rooms.adultNumber--;
      }
      if (this.rooms.adultNumber / 2 < this.rooms.roomNumber) {
        this.rooms.roomNumber--;
      }
    },
    increaseChildNumber() {
      this.rooms.childNumber++;
      if (this.rooms.adultNumber == 0 && this.rooms.childNumber == 1) {
        this.rooms.roomNumber++;
      } else if (
        this.rooms.childNumber / 2 > this.rooms.adultNumber &&
        this.rooms.adultNumber != 0
      ) {
        this.rooms.roomNumber++;
      } else if (this.rooms.childNumber / 2 > this.rooms.roomNumber) {
        this.rooms.roomNumber++;
      }
    },
    decreaseChildNumber() {
      if (this.rooms.childNumber > 0) {
        this.rooms.childNumber--;
      }
      if (
        this.rooms.childNumber < this.rooms.adultNumber &&
        this.rooms.childNumber > 0
      ) {
        this.rooms.roomNumber--;
      }
    },
  },
  computed: {
    days() {
      return (
        (this.start_end_date[1] - this.start_end_date[0]) / (3600 * 1000 * 24)
      );
    },
    hotelLevel() {
      let str = "";
      if (this.level.secondLevel) {
        str += "二星（钻）及以下";
      }
      if (this.level.thirdLevel) {
        str += "三星（钻）";
      }
      if (this.level.fourthLevel) {
        str += "四星（钻）";
      }
      if (this.level.fifthLevel) {
        str += "五星（钻）";
      }

      if (str == "") {
        str = "不限";
      }
      return str;
    },
  },
};
</script>

<style scoped>
/* 酒店预定框整体布局 */
.hotel_reservation_layout {
  width: 740px;
  height: 260px;
  background-image: url("https://pic.90sheji.com/design/00/61/73/20/5d67504dbaccf.jpg%21/fh/465/quality/90/unsharp/true/compress/true/canvas/1000x465a0a0/cvscolor/FFFFFFFF");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 15px;
  border: 1px solid #c2dcf9;
  padding: 15px;
  box-sizing: border-box;
}
.title_layout {
  font-size: 25px;
  color: white;
  display: flex;
  justify-content: space-between;
}

.title_layout .title_right {
  font-family: "得意黑 斜体";
  color: #377dee;
}

/* 通用框 */
.positon_date_layout,
.details_layout .details {
  height: 75px;
  margin: auto 15px;
  background-color: white;
  border: 1px solid #c2dcf9;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}
/* 通用标题格式 */
.destination > div,
.select_date > div,
.details > div {
  color: gray;
}

/* 定位、选择日期栏 */
.destination,
.select_date {
  padding: 10px;
}

.el-divider--vertical {
  height: 50px;
  margin-top: 10px;
}
/* 修改日期选择器中间显示天数的元素长度 */
/deep/ .select_date .el-range-separator {
  width: 10%;
}

/* 其他选择（人数、酒店等级、关键词） */
.details_layout {
  display: flex;
  justify-content: space-between;
  margin: auto 15px;
}

.details_layout .details {
  width: 570px;
  margin: 0;
  display: flex;
}

.details .rooms_and_pepole_number,
.hotel_level,
.input_keywords {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.rooms_and_pepole_number .dropdown,
.hotel_level .dropdown {
  cursor: pointer;
  position: relative;
}
.dropdown-link {
  color: black;
  font-weight: bold;
}

/* 选择房间数量-下拉菜单 */
.rooms_and_pepole_number .dropdown_menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 33px;
  left: -18px;
  font-size: 15px;
  background-color: white;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid #e6f3fe;
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 10%);
  padding: 15px;
}
.rooms_and_pepole_number .dropdown_menu .dropdown_item {
  display: inline-flex;
  justify-content: space-between;
  font-size: 16px;
  width: 150px;
  padding-bottom: 10px;
  color: black;
}
.rooms_and_pepole_number .el-divider {
  margin: 0;
  margin-bottom: 10px;
}

.rooms_and_pepole_number .dropdown_item .input_number input {
  width: 15px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
}

.rooms_and_pepole_number .dropdown_item .input_number button.bt_decrease,
.rooms_and_pepole_number .dropdown_item .input_number button.bt_increase {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.rooms_and_pepole_number .dropdown_item .input_number button.iconfont {
  color: grey;
}
.rooms_and_pepole_number .dropdown_item .input_number button:hover {
  color: #3377ed;
}

/* 酒店级别 */
.hotel_level .dropdown-link {
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotel_level .dropdown_menu {
  position: absolute;
  top: 33px;
  left: -55px;
  font-size: 16px;
  background-color: white;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid #e6f3fe;
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 10%);
  padding: 15px;
  width: 150px;
}
.hotel_level .dropdown_menu .dropdown_item {
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}
.hotel_level .dropdown_menu .dropdown_item:hover {
  background-color: #e6f3fe;
}
/* 搜索按钮 */
.details_layout button#bt_search {
  width: 130px;
  height: 75px;
  margin-left: 10px;
  background-image: linear-gradient(to right, #48a0f2, #3377ed);
  border-style: none;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
.details_layout button#bt_search::before {
  font-family: "iconfont";
  content: "\e632";
}
</style>