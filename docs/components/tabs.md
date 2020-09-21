---
title:Tabs
---

# 标签-Tabs

## 预览

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

## 使用方法

此组件的 `Tabs` `TabsItem` `TabsPane` 必须有一一对应的 `name`。

```html
<div>
  <g-tabs :selected.sync="selectedTab">
    <g-tabs-head>
      <g-tabs-item name="tab1">
        <g-icon name="settings"></g-icon>
        Tab1
      </g-tabs-item>
      <g-tabs-item name="tab2">
        Tab2
      </g-tabs-item>
      <g-tabs-item name="tab3" disabled>
        Tab3
      </g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="tab1">
        内容1
      </g-tabs-pane>
      <g-tabs-pane name="tab2">
        内容2
      </g-tabs-pane>
      <g-tabs-pane name="tab3">
        内容3
      </g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
</div>
```

## 属性

### 1. 高亮

默认高亮状态 `Tabs` 需要设置 `selected` 属性来确定默认标签。

你可以这样：`:selected.sync="selectedTab"`,其中 `selectedTab` 是你需要传递的默认值。

并且该标签的子组件应该是 `TabsHead` 和 `TabsBody` ，否则你会得到一个警告。

### 2. 不可用状态

`disabled` 属性用于 `TabsItem` 标签，可以设置该标签的不可用状态。
