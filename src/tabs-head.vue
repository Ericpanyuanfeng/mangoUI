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
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {});
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
  border: 1px solid red;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $border-bottom-color;
    width: 4em;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>