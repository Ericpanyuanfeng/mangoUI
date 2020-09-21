<template>
  <div>
    <g-button @click="showToast1">上方弹出</g-button>
    <g-button @click="showToast2">中间弹出</g-button>
    <g-button @click="showToast3">下方弹出</g-button>
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
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("我是 Toast 内容", {
        position,
        enableHtml: false,
        closeButton: {
          text: "关闭",
          callback() {
            console.log("已关闭弹窗");
          },
        },
        autoClose: 3,
      });
    },
  },
};
</script>