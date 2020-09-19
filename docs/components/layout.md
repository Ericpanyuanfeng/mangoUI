---
title:Layout
---

# 布局-Layout

## 预览

<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

## 使用方法

```
<div class="wrapper">
  <g-layout>
    <g-header> header </g-header>
    <g-layout>
      <g-sider> sider </g-sider>
      <g-content> content </g-content>
    </g-layout>
    <g-footer> footer </g-footer>
  </g-layout>
  <br>
  <g-layout>
    <g-header> header </g-header>
    <g-content> content </g-content>
    <g-footer> footer </g-footer>
  </g-layout>
  <br>
</div>
```

## 组件概述

### 1. Layout

布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

### 2. Header

顶部布局，其下可嵌套任何元素，只能放在 `Layout` 中。

### 3. Sider

侧边栏，其下可嵌套任何元素，只能放在 `Layout` 中。

### 4. Content

内容部分，其下可嵌套任何元素，只能放在 `Layout` 中。

### 5. Footer

底部布局，其下可嵌套任何元素，只能放在 `Layout` 中。
