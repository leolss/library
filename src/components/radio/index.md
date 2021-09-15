---
title: Radio
nav:
  title: Components
  path: /components
---

## 单选框(Radio)

### 默认

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

### 修改背景色

```tsx
import React, { useState, useCallback } from 'react';
import { Radio } from 'library';
const [checked, setChecked] = useState(false);
const changeRadio = useCallback(() => {
  setChecked(!checked);
}, [checked]);

export default () => (
  <Radio
    checked={checked}
    onClick={changeRadio}
    backgroundColor="red"
    borderColor="red"
  >
    单选框
  </Radio>
);
```

<API src="./index.tsx"></API>
