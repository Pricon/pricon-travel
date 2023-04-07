<template>
  <div id="app">
    <MemuLeft></MemuLeft>
    <MainContent></MainContent>
  </div>
</template>

<script>
import MemuLeft from "./components/hotelPage/MemuLeft";
import MainContent from "./components/hotelPage/MainContent";

export default {
  name: "App",
  components: {
    MemuLeft,
    MainContent,
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
