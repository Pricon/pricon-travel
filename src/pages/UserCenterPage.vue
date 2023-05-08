<template>
  <div class="user_center_layout">
    <LoginHeader></LoginHeader>
    <div class="container">
      <div class="left_nav">
        <el-col>
          <el-menu
            default-active="/usercenter/userinfo"
            class="el-menu-vertical-demo"
            background-color="#f8fbff"
            text-color="#000000"
            active-text-color="#3a84ee"
            :default-openeds="['/usercenter', '/usercenter/userinfo']"
            :router="true"
          >
            <el-submenu index="/usercenter">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>个人中心</span>
              </template>
              <el-menu-item index="/usercenter/userinfo">我的信息</el-menu-item>
              <el-menu-item index="/usercenter/orderinfo"
                >我的订单</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <div class="right_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from "../components/loginPage/LoginHeader.vue";
export default {
  name: "UserCenterPage",
  components: { LoginHeader },
  data() {
    return {
      isEdit: false,
    };
  },
  computed: {
    isLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.user_center_layout .container {
  display: flex;
  margin: 0 100px;
  margin-top: 30px;
}
/* 左边导航 */
.container .left_nav {
  margin-right: 30px;
  height: 300px;
}
.container .left_nav .el-col {
  width: 200px;
  border: 1px solid #3a85ee3a;
  overflow: hidden;
}
.container .left_nav .el-menu {
  border-right: none;
}

/* 主内容 */
.container .right_content {
  margin-right: 50px;
  height: 300px;
  width: 100%;
}
</style>