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
      }, 852);
    },
    updateTitle(value) {
      Vue.set(this.activePalette, "title", value);
    },
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
      const [start, end] = lightness;
      const incrementer = (end - start) / (count - 1);
      let rgbArr = [];
      for (let i = start; i <= end; i = i + incrementer) {
        rgbArr = [...rgbArr, i];
      }
      return rgbArr.map((x) => {
        const { r, g, b } = this.hslToRgb(hue, saturation, x);
        return this.rgbToHex(r, g, b);
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
