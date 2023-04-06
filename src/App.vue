<template>
  <div id="app">
    <MemuLeft></MemuLeft>
    <MainContent></MainContent>
  </div>
</template>

<script>
import MemuLeft from "./components/MemuLeft";
import MainContent from "./components/MainContent";

export default {
  name: "App",
  components: {
    MemuLeft,
    MainContent,
  },
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
