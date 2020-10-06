<template>
  <div class="page-wrapper">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "../components/header/index";
import Main from "../components/main/index";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss" src="./index.scss" />
