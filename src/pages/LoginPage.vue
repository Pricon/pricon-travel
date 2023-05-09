// 登陆页面
<template>
  <div class="login_layout">
    <LoginHeader></LoginHeader>
    <LoginComponent></LoginComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import LoginHeader from "../components/loginPage/LoginHeader.vue";
import LoginComponent from "../components/loginPage/LoginComponent.vue";
import FooterComponent from "../components/loginPage/FooterComponent.vue";
export default {
  name: "LoginPage",
  components: {
    LoginHeader,
    LoginComponent,
    FooterComponent,
  },
  activated() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.login_layout {
  min-width: 1280px;
}
</style>