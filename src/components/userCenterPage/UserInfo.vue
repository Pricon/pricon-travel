<template>
  <div class="user_info_layout">
    <div class="title">个人信息设置</div>
    <div class="user_info">
      <el-descriptions>
        <el-descriptions-item label="用户名">{{
          userInfo.accounter
        }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{
          userInfo.telephone
        }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{
          userInfo.email
        }}</el-descriptions-item>
        <el-descriptions-item label="性别">未设置</el-descriptions-item>
        <el-descriptions-item label="地址">未设置</el-descriptions-item>
      </el-descriptions>

      <div>
        <button class="exitLogin" @click="exit()">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {},
    };
  },
  async mounted() {
    let accounter = localStorage.getItem("accounter");

    let res = await this.$post("/usercenter/userinfo", {
      accounter: accounter,
    });
    this.userInfo = res.data;
  },
  methods: {
    exit() {
      this.$confirm("确认退出登录？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        localStorage.removeItem("accounter");
        localStorage.removeItem("token");
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
.user_info_layout .title {
  background-color: #ecf5fe;
  font-size: 15px;
  font-weight: bold;
  padding: 8px;
  border-top: 2px solid #2d5db7;
}

.user_info_layout .user_info {
  border: 1px solid rgba(128, 128, 128, 0.357);
  border-top: 1px solid #3a85ee3a;
  padding: 30px;
  height: 200px;
}

.user_info .exitLogin {
  margin-top: 20px;
  cursor: pointer;
}
</style>