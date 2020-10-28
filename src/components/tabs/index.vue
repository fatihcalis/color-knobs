<template>
  <div class="tabs">
    <div class="tabs__header">
      <div
        v-for="(name, index) in headers"
        :key="index"
        class="tabs__header__item"
        @click="onItemClick(name)"
      >
        {{ name }}
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
    onItemClick(name) {
      this.$emit("on-item-click", name);
    },
  },
};
</script>

<style lang="scss" src="./index.scss"></style>
