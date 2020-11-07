<template>
  <main>
    <Aside
      :initial-title="activePalette.title"
      :hue="activePalette.values.hue"
      :saturation="activePalette.values.saturation"
      :lightness="activePalette.values.lightness"
      :color-number="activePalette.values.colorNumber"
      @on-aside-update="update"
      @on-title-update="updateTitle"
    ></Aside>
    <section>
      <div class="section-header">
        <div class="section-header__title">
          <span>Your color palette</span>
        </div>
        <div class="section-header__action-box">
          <button class="ghost-btn" @click="openExportModal">
            <icon name="download" />
            <p>Export</p>
          </button>
        </div>
      </div>
      <div class="section-content">
        <ColorCard
          v-for="(palette, index) in mappedPalettes"
          :key="palette.id"
          :colors="palette.colors"
          :is-active="palette.isActive"
          :title="palette.title"
          @on-select="setActiveCard(palette)"
          @on-delete="deleteCard(palette, index)"
          :hide-delete-action="mappedPalettes.length === 1"
          :activate-delete-animation="activateDeleteAnimation[index]"
        />
        <button class="color-add-btn" @click="addNewPalette">
          <Icon name="plus" />
          <div class="color-add-btn__shadow" />
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import ColorCard from "../color-card/index";
import Aside from "../aside/index";
import Icon from "../shared/icon";
import ExportModal from "./export-modal/index";
// import chroma from "chroma-js";
// import BezierEasing from "bezier-easing";

const initialValues = {
  colorNumber: 12,
  hue: 212,
  saturation: 60,
  lightness: [20, 80],
};

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
          id: uuidv4(),
          isActive: true,
          title: "Palette 1",
          values: {
            ...initialValues,
          },
          colors: [],
        },
      ],
      activateDeleteAnimation: [false],
    };
  },
  methods: {
    openExportModal() {
      this.$modal.show(ExportModal, {
        palettes: this.mappedPalettes,
      });
    },
    addNewPalette() {
      const paletteTemp = {
        id: uuidv4(),
        isActive: true,
        title: `Palette ${this.palettes.length + 1}`,
        values: {
          ...initialValues,
          hue: this.getRandomIntInclusive(0, 360),
        },
        colors: [],
      };
      this.palettes.forEach((palette) => {
        Vue.set(palette, "isActive", false);
      });

      this.palettes = [...this.palettes, paletteTemp];
      this.activateDeleteAnimation.push(false);
    },
    setActiveCard(palette) {
      this.palettes.forEach((p) => {
        if (p.id === palette.id) {
          Vue.set(p, "isActive", true);
        } else {
          Vue.set(p, "isActive", false);
        }
      });
    },
    deleteCard(palette, index) {
      Vue.set(this.activateDeleteAnimation, index, true);

      setTimeout(() => {
        Vue.set(this.activateDeleteAnimation, index, false);
        if (palette.isActive) {
          const newActiveIndex = index === 0 ? index + 1 : index - 1;
          this.setActiveCard(this.mappedPalettes[newActiveIndex]);
        }
        const filteredPalettes = this.palettes.filter(
          (p) => p.id !== palette.id
        );
        Vue.set(this, "palettes", filteredPalettes);
        this.activateDeleteAnimation.splice(index, 1);
      }, 800);
    },
    updateTitle(value) {
      Vue.set(this.activePalette, "title", value);
    },
    update(value, name) {
      Vue.set(this.activePalette.values, name, value);
    },
    toHex(n) {
      return (256 + n).toString(16).substr(-2);
    },
    rgbToHex(r, g, b) {
      return `#${this.toHex(r)}${this.toHex(g)}${this.toHex(b)}`;
    },

    hslToRgb(hue, saturation, lightness) {
      // Depends on https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
      if (hue == undefined) {
        return { r: 0, g: 0, b: 0 };
      }
      const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
      let huePrime = hue / 60;
      const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));
      huePrime = Math.floor(huePrime);
      let red, green, blue;
      if (huePrime === 0) {
        red = chroma;
        green = secondComponent;
        blue = 0;
      } else if (huePrime === 1) {
        red = secondComponent;
        green = chroma;
        blue = 0;
      } else if (huePrime === 2) {
        red = 0;
        green = chroma;
        blue = secondComponent;
      } else if (huePrime === 3) {
        red = 0;
        green = secondComponent;
        blue = chroma;
      } else if (huePrime === 4) {
        red = secondComponent;
        green = 0;
        blue = chroma;
      } else if (huePrime === 5) {
        red = chroma;
        green = 0;
        blue = secondComponent;
      }
      const lightnessAdjustment = lightness - chroma / 2;
      red += lightnessAdjustment;
      green += lightnessAdjustment;
      blue += lightnessAdjustment;
      return {
        r: Math.abs(Math.round(red * 255)),
        g: Math.abs(Math.round(green * 255)),
        b: Math.abs(Math.round(blue * 255)),
      };
    },
    getColors(count, hue, saturation, lightness) {
      const [start, end] = lightness;
      const incrementer = (end - start) / (count - 1);
      // const easing = BezierEasing(0, 0, 0.42, 0);

      let lightnessValues = [];

      for (let i = start; i <= end; i = i + incrementer) {
        lightnessValues = [...lightnessValues, i];
      }

      if (end !== Math.ceil(lightnessValues[lightnessValues.length - 1])) {
        lightnessValues = [...lightnessValues, end];
      }

      return lightnessValues.map((l) => {
        const { r, g, b } = this.hslToRgb(hue, saturation / 100, l / 100);

        return {
          hex: this.rgbToHex(r, g, b),
          hsl: `hsl(${hue},${saturation}%,${l}%)`,
        };
      });
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
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
