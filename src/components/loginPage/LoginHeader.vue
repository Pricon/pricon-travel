// header栏布局
<template>
  <div class="login_header_layout">
    <div class="login_header_left_logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tubiaozhizuomoban_shatan"></use>
      </svg>
      <span>普利旅行</span>
    </div>
    <div class="login_header_right">
      <a href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        首页
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader",
};
</script>

<style>
/* 整体布局 */
.login_header_layout {
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  line-height: 72px;
  text-align: center;
}
/* 左边logo布局 */
.login_header_left_logo {
  font-family: "站酷高端黑 Regular";
  font-size: 40px;
  color: #3a84ee;
  margin-left: 100px;
}

/* 右边首页布局 */
.login_header_right {
  margin-right: 250px;
}
.login_header_right a {
  font-size: 15px;
  text-decoration: none;
  color: black;
  margin-left: 100px;
}
.login_header_right a:hover {
  color: #3a84ee;
}
.login_header_right a .icon {
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
}
</style>