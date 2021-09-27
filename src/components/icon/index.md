---
title: Icon
nav:
  title: Components
  path: /components
---

# Icon 图标

### 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；
- 命名顺序：[icon 名]-[形状可选]-[描线与否]-[方向可选]。

### 如何使用

`<Icon type='check'/>`

#### 提示

现在，我们只支持内置的 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading' 这些 icon 类型。

如果需要用自定义的 icon 类型，有这几种方法：

1. 使用自己的 iconfont 文件
2. 其他方法，可以复用我们已经提供的 .jdd-icon 样式名

<code  src="./demo.tsx"  identifier="Icon-demo-phone" phone></code>

### 代码演示

```tsx
import React from 'react';
import { Icon, View } from 'library';
const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
const color = ['#108ee9', '#6abf47', '#ffc600', '#f4333c', '#ff5b05', '#000'];
export default () => (
  <>
    // 基本用法
    <Icon type="check"></Icon>
    // 改变大小
    <View align="center" justify="between">
      {size.map((item) => (
        <div>
          <Icon type="search" size={item} />
          <p>{item}</p>
        </div>
      ))}
    </View>
    // 改变颜色
    <View align="center" justify="between">
      {color.map((item) => (
        <div>
          <Icon type="search" color={item} />
          <p>{item}</p>
        </div>
      ))}
    </View>
  </>
);
```

<API src="./index.tsx"></API>
