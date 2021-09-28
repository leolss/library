---
title: NoData
nav:
  title: Components
  path: /components
---

## Foo

Demo:

```tsx
import React from 'react';
import { NoData, Header } from 'library';

export default () => (
  <div>
    <Header>你好，我是测试标题</Header>
    <NoData top={200}></NoData>
    <NoData label="暂无库存信息" top={200}></NoData>
  </div>
);
```

```tsx | phone
import React from 'react';
import { NoData, Header } from 'library';

export default () => (
  <div>
    <Header goBack={() => {}} title="我是一个很努力的小header" />
    <NoData top={200}></NoData>
    <NoData label="我是一个很空很空的容器，我只存放图片和我" top={200}></NoData>
  </div>
);
```

<API src="./index.tsx"></API>
