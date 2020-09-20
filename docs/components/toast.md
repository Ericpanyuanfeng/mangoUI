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

```
<template>
  <div>
    <g-button @click="auto">设置 zIndex</g-button>&nbsp;&nbsp;
    <g-button @click="auto">会自动关闭</g-button>&nbsp;&nbsp;
    <g-button @click="auto">点击按钮才关闭</g-button>&nbsp;&nbsp;
    <g-button @click="auto">支持 HTML 语法</g-button>&nbsp;&nbsp;
    <br />
    <g-button @click="top">上方弹出</g-button>
    <g-button @click="middle">中间弹出</g-button>
    <g-button @click="bottom">下方弹出</g-button>
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
    auto() {
      this.$toast("我是 toast 内容", {
        zIndex: 30,
        autoClose: 2,
        closeButton: {
          text: "确定",
          callback: () => {
            console.log("回调的输出");
          },
        },
        enableHTML: true,
      });
    },
    top() {
      this.$toast("我是 toast 内容", { position: "top" });
    },
    middle() {
      this.$toast("我是 toast 内容", { position: "middle" });
    },
    bottom() {
      this.$toast("我是 toast 内容", { position: "bottom" });
    },
  },
};
</script>
```

## 属性

### 2. align

通过给 `Row` 设置 `align` 属性, 可以定义其子组件在该节点里面的排版方式。当该属性分别取`left`,`right`,`center` 的时候其子组件的排列方式分别为【靠左排列】【靠右排列】和【居中排列】。

```
<i-row align="left">
  <i-col span="8">left</i-col>
  <i-col span="8">left</i-col>
</i-row>
<i-row align="center">
  <i-col span="8">center</i-col>
  <i-col span="8">center</i-col>
</i-row>
<i-row align="right">
  <i-col span="8">right</i-col>
  <i-col span="8">right</i-col>
</i-row>
```

### 3. span

栅格系统中用 1 到 24 的值来表示列的跨越的范围。通过设置 `col` 的 `span` 属性来实现。

例如：三个等宽的列可以使用`<i-col span="8">列</i-col>` 来创建其中一个，其余两个再复制两份。

### 4. offset

通过设置 `col` 的 `offset` 属性,可以将列向右侧偏。
例如，offset="4" 将元素向右侧偏移了 4 个列（column）的宽度。

```
<i-row>
  <i-col span="2" offset="6"> <span>col-2</span> </i-col>
  <i-col span="5" offset="3"> <span>col-5</span> </i-col>
  <i-col span="4" offset="4"> <span>col-4</span> </i-col>
</i-row>
```

### 5. 响应式

栅格系统支持 ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。
若不给 `col` 这四个属性，默认为 手机端响应，`span` 值为 24。
注意： 若设置这四个属性，则需要对应属性 + `offset` 的值的和为 24。

```
<g-row class="row">
  <g-col class="item"
          span="24"
         :ipad="{span:8}"
         :narrow-pc="{span:4}"
         :pc="{span: 2}"
         :wide-pc="{span:1}"
 >
    col
  </g-col>
  <g-col class="item"
          span="24"
         :ipad="{span:16}"
         :narrow-pc="{span:20}"
         :pc="{span: 20,offset:2}"
         :wide-pc="{span:21}"
  >
    col
  </g-col>
</g-row>
```
