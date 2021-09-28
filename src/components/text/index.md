---
title: Text
nav:
  title: Components
  path: /components
---

## Text 文本

### 默认

```tsx
import React from 'react';
import { Text } from 'library';

export default () => <Text>文本展示</Text>;
```

### 文本位置

###### 文本位置有 left, center, right 三种位置，默认为 left

```tsx
import React from 'react';
import { Text } from 'library';

export default () => (
  <>
    <Text width={100} textAlign="left">
      居左文本
    </Text>
    <Text width="100%" textAlign="center">
      居中文本
    </Text>
    <Text width="80vw" textAlign="right">
      居右文本
    </Text>
  </>
);
```

### 文本的修饰

###### 文本的修饰有 none, underline, overline, line-through 四种类型，默认为 none

```tsx
import React from 'react';
import { Text } from 'library';

export default () => (
  <>
    <Text textDecoration="underline" marginRight={20}>
      下划线
    </Text>
    <Text textDecoration="overline" marginRight={20}>
      上划线
    </Text>
    <Text textDecoration="line-through">删除线</Text>
  </>
);
```

### 文本溢出

```tsx
import React from 'react';
import { Text } from 'library';

export default () => (
  <>
    <Text width="100%" lineFeed>
      此处展示的是单行文本溢出情况，需要设置lineFeed和width
    </Text>
    <Text lineNum={3}>
      此处展示的是多行文本溢出情况，需要设置lineNum,
      lineNum设置的数字是几，就会显示几行文本，在文本末尾会显示溢出的省略号，多出的文本会被隐藏
    </Text>
  </>
);
```

### 边框

```tsx
import React from 'react';
import { Text } from 'library';

export default () => (
  <>
    <Text showBorder block>
      默认边框
    </Text>
    <Text showBorder borderStyle="dashed">
      虚线边框
    </Text>
    <Text showBorder borderStyle="dotted">
      点状边框
    </Text>
    <Text
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      多类型
    </Text>
    <Text showBorder borderStyle="double" borderWidth={4}>
      双线
    </Text>
    <Text showBorder borderStyle="groove" borderWidth={2}>
      凹槽边框
    </Text>
    <Text showBorder borderStyle="ridge" borderWidth={2}>
      垄状边框
    </Text>
    <Text showBorder borderStyle="inset" borderWidth={2}>
      inset边框
    </Text>
    <Text showBorder borderStyle="outset" borderWidth={2}>
      outset边框
    </Text>
    <Text showBorder borderStyle="solid" borderRadius={4}>
      圆角
    </Text>
  </>
);
```

### 其他设置

```tsx
import React from 'react';
import { Text } from 'library';

export default () => (
  <>
    <Text fontSize={16}>16号字</Text>
    <Text color="#fff" backgroundColor="#000">
      白色字，黑背景
    </Text>
    <Text fontWeight="bold">加粗</Text>
    <Text
      showBorder
      marginTop={10}
      marginRight={10}
      marginBottom={10}
      marginLeft={10}
    >
      外边距
    </Text>
    <Text
      showBorder
      paddingTop={10}
      paddingRight={10}
      paddingBottom={10}
      paddingLeft={10}
    >
      内边距
    </Text>
  </>
);
```

<code src="./demo.tsx" identifier="text-demo-phone" phone></code>
<API src="./index.tsx"></API>
