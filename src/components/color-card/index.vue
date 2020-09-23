<template>
  <article class="color-card" :class="{ active: isActive }">
    <div class="color-card__header">
      <label>{{ title }}</label>
      <span class="icon"></span>
    </div>
    <div class="color-card__palatte">
      <div
        v-for="color in colors"
        :key="color"
        class="color-card__palatte__box"
        :style="{ backgroundColor: color }"
      />
    </div>
  </article>
</template>

<script>
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
  },
};
</script>

<style lang="scss" src="./index.scss" />
