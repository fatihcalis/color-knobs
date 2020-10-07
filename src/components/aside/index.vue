<template>
  <aside>
    <div class="control-menu">
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
          <div class="dials dials--top">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
          <Slider :min="0" :max="20" :value="colorNumber"></Slider>
          <div class="dials dials--bottom">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
        </div>
        <div class="side-menu__content__settings">
          <label>Hue</label>
          <div class="dials dials--top">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
          <Slider :value="hue"></Slider>
          <div class="dials dials--bottom">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
        </div>
        <div class="side-menu__content__settings">
          <label>Saturation</label>
          <div class="dials dials--top">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
          <Slider :value="saturation"></Slider>
          <div class="dials dials--bottom">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
        </div>
        <div class="side-menu__content__settings">
          <label>Lightness</label>
          <div class="dials dials--top">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
          <Slider :value="lightness"></Slider>
          <div class="dials dials--bottom">
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
            <div class="dials__line" />
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </aside>
</template>

<script>
import Slider from "../slider/index";
import Footer from "../footer/index";

export default {
  name: "aside",
  components: {
    Slider,
    Footer
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
