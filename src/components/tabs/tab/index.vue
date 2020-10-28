<template>  
  <div class="tab__content__body" v-show="tabName === activeTabName">
    <button class="ghost-btn ghost-btn--only-icon">
      <icon name="copy" />  
    </button>
    <div class="tab__content__body__scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "../../shared/icon";

export default {
  name: "Tab",
  components: {
    Icon,
  },
  props: {
    tabName: {
      type: String,
    },
    activeTabName: {
      type: String,
    },
  },
};
</script>

<style lang="scss" src="./index.scss"></style>
