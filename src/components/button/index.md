---
title: Button
nav:
  title: Components
  path: /components
---

## Foo

```tsx |  phone
import React from 'react';
import { Button } from 'library';
import './index.md.less';

export default () => (
  <div className="jdd-button-md">
    <h2 className="jdd-button-md-title">按钮类型</h2>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="success">成功按钮</Button>

    <h2 className="jdd-button-md-title">按钮尺寸</h2>
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

    <h2 className="jdd-button-md-title">朴素按钮</h2>
    <Button type="primary" plain>
      朴素按钮
    </Button>
    <Button type="success" plain>
      朴素按钮
    </Button>

    <h2 className="jdd-button-md-title">禁用状态</h2>
    <Button type="primary" disabled>
      禁用按钮
    </Button>
    <Button type="primary" plain disabled>
      禁用按钮
    </Button>
  </div>
);
```

## Demo:

### 按钮类型

###### 按钮支持 default, primary, info, danger, warning, success 六种类型，默认为 default

```tsx
export default () => null;
```

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

### 禁用按钮

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

<code src="./demo.tsx" phone></code>

<API src="./index.tsx"></API>
