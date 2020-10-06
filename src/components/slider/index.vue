<template>
  <vue-slider
    :min="min"
    :max="max"
    v-model="value"
  >
    <template v-slot:dot>
      <div class="slider-dot">
        <div class="slider-dot__shadow slider-dot__shadow--left" />
        <div class="slider-dot__shadow slider-dot__shadow--right" />
        <div class="slider-dot__point-box">
          <div class="slider-dot__point-box__point" />
          <div class="slider-dot__point-box__point" />
          <div class="slider-dot__point-box__point" />
        </div>
      </div>
    </template>

    <template v-slot:tooltip="{ value }">
      <div class="slider-tooltip">{{ value }}</div>
    </template>

    <template v-slot:process="{ style }">
      <div class="slider-process" :style="[style]"></div>
    </template>
  </vue-slider>
</template>

<script>
export default {
  name: "Slider",
  props: {
    value: {
      type: [Number, Array],
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
