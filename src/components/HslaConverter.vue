<template>
  <div class="hsla-converter" :style="[passHexColor]">
    <div class="hsla-converter__sliders">
      <div class="hsla-converter__sliders__item">
        <div class="hsla-converter__sliders__item__label">
          Hue
        </div>
        <input
          class="hue"
          type="range"
          min="0"
          max="359"
          step="1"
          v-model="hue"
        />
        <div class="hsla-converter__sliders__item__value">
          <b>{{ hue }}</b>
        </div>
      </div>
      <div class="hsla-converter__sliders__item">
        <div class="hsla-converter__sliders__item__label">
          Saturation
        </div>
        <input
          class="saturation"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="saturation"
        />
        <div class="hsla-converter__sliders__item__value">
          <b>{{ saturation }}</b>
        </div>
      </div>
      <div class="hsla-converter__sliders__item">
        <div class="hsla-converter__sliders__item__label">
          Lightness
        </div>
        <input
          class="lightness"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="lightness"
        />
        <div class="hsla-converter__sliders__item__value">
          <b>{{ lightness }}</b>
        </div>
      </div>
    </div>

    <div class="hsla-converter__result">
      <div class="hsla-converter__result__item">
        <b>{{ hslFormat }}</b>
      </div>
      <div class="hsla-converter__result__item">
        <b>{{ hexResult }}</b>
      </div>
      <div class="hsla-converter__result__item">
        <b>{{ rgbResult }}</b>
      </div>
      <div class="hsla-converter__result__item">
        <div
          v-for="(res, index) in hexResult"
          class="hsla-converter__result__item__color"
          :key="index"
          :style="{ height: '100px', backgroundColor: res }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HslaConverter",
  props: {},
  data() {
    return {
      hue: 180,
      saturation: 50,
      lightness: 0,
    };
  },
  methods: {
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
  },
  computed: {
    hslFormat() {
      return `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
    },
    hexResult() {
      let rgbArr = [10, 18, 30, 39, 49, 59, 69, 78, 89, 96];
      let asd = rgbArr.map((x) => {
        const { r, g, b } = this.hslToRgb(
          this.hue,
          this.saturation,
          this.lightness + x
        );

        return this.rgbToHex(r, g, b);
      });
      return asd;
    },
    rgbResult() {
      const { r, g, b } = this.hslToRgb(
        this.hue,
        this.saturation,
        this.lightness
      );
      return `rgb(${r},${g},${b})`;
    },
    passHexColor() {
      return {
        "--hex-color": this.hexResult,
      };
    },
  },
};
</script>

<style scoped lang="less">
.hsla-converter {
  max-width: 1024px;
  margin: 0 auto;
  &__sliders {
    &__item {
      .hue {
        &:focus {
          outline: none;
        }

        &::-webkit-slider-runnable-track {
          border: none;
          border-radius: 3px;
          height: 8px;
          background: linear-gradient(
            to right,
            #ff0000 0%,
            #ffff00 17%,
            #00ff00 33%,
            #00ffff 50%,
            #0000ff 67%,
            #ff00ff 83%,
            #ff0000 100%
          );
        }

        &::-webkit-slider-thumb {
          margin-top: -4px;
        }
      }
      .saturation {
        &:focus {
          outline: none;
        }

        &::-webkit-slider-runnable-track {
          border: none;
          border-radius: 3px;
          height: 8px;
          background: var(--hex-color);
        }

        &::-webkit-slider-thumb {
          margin-top: -4px;
        }
      }
      .lightness {
        &:focus {
          outline: none;
        }

        &::-webkit-slider-runnable-track {
          border: none;
          border-radius: 3px;
          height: 8px;
          background: var(--hex-color);
        }

        &::-webkit-slider-thumb {
          margin-top: -4px;
        }
      }
      input[type="range"] {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  &__result {
    margin-top: 50px;
    &__item {
      display: flex;
      &__color {
        width: 100%;
        flex: 1 1 auto;
      }
    }
  }
}
</style>
