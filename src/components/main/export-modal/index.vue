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
          @on-copy="
            copyToClipboard(convertSCCSFormatToString(scssFormatedPalettes))
          "
          @on-copy-mouse-leave="tooltipMessage = 'Copy'"
        >
          <div class="scss">
            <div
              class="scss__palette"
              v-for="({ key, values }, index) in scssFormatedPalettes"
              :key="index"
            >
              <div class="scss__palette__title">
                {{ key }}
              </div>
              <div class="scss__palette__colors">
                <div
                  class="scss__palette__colors__item"
                  v-for="(value, index) in values"
                  :key="index"
                >
                  {{ value }}
                </div>
              </div>
              <br />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../../tabs/index";
import Tab from "../../tabs/tab/index";
import Icon from "../../shared/icon";
import kebapCase from "lodash.kebabcase";

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
    convertSCCSFormatToString(palettes) {
      let converted = "";
      palettes.forEach((palette) => {
        converted += palette.key + "\n";
        palette.values.forEach((value, index) => {
          if (index === palette.values.length - 1) {
            converted += value + "\n \n";
          } else {
            converted += value + "\n";
          }
        });
      });
      return converted;
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
              name: `${kebapCase(palette.title)}-${index * 10}`,
              color,
            })),
          },
        ],
        []
      );
    },
    scssFormatedPalettes() {
      return this.palettes.map((palette) => ({
        key: `// ${palette.title}`,
        values: palette.colors.map(
          (color, index) =>
            `$${kebapCase(palette.title)}-${index * 10}: ${color};`
        ),
      }));
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
