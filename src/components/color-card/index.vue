<template>
  <article class="color-card" :class="{ active: false }">
    <div class="color-card__header">
      <label>{{ title }}</label>
      <button class="ghost-btn ghost-btn--only-icon">
          <Icon name='cross' />
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
import Icon from '../shared/icon'

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
  components: {
    Icon
  },
};
</script>

<style lang="scss" src="./index.scss" />
