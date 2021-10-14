---
title: Header
nav:
  title: Components
  path: /components
---

## Header

Demo:

```tsx
import React from 'react';
import { Header, Text } from 'library';

export default () => (
  <div>
    <Text
      width="100%"
      textAlign="center"
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      只有标题
    </Text>
    <Header title="我是一个快乐的小Header"></Header>
    <Text
      width="100%"
      textAlign="center"
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      带返回
    </Text>
    <Header goBack={() => {}} title="明月天涯故人游"></Header>
    <Text
      width="100%"
      textAlign="center"
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      带查询
    </Text>
    <Header
      search={() => {}}
      goBack={() => {}}
      title="琴声潇潇难解我心中忧愁"
    ></Header>
  </div>
);
```

```tsx | phone
import React from 'react';
import { Header, Text, Icon } from 'library';

export default () => (
  <div>
    <Text
      width="100%"
      textAlign="center"
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      只有标题
    </Text>
    <Header title="我是一个快乐的小Header"></Header>
    <Text
      width="100%"
      textAlign="center"
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      带返回
    </Text>
    <Header goBack={() => {}} title="明月天涯故人游"></Header>
    <Text
      width="100%"
      textAlign="center"
      showBorder
      borderStyle="solid dashed dotted"
      borderColor="red"
      borderWidth={2}
    >
      带查询
    </Text>
    <Header
      search={() => {
        return <Icon type="check" />;
      }}
      goBack={() => {}}
      title="琴声潇潇难解我心中忧愁"
    ></Header>
  </div>
);
```

<API src="./index.tsx"></API>
