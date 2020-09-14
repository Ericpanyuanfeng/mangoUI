<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MgLayout",
  data() {
    return {
      layoutClass: {
        hasSilder: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "MgSilder") {
        this.layoutClass.hasSilder = true;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 1px solid red;
  &.hasSilder {
    flex-direction: row;
  }
}
</style>