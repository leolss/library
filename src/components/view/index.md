---
title: View
nav:
  title: Components
  path: /components
---

# View 视图

## 代码演示:

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
export default () => {
  const ref = useRef();
  return (
    <View ref={ref} tag="div" justify="center">
      111
    </View>
  );
};
```

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => (
  <View ref={ref} tag="div">
    222
  </View>
);
```

<code  src="./demo.tsx"  identifier="view-demo-phone" phone></code>

<API></API>
