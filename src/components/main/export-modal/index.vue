<template>
  <div class="export-modal">
    <div class="export-modal__header"></div>
    <div class="export-modal__body">
      <Tabs :headers="tabHeaders" @on-item-click="setActiveTab">
        <Tab tab-name="JSON" :active-tab-name="activeTabName">
          <vue-json-pretty :data="jsonFormatedPalettes"> </vue-json-pretty>
        </Tab>
        <Tab tab-name="CSS" :active-tab-name="activeTabName">
          <div>CSS</div>
        </Tab>
        <Tab tab-name="SCSS" :active-tab-name="activeTabName">
          <div>SCSS</div>
        </Tab>
      </Tabs>
    </div>
    <div class="export-modal__footer"></div>
  </div>
</template>

<script>
import Tabs from "../../tabs/index";
import Tab from "../../tabs/tab/index";

export default {
  name: "ExportModal",
  components: {
    Tabs,
    Tab,
  },
  props: {
    palettes: { type: Array },
  },
  data() {
    return {
      tabHeaders: ["JSON", "CSS", "SCSS"],
      activeTabName: "",
    };
  },
  methods: {
    setActiveTab(name) {
      this.activeTabName = name;
    },
  },
  computed: {
    jsonFormatedPalettes() {
      return this.palettes.reduce(
        (acc, palette) => [
          ...acc,
          { name: palette.title, colors: palette.colors },
        ],
        []
      );
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
