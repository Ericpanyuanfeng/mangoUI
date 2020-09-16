<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MgTabs",
  props: {
    selected: {
      type: String,
      require: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(vaule) {
        return ["horizontal", "vertical"].indexOf(vaule) >= 0;
      },
    },
  },
  created() {
    // this.$emit('update:selected','xxx')
  },
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>