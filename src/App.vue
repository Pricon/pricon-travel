<template>
  <div id="app">
    <!-- <HomePage></HomePage> -->
    <!-- <LoginPage></LoginPage> -->
    <RegisterPage></RegisterPage>
  </div>
</template>

<script>
// import HomePage from "./pages/HomePage.vue";
// import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";

export default {
  name: "App",
  components: {
    // HomePage,
    // LoginPage,
    RegisterPage,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  box-sizing: border-box;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
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
@font-face {
  font-family: "得意黑 斜体";
  font-weight: 400;
  src: url("//at.alicdn.com/wf/webfont/E7XH88YtQlo7/8QSuxBbSiS9s.woff2")
      format("woff2"),
    url("//at.alicdn.com/wf/webfont/E7XH88YtQlo7/dngGNZo80UIh.woff")
      format("woff");
  font-display: swap;
}
</style>
