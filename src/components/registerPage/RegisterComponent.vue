<template>
  <div class="register_layout">
    <div class="register_steps">
      <el-steps
        :space="400"
        :active="step"
        finish-status="success"
        align-center
      >
        <el-step title="验证手机"></el-step>
        <el-step title="设置密码"></el-step>
        <el-step title="注册完成"></el-step>
      </el-steps>
    </div>
    <div class="set_telephone_number" ref="setTelephoneNumber">
      <el-form
        :model="registerForm"
        label-width="80px"
        label-position="right"
        status-icon
        :rules="rules"
        ref="registerForm"
      >
        <!-- 手机号 -->
        <el-form-item label="手机号" prop="telNumber">
          <el-input
            type="text"
            clearable
            v-model="registerForm.telNumber"
            placeholder="输入手机号"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item label="验证码" prop="verificationCode">
          <el-input
            type="text"
            v-model="registerForm.verificationCode"
            placeholder="6位数字"
            autocomplete="off"
          >
            <el-button slot="suffix" @click="generateCode()"
              >生成验证码</el-button
            >
          </el-input>
        </el-form-item>

        <div class="register_agree_policy">
          同意<a>《服务协议》</a>和<a>《隐私政策》</a>
        </div>

        <el-form-item>
          <el-button type="primary" @click="nextStep()"
            >下一步，设置密码</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="set_passwd" ref="setPasswd">
      <el-form
        :model="registerForm"
        label-width="80px"
        label-position="right"
        status-icon
        :rules="rules"
        ref="registerForm"
      >
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="accounter">
          <el-input
            type="text"
            clearable
            v-model="registerForm.accounter"
            autocomplete="off"
            placeholder="字母开头，最少5位，最多15位"
          ></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            clearable
            v-model="registerForm.email"
            autocomplete="off"
            placeholder="输入有效的邮箱"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            clearable
            v-model="registerForm.password"
            autocomplete="off"
            show-password
            placeholder="必须包含大小写字母，8位以上"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkpass">
          <el-input
            type="password"
            v-model="registerForm.checkpass"
            placeholder="再次输入密码"
            show-password
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="nextStep()"
            >完&nbsp;&nbsp;&nbsp;成</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="register_completed" ref="registerComplete">
      <el-result icon="success" title="注册成功" subTitle="请根据提示进行操作">
        <template slot="extra">
          <div><a href="#">点此处</a>返回登录页面</div>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    // 校验手机号
    const validateTel = (rule, value, callback) => {
      const regex = /1[3-9][0-9]{9}/g;
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (!regex.test(value)) {
          callback(new Error("手机号格式错误, 请重新输入"));
        } else {
          callback();
        }
      }
    };

    // 校验验证码
    const validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };

    //校验用户名
    const validateAccounter = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        const regex = /[A-z]+[\w]{4,14}/g;
        if (!regex.test(value) || value.length < 5 || value.length > 15) {
          callback(new Error("用户名格式错误，请重新输入"));
        } else {
          callback();
        }
      }
    };

    // 校验邮箱
    const validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        const regex = /[\w]+@[A-z]+(\.[A-z]+){1,2}/g;
        if (!regex.test(value)) {
          callback(new Error("邮箱格式错误，请重新输入"));
        } else {
          callback();
        }
      }
    };

    // 校验密码
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (
          !(
            /[a-z]+/.test(value) &&
            /[A-Z]+/.test(value) &&
            /[\w]{8,}/.test(value)
          )
        ) {
          callback(new Error("密码格式错误，请重新输入"));
        } else if (this.registerForm.checkpass !== "") {
          this.$refs.setPass.validateField("checkpass");
        } else {
          callback();
        }
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (
          !(
            /[a-z]+/.test(value) &&
            /[A-Z]+/.test(value) &&
            /[\w]{8,}/.test(value)
          )
        ) {
          callback(new Error("密码格式错误，请重新输入"));
        } else if (value !== this.registerForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      }
    };
    return {
      step: 1,
      registerForm: {
        telNumber: "",
        verificationCode: "",
        accounter: "",
        email: "",
        password: "",
        checkpass: "",
      },
      rules: {
        telNumber: [{ validator: validateTel, trigger: "blur" }],
        verificationCode: [{ validator: validateCode, trigger: "blur" }],
        accounter: [{ validator: validateAccounter, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkpass: [{ validator: validatePass2, trigger: "blur" }],
      },
      randomCode: "code",
    };
  },
  methods: {
    generateCode() {
      let code = "";
      for (let i = 0; i < 6; i++) {
        code += parseInt(Math.random() * 10).toString();
      }
      this.randomCode = code;
      this.$alert(this.randomCode, "验证码", {
        confirmButtonText: "确定",
        center: true,
      });
    },
    nextStep() {
      // 手机验证->设置密码
      if (this.step == 1) {
        // 检查验证码
        if (this.registerForm.verificationCode !== this.randomCode) {
          this.$message({
            showClose: true,
            message: "验证码错误，请重新输入",
            type: "error",
          });
        } else {
          // 下一页
          this.$refs.setTelephoneNumber.style.display = "none";
          this.$refs.setPasswd.style.display = "block";
          this.step++;
        }
      }
      // 设置密码->注册完成
      else if (this.step == 2) {
        // 下一页
        if (this.registerForm.password != this.registerForm.checkpass) {
          this.$message({
            showClose: true,
            message: "密码错误，请重新输入",
            type: "error",
          });
        } else {
          this.$refs.setPasswd.style.display = "none";
          this.$refs.registerComplete.style.display = "block";
          this.submitForm();
          this.step++;
        }
      }
    },
    submitForm() {
      console.log("注册成功");
    },
  },
};
</script>

<style scoped>
.register_layout {
  margin-top: 20px;
  height: 65vh;
}
.register_layout .register_steps .el-steps:first-child {
  margin-left: 130px;
}

/* .register_layout .set_telephone_number, */
.register_layout .set_passwd,
.register_layout .register_completed {
  display: none;
}
.register_layout .set_telephone_number,
.register_layout .set_passwd {
  width: 350px;
  margin-left: 300px;
  margin-top: 30px;
}

/* 手机验证相关布局 */
.set_telephone_number .el-input .el-input__suffix-inner .el-button {
  color: #3a84ee;
  font-size: 10px;
  background: none;
  border: none;
  margin: 0 5px;
  cursor: pointer;
}
.set_telephone_number .register_agree_policy {
  font-size: 10px;
  margin-left: 80px;
}
.set_telephone_number .register_agree_policy a {
  color: #3a84ee;
  cursor: pointer;
}
.set_telephone_number .register_agree_policy a:hover {
  text-decoration: underline;
}

.set_telephone_number .el-button--primary,
.set_passwd .el-button--primary {
  width: 200px;
  height: 40px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #f69f36;
  margin-top: 50px;
  cursor: pointer;
}

.register_completed a {
  color: #3a84ee;
  font-size: 15px;
  text-decoration: none;
}
.register_completed a:hover {
  text-decoration: underline;
}
</style>