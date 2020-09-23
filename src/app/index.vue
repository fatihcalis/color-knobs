<template>
  <div class="page-wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/index";
import Main from "../components/main/index";
import Footer from "../components/footer/index";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss" src="./index.scss" />
