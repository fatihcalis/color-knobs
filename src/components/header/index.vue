<template>
  <header>
    <div class="header__wrapper">
      <div class="header__wrapper__logo">
        <img :src="LogoLight" alt="Color Knobs">
      </div>
      <div class="header__wrapper__action-box">
        <div class="header__wrapper__action-box__item">
          <Night />
        </div>
        <div class="header__wrapper__action-box__item">
          <button class="share-btn">
            <p>Share</p>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoLight from '../../assets/logo/logo-light_theme@2x.png'
import Night from '../../assets/icons/night.svg'

export default {
  name: "Header",

  components: {
    Night,
  },

  data: function () {
    return {
      LogoLight: LogoLight
    }
  }
};
</script>

<style lang="scss" src="./index.scss" />
