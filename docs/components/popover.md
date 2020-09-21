---
title:Popover
---

# 弹出层-Popover

## 预览

<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

## 使用方法

```html
<div class="popover-wrapper">
  <g-popover position="bottom">
    <template slot="content">
      popover 中的内容
    </template>
    <g-button>点击显示内容</g-button>
  </g-popover>
  <g-popover trigger="hover">
    <template slot="content">
      popover 中的内容
    </template>
    <g-button>hover 显示内容</g-button>
  </g-popover>
</div>
```

## 属性

### 1. position

position 用于设置显示位置,默认为 `top` ，可选择的参数为 `top` , `left` , `right` , `bottom` ,分别设置 `popover` 显示的方位。

### 2. trigger

`trigger` 用于设置触发的事件，默认为 `click` ,此外还支持 `hover`
