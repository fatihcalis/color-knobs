<template>
  <main>
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
            <vue-slider :min="0" :max="20" v-model="colorNumber"></vue-slider>
          </div>
          <div class="side-menu__content__settings">
            <label>Hue</label>
            <vue-slider v-model="hue"></vue-slider>
          </div>
          <div class="side-menu__content__settings">
            <label>Saturation</label>
            <vue-slider v-model="saturation"></vue-slider>
          </div>
          <div class="side-menu__content__settings">
            <label>Lightness</label>
            <vue-slider v-model="lightness"></vue-slider>
          </div>
        </div>
      </div>
    </aside>
    <section>
      <div class="section-header">
        <span>Your color palette</span>
      </div>

      <ColorCard
        v-for="(palette, index) in palettes"
        :key="index"
        :colors="palette.colors"
        :is-active="palette.isActive"
        :title="palette.title"
      />
    </section>
  </main>
</template>

<script>
import ColorCard from "../color-card/index";
import { mockedPalettes } from "../../mock/index";

export default {
  name: "Main",
  components: {
    ColorCard,
  },
  data() {
    return {
      palettes: mockedPalettes,
      colorNumber: 5,
      hue: 180,
      saturation: 50,
      lightness: [20, 80],
    };
  },
};
</script>

<style lang="scss" src="./index.scss" />
