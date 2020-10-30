<template>
  <article
    class="color-card"
    :class="{
      'color-card--active': isActive,
      'color-card--out': activateDeleteAnimation,
    }"
    @click="selectPalette"
  >
    <div class="color-card__header">
      <label>{{ title }}</label>
      <button
        v-if="!hideDeleteAction"
        class="ghost-btn ghost-btn--only-icon"
        @click.stop="deletePalette"
      >
        <Icon name="cross" />
      </button>
    </div>
    <div class="color-card__palatte">
      <div
        v-for="color in colors"
        :key="color"
        class="color-card__palatte__box"
        :style="{ backgroundColor: color }"
      />
    </div>
    <div class="color-card__shadow" />
  </article>
</template>

<script>
import Icon from "../shared/icon";

export default {
  name: "ColorCard",
  props: {
    isActive: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    colors: {
      type: Array,
    },
    hideDeleteAction: {
      type: Boolean,
    },
    activateDeleteAnimation: {
      type: Boolean,
    },
  },
  components: {
    Icon,
  },
  methods: {
    deletePalette() {
      this.$emit("on-delete");
    },
    selectPalette() {
      this.$emit("on-select");
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
