<template>
  <div class="tab__content__body" v-show="tabName === activeTabName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
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
