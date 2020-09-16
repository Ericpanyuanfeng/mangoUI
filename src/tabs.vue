<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
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
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
  },
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>