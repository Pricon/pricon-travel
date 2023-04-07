// 滑动广告组件
<template>
  <div class="advcontent_layout">
    <el-carousel height="100px">
      <el-carousel-item v-for="item in advList" :key="item.id">
        <img :src="'/images/' + item.picName" :alt="item.title" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ADVContent",
  data() {
    return {
      advList: [
        { id: 1, picName: "adv001.png", title: "五一出游酒店" },
        { id: 2, picName: "adv002.png", title: "趣看花花世界" },
        { id: 3, picName: "adv003.jpeg", title: "世纪换新，春生绿洲" },
      ],
    };
  },
};
</script>

<style>
.advcontent_layout {
  width: 740px;
  box-sizing: border-box;
  margin-top: 30px;
}
.advcontent_layout img {
  height: 100px;
  width: 740px;
}

.advcontent_layout .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.advcontent_layout .is-active .el-carousel__button {
  width: 25px;
}
</style>