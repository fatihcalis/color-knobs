<template>
  <div
    class="dials"
    :class="{
      'dials--top': position === 'top',
      'dials--bottom': position === 'bottom',
    }"
  >
    <div v-for="c in count" :key="c" class="dials__line" />
  </div>
</template>

<script>
export default {
  name: "Dials",
  props: {
    count: {
      type: Number,
      default: 40,
    },
    position: {
      type: String,
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
