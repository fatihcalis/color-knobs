<template>
  <aside>
    <div class="control-menu">
      <div class="section-header">
        <span>Palette settings</span>
      </div>
      <div class="side-menu">
        <div class="side-menu__header">
          <b>Saturated blue</b>
          <button class="ghost-btn ghost-btn--only-icon">
            <Icon name="edit" />
          </button>
        </div>
        <div class="side-menu__content">
          <div class="side-menu__content__settings">
            <label>Color number</label>
            <Dials position="top" :count="40"></Dials>
            <Slider
              :min="3"
              :max="20"
              :initial-value="colorNumber"
              @on-slider-update="update"
              name="colorNumber"
            ></Slider>
            <Dials position="bottom" :count="40"></Dials>
          </div>
          <div class="side-menu__content__settings">
            <label>Hue</label>
            <Dials position="top" :count="40"></Dials>
            <Slider
              :min="0"
              :max="359"
              :initial-value="hue"
              @on-slider-update="update"
              name="hue"
              :rail-style="hueRailStyle"
            ></Slider>
            <Dials position="bottom" :count="40"></Dials>
          </div>
          <div class="side-menu__content__settings">
            <label>Saturation</label>
            <Dials position="top" :count="40"></Dials>
            <Slider
              :initial-value="saturation"
              @on-slider-update="update"
              name="saturation"
            ></Slider>
            <Dials position="bottom" :count="40"></Dials>
          </div>
          <div class="side-menu__content__settings">
            <label>Lightness</label>
            <Dials position="top" :count="40"></Dials>
            <Slider
              :initial-value="lightness"
              :min-range="10"
              @on-slider-update="update"
              name="lightness"
            ></Slider>
            <Dials position="bottom" :count="40"></Dials>
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
import Icon from "../shared/icon";
import Dials from "./dials/index";

export default {
  name: "aside",
  components: {
    Slider,
    Footer,
    Icon,
    Dials,
  },
  props: {
    hue: {
      type: Number,
    },
    saturation: {
      type: Number,
    },
    lightness: {
      type: Array,
    },
    colorNumber: {
      type: Number,
    },
  },
  methods: {
    update(value, name) {
      this.$emit("on-aside-update", value, name);
    },
  },
  computed: {
    hueRailStyle() {
      return {
        background: `linear-gradient(
            to right,
            #ff0000 0%,
            #ffff00 17%,
            #00ff00 33%,
            #00ffff 50%,
            #0000ff 67%,
            #ff00ff 83%,
            #ff0000 100%
          )`,
      };
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
