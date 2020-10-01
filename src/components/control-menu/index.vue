<template>
  <aside>
    <div class="section-header">
      <span>Palette settings</span>
    </div>
    <div class="side-menu">
      <div class="side-menu__header">
        <b>Saturated blue</b>
        <span class="icon"></span>
      </div>
      <div class="side-menu__content">
        <div class="side-menu__content__settings">
          <label>Color number</label>
          <Slider :min="0" :max="20" :value="colorNumber"></Slider>
        </div>
        <div class="side-menu__content__settings">
          <label>Hue</label>
          <Slider :value="hue"></Slider>
        </div>
        <div class="side-menu__content__settings">
          <label>Saturation</label>
          <Slider :value="saturation"></Slider>
        </div>
        <div class="side-menu__content__settings">
          <label>Lightness</label>
          <Slider :value="lightness"></Slider>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Slider from "../slider/index";

export default {
  name: "ControlMenu",
  components: {
    Slider,
  },
  data() {
    return {
      colorNumber: 5,
      hue: 180,
      saturation: 50,
      lightness: [20, 80],
    };
  },
};
</script>

<style lang="scss" src="./index.scss" />
