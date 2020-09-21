<template>
  <div class="popover-wrapper">
    <g-popover position="bottom">
      <template slot="content">popover 中的内容</template>
      <g-button>点击显示内容</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">popover 中的内容</template>
      <g-button>hover 显示内容</g-button>
    </g-popover>
  </div>
</template>
<script>
import Button from "../../../src/button";
import Popover from "../../../src/popover";
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button,
  },
};
</script>
