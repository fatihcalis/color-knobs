<template>
  <aside>
    <div class="control-menu">
      <div class="section-header">
        <span>Palette settings</span>
      </div>
      <div class="side-menu">
        <div class="side-menu__header">
          <b v-if="!editMode">{{ title }}</b>
          <button
            v-if="!editMode"
            class="ghost-btn ghost-btn--only-icon"
            @click="editMode = true"
          >
            <Icon name="edit" />
          </button>
          <input v-model="title" v-if="editMode" />
          <button
            v-if="editMode"
            class="ghost-btn ghost-btn--only-icon"
            @click="updateTitle"
          >
            <Icon name="cross" />
          </button>
          <button
            v-if="editMode"
            class="ghost-btn ghost-btn--only-icon"
            @click="updateTitle"
          >
            <Icon name="check" />
          </button>
        </div>
        <div class="side-menu__content">
          <div class="side-menu__content__settings">
            <label>Color number</label>
            <Dials position="top" :count="40"></Dials>
            <Slider
              :min="5"
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
              custom-class="vue-slider--hue"
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
              :min-range="20"
              @on-slider-update="update"
              name="lightness"
              custom-class="vue-slider--lightness"
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
    initialTitle: {
      type: String,
    },
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
  data() {
    return {
      editMode: false,
      upToDateTitle: this.initialTitle,
    };
  },

  methods: {
    update(value, name) {
      this.$emit("on-aside-update", value, name);
    },
    updateTitle() {
      this.$emit("on-title-update", this.upToDateTitle);
      this.editMode = false;
    },
  },
  computed: {
    title: {
      get() {
        return this.initialTitle;
      },
      set(value) {
        this.upToDateTitle = value;
      },
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
