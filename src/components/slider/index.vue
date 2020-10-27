<template>
  <vue-slider
    :min="min"
    :max="max"
    :min-range="minRange"
    :max-range="maxRange"
    :tooltip-placement="[`bottom`, `bottom`]"
    :contained="true"
    :enable-cross="false"
    v-model="value"
    :rail-style="[railStyle]"
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
    name: {
      type: String,
    },
    initialValue: {
      type: [Number, Array],
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    railStyle: {
      type: Object,
    },
    minRange: {
      type: Number,
      Default: 0,
    },
    maxRange: {
      type: Number,
      Default: 100,
    },
  },
  computed: {
    value: {
      get() {
        return this.initialValue;
      },
      set(value) {
        this.$emit("on-slider-update", value, this.name);
      },
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
