---
title: View
nav:
  title: Components
  path: /components
---

## View 视图

### 介绍

View 用于快速布局.

## 代码演示:

### 排列方向

指定内部元素是如何在 View 容器中布局的,定义了主轴的方向.支持`row`、`column` 两种类型,默认为`row`

```tsx
import React from 'react';
import { View } from 'library';
export default () => (
  <>
    <View direction="row"></View>
    <View direction="column"></View>
  </>
);
```

### 主轴方向对齐方式

指定内部元素在主轴方向对齐方式.支持`stretch` 、`start`、`center` 、`end`、`baseline`、`around`、`between`七种类型,默认为`stretch`

```tsx
import React from 'react';
import { View } from 'library';
export default () => (
  <>
    <View justify="start"></View>
    <View justify="center"></View>
    <View justify="end"></View>
    <View justify="baseline"></View>
    <View justify="around"></View>
    <View justify="between"></View>
  </>
);
```

### 交叉轴方向对齐方式

指定内部元素在交叉轴方向对齐方式.支持 `stretch`、`start`、`center` 、`end` 、`baseline`五种类型,默认为`stretch`

```tsx
import React from 'react';
import { View } from 'library';
export default () => (
  <>
    <View align="start"></View>
    <View align="center"></View>
    <View align="end"></View>
    <View align="baseline"></View>
  </>
);
```

### 多行显示

指定内部元素单行显示还是多行显示.`true`为多行显示.默认单行显示

```tsx
import React from 'react';
import { View } from 'library';
export default () => (
  <>
    <View wrap></View>
  </>
);
```

<code  src="./demo.tsx"  identifier="view-demo-phone" phone></code>

<API></API>
