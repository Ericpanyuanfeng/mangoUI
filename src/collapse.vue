<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "MgCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    if (this.single) {
      return {
        eventBus: this.eventBus,
      };
    }
  },
};
</script>
<style lang="scss" scoped>
$gray: #ddd;
.collapse {
  border: 1px solid $gray;
  border-radius: 4px;
}
</style>