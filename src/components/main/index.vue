<template>
  <main>
    <Aside
      :hue="activePalette.values.hue"
      :saturation="activePalette.values.saturation"
      :lightness="activePalette.values.lightness"
      :color-number="activePalette.values.colorNumber"
      @on-aside-update="update"
    ></Aside>
    <section>
      <div class="section-header">
        <div class="section-header__title">
          <span>Your color palette</span>
        </div>
        <div class="section-header__action-box">
          <button class="ghost-btn">
            <icon name="download" />
            <p>Export</p>
          </button>
        </div>
      </div>

      <ColorCard
        v-for="(palette, index) in mappedPalettes"
        :key="index"
        :colors="palette.colors"
        :is-active="palette.isActive"
        :title="palette.title"
      />
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import ColorCard from "../color-card/index";
import Aside from "../aside/index";
import Icon from "../shared/icon";

export default {
  name: "Main",
  components: {
    ColorCard,
    Aside,
    Icon,
  },
  data() {
    return {
      palettes: [
        {
          isActive: true,
          title: "Palette 1",
          values: {
            colorNumber: 10,
            hue: 180,
            saturation: 50,
            lightness: 20,
          },
          colors: [],
        },
      ],
    };
  },
  methods: {
    update(value, name) {
      Vue.set(this.activePalette.values, name, value);
    },
    toHex(n) {
      let hex = n.toString(16);
      while (hex.length < 2) {
        hex = `0${hex}`;
      }
      return hex;
    },
    rgbToHex(r, g, b) {
      return `#${this.toHex(r)}${this.toHex(g)}${this.toHex(b)}`;
    },
    hslToRgb(h, s, l) {
      s /= 100;
      l /= 100;

      let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

      if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
      }
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);

      return { r, g, b };
    },
    getColors(count, hue, saturation, lightness) {
      let rgbArr = [];
      for (let i = 1; i <= count; i++) {
        const acc = (100 - count) / count;
        rgbArr = [...rgbArr, i * acc - 1];
      }

      return rgbArr.map((x) => {
        const { r, g, b } = this.hslToRgb(hue, saturation, lightness + x);

        return this.rgbToHex(r, g, b);
      });
    },
  },

  computed: {
    mappedPalettes() {
      return this.palettes.reduce(
        (acc, palette) => [
          ...acc,
          {
            ...palette,
            colors: this.getColors(
              palette.values.colorNumber,
              palette.values.hue,
              palette.values.saturation,
              palette.values.lightness
            ),
          },
        ],
        []
      );
    },
    activePalette() {
      return this.palettes.find((palette) => palette.isActive);
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
