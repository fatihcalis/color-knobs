<template>
  <main>
    <Aside></Aside>
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
import Aside from "../aside/index";
import { mockedPalettes } from "../../mock/index";
import Icon from '../shared/icon'

export default {
  name: "Main",
  components: {
    ColorCard,
    Aside,
    Icon,
  },
  data() {
    return {
      palettes: mockedPalettes,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" />
