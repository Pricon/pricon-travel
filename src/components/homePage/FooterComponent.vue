// 网页页脚
<template>
  <div>
    <footer>
      <div class="footer_info_layout">
        <div>
          <span
            ><a href="#">Copyright©</a>2022-2023, <a href="#">logviv.com</a>.
            All rights reserved.</span
          >
        </div>
        <div>
          <span>违法和不良信息举报电话021-24193325</span>
          <el-divider direction="vertical"></el-divider>
          <span>全国旅游投诉热线12345</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent.vue",
};
</script>

<style scoped>
footer {
  background-color: #f8fafd;
  padding: 50px 0;
  margin-top: 80px;
}
.footer_info_layout {
  width: 100%;
  height: 100%;
  text-align: center;
}
.footer_info_layout,
.footer_info_layout a:link,
.footer_info_layout a:visited {
  color: #999;
  font-size: 12px;
  margin: 0 auto;
  text-decoration: none;
}
.footer_info_layout a:hover {
  color: #3377ed;
}
.footer_info_layout div {
  margin-bottom: 5px;
}
</style>