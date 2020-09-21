---
title:Toast
---

# 弹出提示框-Toast

## 预览

<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

## 使用方法

使用 Toast 组件，需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。

```vue
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
```

## 属性

### 1. position

可以设定 `Toast` 弹出的位置 ，支持 `top`, `middle`, `bottom` 三个值。

### 2. closeButton

`Toast` 组件的右侧按钮文本可编辑，并且支持传入一个回调。 `closeButton` 选项接收一个对象。对象包括 `text` 与 `callback` 属性。用于设定按钮的文本与回调。

### 3. autoClose

此属性可以设定 `Toast` 弹出后自动关闭的延时时长，单位为“ 秒 ”，默认延时 3 秒后自动关闭。

### 4. enableHtml

`Toast` 组件还支持 `HTML` 语法，该功能默认关闭，你需要传递一个 `enableHTML` 参数来开启它, `enableHtml:true` 。 开启后就可以在 `Toast` 内容区域写 `HTML` 语法。
