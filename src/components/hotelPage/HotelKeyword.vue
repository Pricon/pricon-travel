// 选择酒店关键字组件
<template>
  <div class="keyword_container">
    <dl class="position_filter">
      <dt>位置区域</dt>
      <dd>
        <el-tabs v-model="activeName">
          <el-tab-pane label="热门筛选" name="first">
            <div>
              <el-tag v-for="(item, index) in city.上海.hot" :key="index">{{
                item
              }}</el-tag>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商业区" name="second">
            <div
              class="business_aera_tag"
              v-for="(item, index) in city.上海.businessAera"
              :key="index"
            >
              <div class="business_aera_tag_title">{{ item.area }}</div>
              <div class="business_aera_tag_popularity">
                <span>{{ item.popularity }}</span
                >旅客选择
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="机场车站" name="third">
            <div>
              <el-tag
                v-for="(item, index) in city.上海.airportOrStation"
                :key="index"
                >{{ item }}</el-tag
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="行政区" name="fourth">
            <div>
              <div>
                <el-tag
                  v-for="(item, index) in city.上海.administrativeArea"
                  :key="index"
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
      <dd></dd>
    </dl>
    <dl class="advaned_filter">
      <dt>高级筛选</dt>
      <dd></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "HotelKeyword",
  data() {
    return {
      activeName: "first",
      city: {
        上海: {
          hot: ["迪士尼度假区", "外滩", "浦东国际机场", "虹桥火车站", "陆家嘴"],
          businessAera: [
            { area: "迪士尼度假区", popularity: "25%" },
            { area: "人民广场区", popularity: "16.5%" },
            { area: "上海火车站区", popularity: "8.3%" },
            { area: "外滩核心区", popularity: "5.9%" },
            { area: "徐家汇区", popularity: "5.1%" },
          ],
          airportOrStation: ["虹桥火车站/机场", "浦东国际机场", "上海火车站"],
          administrativeArea: [
            "静安区",
            "徐汇区",
            "普陀区",
            "浦东新区",
            "黄埔区",
          ],
        },
        南京: {
          hot: [
            "夫子庙",
            "钟山风景区",
            "南京南站",
            "新街口",
            "玄武湖景区",
            "禄口国际机场",
          ],
          businessAera: [
            { area: "火车站区", popularity: "13%" },
            { area: "秦淮区", popularity: "18.9%" },
            { area: "禄口国际机场区", popularity: "8.2%" },
          ],
          airportOrStation: ["南京南站", "禄口国际机场", "南京站"],
          administrativeArea: [
            "秦淮区",
            "玄武区",
            "江宁区",
            "栖霞区",
            "浦口区",
          ],
        },
      },
    };
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

.keyword_container dt {
  background-color: #f0f2f5;
  padding: 15px 20px;
  font-size: 15px;
  flex-shrink: 0;
}
.position_filter,
.price_filter,
.advaned_filter {
  display: flex;
  background-color: white;
  margin: 0;
  padding: 0;
}

/deep/.position_filter .el-tabs__nav-wrap::after {
  background-color: white;
}

.position_filter .el-tag,
.position_filter .business_aera_tag {
  margin: 0 5px;
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
}
.business_aera_tag .business_aera_tag_popularity {
  font-size: 8px;
  color: #858d9c;
  text-align: center;
}
.business_aera_tag .business_aera_tag_popularity span {
  color: orange;
}
</style>