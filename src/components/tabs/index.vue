<template>
  <div class="tabs">
    <div class="tabs__header">
      <div
        v-for="(header, index) in headers"
        :key="index"
        class="tabs__header__item"
        :class="{ 'tabs__header__item--active': header.isActive }"
        @click="onItemClick(header)"
      >
        {{ header.name }}
      </div>
    </div>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    headers: {
      type: Array,
    },
  },
  mounted() {
    this.$emit("on-item-click", this.headers[0]);
  },
  methods: {
    onItemClick(header) {
      this.$emit("on-item-click", header);
    },
  },
};
</script>

<style lang="scss" src="./index.scss"></style>
