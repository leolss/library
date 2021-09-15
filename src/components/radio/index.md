---
title: Radio
nav:
  title: Components
  path: /components
---

## 单选框(Radio)

Demo:

```tsx
import React, { useState, useCallback } from 'react';
import { Radio } from 'library';
const [checked, setChecked] = useState(false);
const changeRadio = useCallback(() => {
  setChecked(!checked);
}, [checked]);

export default () => (
  <Radio checked={checked} onClick={changeRadio}>
    单选框
  </Radio>
);
```

<API src="./index.tsx"></API>
