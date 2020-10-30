<template>
  <div class="tab__content__body" v-show="tabName === activeTabName">
    <button
      @mouseleave="$emit('on-copy-mouse-leave')"
      v-tooltip="{ content: tooltipMessage, hideOnTargetClick: false }"
      class="ghost-btn ghost-btn--only-icon"
      @click="$emit('on-copy')"
    >
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
    tooltipMessage: {
      type: String,
    },
  },
};
</script>

<style lang="scss" src="./index.scss"></style>
