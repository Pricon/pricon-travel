// 登陆部分布局
<template>
  <div class="login_layout">
    <img src="/images/bg_login.png" />
    <div class="login_card">
      <div class="login_title">账号密码登录</div>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="login_inputs"
      >
        <el-form-item prop="accounter">
          <el-input
            type="text"
            placeholder="用户名/邮箱"
            v-model="loginForm.accounter"
            clearable
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="登录密码"
            v-model="loginForm.password"
            show-password
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()"
            >登&nbsp;&nbsp;&nbsp;录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="login_agree_policy">
        <input type="radio" id="agree_radio" checked />
        阅读并同意<a href="#">&nbsp;服务协议&nbsp;</a>和<a href="#"
          >&nbsp;个人信息保护政策&nbsp;</a
        >
      </div>
      <div class="login_forget_password_and_register">
        <button @click="toNextPage('/register')">免费注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    const validateAccounter = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        accounter: "",
        password: "",
      },
      rules: {
        accounter: [{ validator: validateAccounter, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      // 登录成功，将用户名密码保存到本地存储
      localStorage.setItem("accouter", this.loginForm.accounter);
      localStorage.setItem("passwd", this.loginForm.password);
    },
    toNextPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.login_layout {
  overflow-x: hidden;
  position: relative;
}

/* 背景图 */
.login_layout img {
  margin-left: -250px;
}

/* 登录卡片布局 */
.login_card {
  width: 320px;
  height: 350px;
  background-color: white;
  position: absolute;
  top: 60px;
  right: 310px;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.login_card .login_title {
  font-size: 18px;
  font-weight: bold;
}
.login_card .login_inputs {
  margin-top: 15px;
}
.login_card .login_inputs .el-input {
  font-size: 15px;
}
.login_card .el-button {
  width: 100%;
  height: 40px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #f69f36;
  margin-top: 10px;
  cursor: pointer;
}

.login_card .login_agree_policy {
  width: 100%;
  font-size: 12px;
  color: grey;
}
.login_card .login_agree_policy #agree_radio {
  vertical-align: middle;
  margin: 0;
  margin-top: -3px;
}
.login_card a {
  color: #3377ed;
  text-decoration: none;
}
.login_card .login_forget_password_and_register {
  width: 100%;
  margin-top: 20px;
  display: inline-flex;
  justify-content: flex-end;
}
.login_card .login_forget_password_and_register button {
  color: #3377ed;
  border: none;
  background: none;
  font-size: 10px;
  cursor: pointer;
}
</style>