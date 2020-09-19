---
title:Grid
---

# 栅格-Grid

## 预览

<ClientOnly>
<grid-demos></grid-demos>
</ClientOnly>

## 使用方法

```
<g-row class="row">
  <g-col class="item" span="24">col-24</g-col>
</g-row>
<g-row>
  <g-col class="item" span="12">col-12</g-col>
  <g-col class="item" span="12">col-12</g-col>
</g-row>
<g-row class="row">
  <g-col class="item" span="8">col-8</g-col>
  <g-col class="item" span="8">col-8</g-col>
  <g-col class="item" span="8">col-8</g-col>
</g-row>
<g-row class="row">
  <g-col class="item" span="6">col-6</g-col>
  <g-col class="item" span="6">col-6</g-col>
  <g-col class="item" span="6">col-6</g-col>
  <g-col class="item" span="6">col-6</g-col>
</g-row>
```

## 属性

### 1. gutter

通过给 `Row` 设置 `gutter` 属性, 可以让栅格有间隔，单位为 px 。

```
<g-row gutter="30">
  <g-col span="8"> <span> col-8; gutter-30;</span> </g-col>
  <g-col span="8"> <span> col-8; gutter-30;</span> </g-col>
  <g-col span="8"> <span> col-8; gutter-30;</span> </g-col>
</g-row>
<g-row gutter="20">
  <g-col span="8"> <span> col-8; gutter-20;</span> </g-col>
  <g-col span="8"> <span> col-8; gutter-20;</span> </g-col>
  <g-col span="8"> <span> col-8; gutter-20;</span> </g-col>
</g-row>
```

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
