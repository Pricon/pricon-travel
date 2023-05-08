// 选择酒店关键字组件
<template>
  <div class="keyword_container">
    <dl class="position_filter">
      <dt>位置区域</dt>
      <dd>
        <el-tabs v-model="activeName">
          <el-tab-pane label="热门筛选" name="first">
            <div>
              <el-tag
                v-for="(item, index) in hot"
                :key="index"
                @click="updateKeyword('area', item)"
                >{{ item }}</el-tag
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="商业区" name="second">
            <div
              class="business_aera_tag"
              v-for="(item, index) in bus"
              :key="index"
              @click="updateKeyword('area', item)"
            >
              <div class="business_aera_tag_title">{{ item.businessArea }}</div>
              <div class="business_aera_tag_popularity">
                <span>{{ item.popularity }}</span
                >旅客选择
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="机场车站" name="third">
            <div>
              <el-tag
                v-for="(item, index) in airStation"
                :key="index"
                @click="updateKeyword('area', item)"
                >{{ item }}</el-tag
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="行政区" name="fourth">
            <div>
              <div>
                <el-tag
                  v-for="(item, index) in adminArea"
                  :key="index"
                  @click="updateKeyword('area', item)"
                  >{{ item }}</el-tag
                >
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </dd>
    </dl>
    <dl class="price_filter">
      <dt>星级价格</dt>
      <dd>
        <el-tag
          v-for="(item, index) in hotelLevel"
          :key="index + item"
          @click="updateKeyword('level', item)"
          >{{ item }}</el-tag
        >
      </dd>
    </dl>
    <dl class="advanced_filter">
      <dt>高级筛选</dt>
      <dd>
        <div>
          <el-tabs v-model="advancedName">
            <el-tab-pane label="评分" name="first">
              <el-tag
                v-for="(item, index) in advanced.level"
                :key="index + item"
                @click="updateKeyword('advanced.rate', item)"
                >{{ item }}</el-tag
              >
            </el-tab-pane>
            <el-tab-pane label="房型" name="second">
              <el-tag
                v-for="(item, index) in advanced.roomType"
                :key="index + item"
                @click="updateKeyword('advanced.roomType', item)"
                >{{ item }}</el-tag
              >
            </el-tab-pane>
            <el-tab-pane label="住宿类型" name="third">
              <el-tag
                v-for="(item, index) in advanced.hotelType"
                :key="index + item"
                @click="updateKeyword('advanced.hotelType', item)"
                >{{ item }}</el-tag
              >
            </el-tab-pane>
            <el-tab-pane label="早餐" name="fourth">
              <el-tag
                v-for="(item, index) in advanced.breakfast"
                :key="index + item"
                @click="updateKeyword('advanced.breakfast', item)"
                >不含早餐</el-tag
              >
            </el-tab-pane>
          </el-tabs>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "HotelKeyword",
  props: [
    "hot",
    "bus",
    "airStation",
    "adminArea",
    "selectKeyword",
    "deleteKeyword",
  ],
  data() {
    return {
      activeName: "first",
      advancedName: "first",
      hotelLevel: ["五星(钻)", "四星(钻)", "三星(钻)", "二星(钻)及以下"],
      advanced: {
        level: ["4.5分以上", "4分以上", "3.5分以上"],
        roomType: ["大床房", "双床房"],
        hotelType: ["酒店", "民宿", "青年旅舍"],
        breakfast: ["不含早餐", "单份早餐", "双份早餐"],
      },
    };
  },
  methods: {
    updateKeyword(type, value) {
      this.$emit("selectKeyword", type, value);
    },
  },
};
</script>

<style scoped>
.keyword_container {
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f2f5;
  box-shadow: -1px 2px 6px 0 rgb(15 41 77 / 12%);
  background-color: #f0f2f5;
}

.keyword_container dl:nth-child(1),
.keyword_container dl:nth-child(2) {
  border-bottom: 1px solid #d9ecff;
}
.keyword_container dt {
  background-color: #f0f2f5;
  padding: 15px 20px;
  font-size: 15px;
  flex-shrink: 0;
}
.keyword_container dd {
  margin-bottom: 10px;
  margin-inline-start: 20px;
}
.position_filter,
.price_filter,
.advanced_filter {
  display: flex;
  background-color: white;
  margin: 0;
  padding: 0;
}

/deep/.position_filter .el-tabs__nav-wrap::after {
  background-color: white;
}

.position_filter .el-tag,
.position_filter .business_aera_tag,
.advanced_filter .el-tag {
  margin: 0 5px;
  cursor: pointer;
}
.el-tag:hover {
  color: #3b71dd;
}
.position_filter .business_aera_tag {
  display: inline-block;
  width: 100px;
  background-color: #ecf5ff;
  border: 1px solid #d9ecff;
  border-radius: 5px;
  padding: 10px;
}

.business_aera_tag .business_aera_tag_title {
  font-size: 12px;
  text-align: center;
  color: #409eff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.business_aera_tag .business_aera_tag_popularity {
  font-size: 8px;
  color: #858d9c;
  text-align: center;
}
.business_aera_tag .business_aera_tag_popularity span {
  color: orange;
}

.price_filter .el-tag {
  margin: 10px 5px 0 5px;
  cursor: pointer;
}

.el-tabs {
  margin-top: 5px;
}
/deep/.advanced_filter .el-tabs .el-tabs__item::after {
  content: "\e60c";
  font-family: "iconfont";
  margin-left: 3px;
}
/deep/.advanced_filter .el-tabs__nav-wrap::after,
/deep/.advanced_filter .el-tabs__active-bar {
  display: none;
}
/deep/.advanced_filter .el-tabs__header {
  margin-bottom: 0;
}
</style>