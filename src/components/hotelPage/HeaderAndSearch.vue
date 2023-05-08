<template>
  <div class="hotels_layout">
    <HeaderComponent :isLogin="isLogin" :isHome="isHome"></HeaderComponent>
    <div class="hotel_search_layout">
      <div class="hotel_search">
        <!-- 选择目的地、酒店 -->
        <div class="destination">
          <div class="label_style">目的地</div>
          <!-- <el-input
            v-model="destination"
            placeholder="输入城市或者酒店名称"
            clearable
            size="small"
          >
          </el-input> -->
          <el-select
            v-model="destination"
            placeholder="请选择城市"
            size="small"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="select_date">
          <div class="label_style">入住时间</div>
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
        <el-divider direction="vertical"></el-divider>

        <!-- 选择房间数量和入住人数 -->
        <div class="rooms_and_pepole_number">
          <div class="label_style">房间以及住客</div>
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
        <div class="input_keywords">
          <div class="label_style">关键字（选填）</div>
          <el-input
            v-model="keywords"
            placeholder="机场/火车站/酒店名称"
            clearable
            size="small"
          >
          </el-input>
        </div>
      </div>
      <button class="bt_search iconfont">&#xe632;</button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../homePage/HeaderComponent.vue";
export default {
  name: "HeaderAndSearch",
  props: ["isLogin", "isHome", "searchInfo", "changeCity", "updateSearchInfo"],
  components: { HeaderComponent },
  data() {
    return {
      destination: "",
      keywords: "",
      start_end_date: [],
      days: 0,
      pickerOptions: {
        // 默认小于当前时间的日期不可选择
        disabledDate(time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24;
        },
      },
      rooms: {
        roomNumber: 1,
        adultNumber: 1,
        childNumber: 0,
        isShowDropdown: false,
      },
      options: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Hangzhou",
          label: "杭州",
        },
      ],
    };
  },
  methods: {
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
  mounted() {
    this.destination = this.searchInfo.destination;
    this.start_end_date[0] = this.searchInfo.startTime;
    this.start_end_date[1] = this.searchInfo.endTime;
    this.days =
      (this.start_end_date[1] - this.start_end_date[0]) / (3600 * 1000 * 24);
    this.rooms.roomNumber = this.searchInfo.roomNumber;
    this.rooms.adultNumber = this.searchInfo.adultNumber;
    this.rooms.childNumber = this.searchInfo.childNumber;
    this.keywords = this.searchInfo.keywords;
    if (this.start_end_date[0] == 0 && this.start_end_date[1] == 0) {
      this.start_end_date = this.getNowTime();
    }
  },
  watch: {
    destination(newVal, oldVal) {
      if (oldVal == undefined || oldVal.length != 0) {
        this.$emit("changeCity", newVal);
        this.$emit("updateSearchInfo", "destination", newVal);
      }
    },
    start_end_date(newVal) {
      this.days = (newVal[1] - newVal[0]) / (3600 * 1000 * 24);
      this.$emit("updateSearchInfo", "startTime", newVal[0]);
      this.$emit("updateSearchInfo", "endTime", newVal[1]);
    },
    "searchInfo.destination"(newVal) {
      this.destination = newVal;
    },
    "rooms.roomNumber"(newVal) {
      this.$emit("updateSearchInfo", "roomNumber", newVal);
    },
    "rooms.adultNumber"(newVal) {
      this.$emit("updateSearchInfo", "adultNumber", newVal);
    },
    "rooms.childNumber"(newVal) {
      this.$emit("updateSearchInfo", "childNumber", newVal);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.hotels_layout {
  padding: 0 100px;
}
.hotel_search_layout {
  display: flex;
  margin-top: 15px;
}
.hotel_search_layout .hotel_search {
  width: calc(100% - 80px);
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  /* padding: 10px 15px 15px 15px; */
  border: 1px solid #dbdfe5;
}
.hotel_search .destination,
.select_date,
.rooms_and_pepole_number,
.input_keywords {
  padding: 10px;
}
.hotel_search .label_style {
  font-size: 15px;
  color: grey;
}

.el-divider--vertical {
  height: 100%;
}
/* 修改日期选择器中间显示天数的元素长度 */
/deep/ .select_date .el-range-separator {
  width: 10%;
}

.rooms_and_pepole_number {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.rooms_and_pepole_number .dropdown {
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
  left: -40px;
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

.hotel_search_layout .bt_search {
  width: 80px;
  height: 80px;
  background-color: #3377ed;
  font-size: 25px;
  color: white;
  border: 1px solid #3377ed;
  cursor: pointer;
}
.hotel_search_layout .bt_search:hover {
  background-color: #3b71dd;
}
</style>