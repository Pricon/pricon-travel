// 注册页面
<template>
  <div class="register_layout">
    <LoginHeader></LoginHeader>
    <RegisterComponent></RegisterComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import LoginHeader from "../components/loginPage/LoginHeader.vue";
import RegisterComponent from "../components/registerPage/RegisterComponent.vue";
import FooterComponent from "../components/loginPage/FooterComponent.vue";

export default {
  name: "RegisterPage",
  components: { LoginHeader, RegisterComponent, FooterComponent },
};
</script>

<style scoped>
.register_layout {
  min-width: 1280px;
}
</style>