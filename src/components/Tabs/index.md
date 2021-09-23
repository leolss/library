---
title: Tabs
nav:
  title: Components
  path: /components
---

## Tabs

Demo:

```tsx | phone
import React, { useEffect, useRef } from 'react';
import { Tabs, TabPane } from 'library';

const ref = useRef();
export default () => (
  <Tabs ref={ref} activeKey="bamboo" animated={true}>
    <TabPane key="light" label="light22">
      Light111
    </TabPane>
    <TabPane key="bamboo" label="bamboo22">
      Bamboo111
    </TabPane>
    <TabPane key="cute" label="cute22" disabled>
      Cute111
    </TabPane>
  </Tabs>
);
```

<API src="./index.tsx"></API>
