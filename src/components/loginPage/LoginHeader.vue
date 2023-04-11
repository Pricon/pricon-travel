// header栏布局
<template>
  <div class="login_header_layout">
    <div class="login_header_left_logo">
      <span>普利旅行</span>
    </div>
    <div class="login_header_right">
      <button @click="toNextPage('/')">首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader",
  methods: {
    toNextPage(path) {
      this.$router.push(path);
    },
  },
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
.login_header_left_logo::before {
  font-family: "iconfont";
  content: "\e605";
}

/* 右边首页布局 */
.login_header_right {
  margin-right: 250px;
}
.login_header_right button {
  font-size: 15px;
  color: black;
  background: none;
  border: none;
  margin-left: 100px;
  cursor: pointer;
}
.login_header_right button::before {
  font-family: "iconfont";
  content: "\e8b9";
  color: #5d77a4;
  font-size: 18px;
  margin-right: 5px;
}
.login_header_right button:hover,
.login_header_right button:hover::before {
  color: #3a84ee;
}
.login_header_right button .icon {
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
}
</style>