---
title: Toast
nav:
  title: Components
  path: /components
---

## Foo

Demo:

```tsx
import React, { useState, useCallback } from 'react';
import { Toast, Button } from 'library';
// const [showToast, setShowToast] = useState(false)
// const onToast = useCallback(() => {
//   setShowToast(!showToast)
// }, [showToast]);
const info = () => {
  Toast.success('你好你好===', 1000);
  console.log(Toast);
};
export default () => (
  <div>
    <button onClick={info}>text only text only text only</button>
  </div>
);
```

<!-- <API src="./index.tsx"></API> -->

## API

| 属性名 | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |
