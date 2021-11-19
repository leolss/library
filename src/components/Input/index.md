---
title: Input
nav:
  title: Components
  path: /components
---

## Input 输入框

### 基础用法

```tsx
import React, { useState } from 'react';
import { Input } from 'library';

export default () => {
  const [value, setValue] = useState('defaultValue');
  return (
    <>
      <Input
        value={value}
        onChange={(val: any) => {
          setValue(val);
        }}
        placeholder="请输入文本"
      />
      <Input type="tel" placeholder="请输入数字" />
    </>
  );
};
```

### 输入框内容对齐

```tsx
import { Input } from 'library';

export default () => (
  <>
    <Input label="文本" placeholder="左对齐（默认）" />
    <Input label="文本" textAlign="right" placeholder="右对齐" />
    <Input
      label="订单号"
      textAlign="right"
      type="tel"
      value="11323456789"
      placeholder="请输入"
    />
  </>
);
```

### 额外的操作按钮插槽

```tsx
import { Input } from 'library';

export default () => (
  <>
    <Input label="短信验证码" append={<a>发送验证码</a>} placeholder="请输入" />
  </>
);
```

<code src="./demo.tsx" identifier="input-demo-phone" phone></code>
<API src="./index.tsx"></API>
