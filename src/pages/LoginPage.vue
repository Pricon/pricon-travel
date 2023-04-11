// 登陆页面
<template>
  <div>
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
};
</script>

<style>
</style>