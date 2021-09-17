---
title: Button
nav:
  title: Components
  path: /components
---

## Demo:

### 按钮类型

###### 按钮支持 default, primary, danger, warning, success 五种类型，默认为 default

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="success">成功按钮</Button>
  </>
);
```

### 按钮尺寸

###### 按钮支持 normal, large, small, mini 四种尺寸，默认为 normal

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" size="large">
      大号按钮
    </Button>
    <Button type="primary" size="normal">
      普通按钮
    </Button>
    <Button type="primary" size="small">
      小号按钮
    </Button>
    <Button type="primary" size="mini">
      mini按钮
    </Button>
  </>
);
```

### 朴素按钮

```tsx | preview
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" plain>
      朴素按钮
    </Button>
    <Button type="success" plain>
      朴素按钮
    </Button>
  </>
);
```

### 图标按钮

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" icon="search">
      按钮
    </Button>
    <Button type="primary" icon="edit" plain>
      按钮
    </Button>
  </>
);
```

### 禁用状态

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" disabled>
      禁用按钮
    </Button>
    <Button type="primary" plain disabled>
      禁用按钮
    </Button>
  </>
);
```

### 加载图标类型

###### 加载图标类型 circle, turn, line 三种，默认 circle

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" loading>
      加载中
    </Button>
    <Button type="primary" loading loadingType="circle" />
    <Button type="primary" loading loadingType="turn" />
    <Button type="primary" loading loadingType="line" />
  </>
);
```

### 块级元素

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" block>
      块级元素
    </Button>
  </>
);
```

### 自定义按钮

```tsx
import React from 'react';
import { Button } from 'library';

export default () => (
  <>
    <Button type="primary" borderRadius="10">
      改变圆角
    </Button>
    <Button type="primary" borderRadius="10" plain>
      改变圆角
    </Button>
    <Button type="primary" color="rgb(136, 232, 58)">
      主题按钮
    </Button>
    <Button type="primary" color="rgb(136, 232, 58)" plain>
      主题按钮
    </Button>
  </>
);
```

<code src="./demo.tsx" identifier="button-demo-phone" phone></code>

<API src="./index.tsx"></API>
