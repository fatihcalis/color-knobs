<template>
  <div id="app">
    <HslaConverter msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HslaConverter from "./components/HslaConverter.vue";

export default {
  name: "App",
  components: {
    HslaConverter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
