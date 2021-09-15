---
title: View
nav:
  title: Components
  path: /components
---

## View

## 代码演示:

```tsx | preview
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => {
  return (
    <>
      <View ref={ref} tag="div">
        2222
      </View>
      <View ref={ref} tag="div">
        3333
      </View>
    </>
  );
};
```

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => {
  return (
    <View ref={ref} tag="div">
      我是View111
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
    3333
  </View>
);
```

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => (
  <View ref={ref} tag="div">
    44444
  </View>
);
```

```tsx
import React, { useEffect, useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => (
  <View ref={ref} tag="div">
    5555
  </View>
);
```

<API></API>
