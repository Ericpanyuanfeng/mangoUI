<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MgTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  },
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$border-bottom-color: blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $border-bottom-color;
    transition: all 300ms;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>