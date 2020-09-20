<template>
  <div>
    <g-button @click="showToast">top</g-button>
  </div>
</template>
<script>
import Vue from "vue";
import Toast from "../../../src/Toast";
import Button from "../../../src/Button";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: { "g-toast": Toast, "g-button": Button },
  methods: {
    showToast() {
      this.$toast("我是toast内容", {
        position: "middle",
        enableHtml: false,
        closeButton: {
          text: "关闭",
        },
        autoClose: 3,
      });
    },
  },
};
</script>