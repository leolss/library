---
title: View
nav:
  title: Components
  path: /components
---

## View

## 代码演示:

<code  src="./demo.tsx"  identifier="view-demo-phone" phone></code>

## 代码 Demo:

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

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => (
  <View ref={ref} tag="div">
    333
  </View>
);
```

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => (
  <View ref={ref} tag="div">
    444
  </View>
);
```

<API></API>
