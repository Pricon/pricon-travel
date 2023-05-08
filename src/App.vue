<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: scroll;
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
@font-face {
  font-family: "iconfont";
  src: url("~@/assets/icons/iconfont.woff2?t=1681220897634") format("woff2"),
    url("~@/assets/icons/iconfont.woff?t=1681220897634") format("woff"),
    url("~@/assets/icons/iconfont.ttf?t=1681220897634") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
