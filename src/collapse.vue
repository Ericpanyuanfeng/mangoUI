<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MgCollapse",
};
</script>
<style lang="scss" scoped>
$gray: #ddd;
.collapse {
  border: 1px solid $gray;
  border-radius: 4px;
}
</style>