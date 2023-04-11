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
          start-placeholder="开始日期"
          end-placeholder="结束日期"
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
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >狮子头</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >螺蛳粉</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check"
                >蚵仔煎</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 分割线 -->
        <el-divider direction="vertical"></el-divider>
        <!-- 选择酒店级别 -->
        <div class="hotel_level">
          <div>酒店级别</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >狮子头</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >螺蛳粉</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check"
                >蚵仔煎</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
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
      <button>
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
  },
  computed: {
    days() {
      return (
        (this.start_end_date[1] - this.start_end_date[0]) / (3600 * 1000 * 24)
      );
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

.details_layout button {
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
.details_layout button::before {
  font-family: "iconfont";
  content: "\e632";
}
</style>