<template>
  <div class="content_header">
    <!-- logo以及搜索框 -->
    <div class="logo_search_layout">
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiaozhizuomoban_shatan"></use>
        </svg>
        <span>普利旅行</span>
      </div>
      <!-- 使用element-ui中的input搜索框 -->
      <div>
        <el-input placeholder="搜索任何旅游相关" class="input-with-select">
          <el-button slot="append" class="search-button">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo1"></use>
            </svg>
          </el-button>
        </el-input>
      </div>
    </div>

    <!-- 登陆、注册按钮 -->
    <div class="login_register_layout">
      <button class="login">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-user"></use>
        </svg>
        <span>请登录</span>
      </button>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-anjianfengexian"></use>
      </svg>
      <button class="register">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContent",
};
</script>

<style scoped>
/* header栏整体布局 */
.content_header {
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
}
@font-face {
  font-family: "站酷高端黑 Regular";
  font-weight: 400;
  src: url("//at.alicdn.com/wf/webfont/E7XH88YtQlo7/xfIQzVRYF3A9.woff2")
      format("woff2"),
    url("//at.alicdn.com/wf/webfont/E7XH88YtQlo7/umIRyPan1MHq.woff")
      format("woff");
  font-display: swap;
}
/* logo、搜索栏相关布局 */
.logo_search_layout {
  height: 100%;
  display: flex;
  line-height: 72px;
}

.logo_search_layout .logo {
  font-family: "站酷高端黑 Regular";
  font-size: 40px;
  color: #3a84ee;
  margin-right: 50px;
}
.logo_search_layout .input-with-select {
  width: 300px;
}
.logo_search_layout .search-button {
  background-color: #3a84ee;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* 登陆、注册按钮相关布局 */
.login_register_layout {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login_register_layout .login {
  width: 90px;
  height: 30px;
  background-color: #f3f8fd;
  border-style: none;
  border-radius: 15px;
  display: flex;
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
  margin-right: 5px;
}

.login .icon {
  width: 23px;
  height: 23px;
  padding-right: 5px;
  margin-top: 3px;
}

.login:hover {
  color: #3a84ee;
}

.login_register_layout .register {
  border-style: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  line-height: 30px;
  /* margin-left: 20px; */
}
.login_register_layout .register:hover {
  color: #3a84ee;
}
</style>