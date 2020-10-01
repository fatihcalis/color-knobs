<template>
  <main>
    <ControlMenu></ControlMenu>
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
import ControlMenu from "../control-menu/index";
import { mockedPalettes } from "../../mock/index";

export default {
  name: "Main",
  components: {
    ColorCard,
    ControlMenu,
  },
  data() {
    return {
      palettes: mockedPalettes,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" />
