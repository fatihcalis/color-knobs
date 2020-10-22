<template>
  <header>
    <div class="header__wrapper">
      <div class="header__wrapper__logo">
        <img :src="LogoLight" alt="Color Knobs">
      </div>
      <div class="header__wrapper__action-box">
        <div class="header__wrapper__action-box__item">
          <button class="ghost-btn">
            <icon name="night" />
            <p>Dark mode</p>
          </button>
        </div>
        <div class="header__wrapper__action-box__divider" />
        <div class="header__wrapper__action-box__item">
          <button class="ghost-btn ghost-btn--only-icon">
             <icon name="twitter" />
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
