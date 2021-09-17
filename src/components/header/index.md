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
import { Header } from 'library';

export default () => (
  <div>
    <Header>Header测试</Header>

    <Header goBack={() => {}}>Header测试</Header>

    <Header search={() => {}} goBack={() => {}}>
      Header测试
    </Header>

    <Header close={() => {}} search={() => {}} goBack={() => {}}>
      Header测试
    </Header>

    <Header Icon={<div>1</div>}>Header测试</Header>
  </div>
);
```

```tsx | phone
import React from 'react';
import { Header } from 'library';

export default () => (
  <div>
    <Header>Header测试</Header>

    <Header goBack={() => {}}>Header测试</Header>

    <Header search={() => {}} goBack={() => {}}>
      Header测试
    </Header>

    <Header close={() => {}} search={() => {}} goBack={() => {}}>
      Header测试
    </Header>

    <Header Icon={<div>1</div>}>Header测试</Header>
  </div>
);
```

<API src="./index.tsx"></API>
