<template>
  <header>
    <div class="header__wrapper">
      <div class="header__wrapper__logo">
        <img :src="LogoLight" alt="Color Knobs">
      </div>
      <div class="header__wrapper__action-box">
        <div class="header__wrapper__action-box__item">
          <icon name="night" />
        </div>
        <div class="header__wrapper__action-box__item">
          <button class="share-btn">
             <icon name="twitter" />
            <p>Share</p>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoLight from '../../assets/logo/logo-light_theme@2x.png'
import Icon from '../shared/icon'

export default {
  name: "Header",

  components: {
    Icon,
  },

  data: function () {
    return {
      LogoLight: LogoLight
    }
  }
};
</script>

<style lang="scss" src="./index.scss" />
