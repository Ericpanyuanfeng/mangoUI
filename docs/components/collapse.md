---
title:Collapse
---

# 折叠面板-Collapse

## 预览

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

## 使用方法

```
<div>
  <g-collapse :selected.sync="selected">
    <g-collapse-item title="标题1" name="1">1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">3</g-collapse-item>
  </g-collapse>
</div>
```

## 属性

### 1. title

`title` 用于显示折叠面板的标题，为必传参数。

### 2. name

`name` 用于表示选中的 item，为必传参数

### 3. single

`Collapse` 组件可以通过设置 `single` 属性来更改显示效果。默认是 `false`，只能同时显示一个面板内容，当其值为 `true` 时，多个面板的内容可同时显示

### 4. 双向绑定

`Collapse` 组件的双向绑定，支持 `.sync` 修饰符。
