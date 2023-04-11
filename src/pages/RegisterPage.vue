// 注册页面
<template>
  <div>
    <LoginHeader></LoginHeader>
    <RegisterComponent></RegisterComponent>
  </div>
</template>

<script>
import LoginHeader from "../components/loginPage/LoginHeader.vue";
import RegisterComponent from "../components/registerPage/RegisterComponent.vue";
export default {
  name: "RegisterPage",
  components: { LoginHeader, RegisterComponent },
};
</script>

<style>
</style>