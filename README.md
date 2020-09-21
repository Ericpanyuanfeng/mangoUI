# 芒果 UI -- 一个 Vue UI 组件

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing:border-box}
```

IE 8 及以上浏览器都支持此样式。

1. 安装 useful-mango

```
npm i save useful-mango
```

3. 引入 useful-mango

```
import { Button, ButtonGroup,Icon } from "useful-mango";
import "useful-mango/dist/index.css";
export default {
  name: "app",
  components: {
    "g-button": Button,
    "g-icon": Icon,
  },
};
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
