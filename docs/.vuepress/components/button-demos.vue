<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button-group>
      <g-button>默认按钮</g-button>
      <g-button>默认按钮</g-button>
      <g-button>默认按钮</g-button>
    </g-button-group>
  </div>
</template>
<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/button-group";
export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup,
  },
};
</script>
