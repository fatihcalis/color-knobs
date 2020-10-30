<template>
  <div class="export-modal">
    <div class="export-modal__header">
      <p>Export</p>
      <button class="ghost-btn ghost-btn--only-icon" @click="closeModal">
        <icon name="cross" />
      </button>
    </div>
    <div class="export-modal__body">
      <Tabs :headers="tabHeaders" @on-item-click="setActiveTab">
        <Tab
          tab-name="JSON"
          :active-tab-name="activeTab.name"
          :tooltip-message="tooltipMessage"
          @on-copy="copyToClipboard(JSON.stringify(jsonFormatedPalettes))"
          @on-copy-mouse-leave="tooltipMessage = 'Copy'"
        >
          <vue-json-pretty :data="jsonFormatedPalettes"> </vue-json-pretty>
        </Tab>
        <Tab
          tab-name="CSS"
          :active-tab-name="activeTab.name"
          :tooltip-message="tooltipMessage"
          @on-copy="copyToClipboard('CSS')"
          @on-copy-mouse-leave="tooltipMessage = 'Copy'"
        >
          <div>CSS</div>
        </Tab>
        <Tab
          tab-name="SCSS"
          :active-tab-name="activeTab.name"
          :tooltip-message="tooltipMessage"
          @on-copy="copyToClipboard('SCSS')"
          @on-copy-mouse-leave="tooltipMessage = 'Copy'"
        >
          <div>SCSS</div>
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../../tabs/index";
import Tab from "../../tabs/tab/index";
import Icon from "../../shared/icon";

export default {
  name: "ExportModal",
  components: {
    Tabs,
    Tab,
    Icon,
  },
  props: {
    palettes: { type: Array },
  },
  data() {
    return {
      tabHeaders: [
        { name: "JSON", isActive: false },
        { name: "CSS", isActive: false },
        { name: "SCSS", isActive: false },
      ],
      activeTab: {},
      tooltipMessage: "Copy",
    };
  },
  methods: {
    setActiveTab(header) {
      this.tabHeaders = this.tabHeaders.map(({ name }) => ({
        name,
        isActive: name === header.name,
      }));
      this.activeTab = header;
    },
    closeModal() {
      this.$emit("close");
    },
    copyToClipboard(text) {
      this.$copyText(text).then(() => {
        this.tooltipMessage = "Copied";
      });
    },
  },
  computed: {
    jsonFormatedPalettes() {
      return this.palettes.reduce(
        (acc, palette) => [
          ...acc,
          {
            palette: palette.title,
            colors: palette.colors.map((color, index) => ({
              name: index,
              color,
            })),
          },
        ],
        []
      );
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
