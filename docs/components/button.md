---
title:Button
---

# 按钮

## 预览

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

## 使用方法

```
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
<i-button-group>
  <i-button>默认按钮</i-button>
  <i-button>默认按钮</i-button>
  <i-button>默认按钮</i-button>
</i-button-group>
```

## 属性

### 1. 图标

通过设置 `icon` 属性在 Button 内嵌入一个 `Icon`。

通过设置 `iconPosition` 属性改变 `Icon` 在 `Button` 中的位置，仅支持`left`和`right`两个位置。

### 2. 加载中状态

通过设置 `loading` 属性，可以让按钮处于加载中状态。

### 3. 不可用状态

通过设置 `disabled` 属性，可将按钮设置为不可用状态

### 4. 按钮组

通过 `g-button-group` 标签包裹 `g-button` 标签可实现按钮组功能
