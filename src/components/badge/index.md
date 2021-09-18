---
title: Badge
nav:
  title: Components
  path: /components
---

# Badge 徽标数

徒步右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

#### 规则

- 当用户只需要知道大致有内容更新时，应该使用红点型，如：社交中的群消息通知。
- 当用户有必要知晓每条更新时，应该使用数字型。如：社交中的一对一的消息通知。

<code  src="./demo.tsx"  identifier="Badge-demo-phone" phone></code>

### 代码演示:

```tsx
/**
 * title：基本
 * desc：结合view的案例参考。
 */
import React from 'react';
import { Badge } from 'library';

export default () => <Badge className="jdd-badge"></Badge>;
```

<API src="./index.tsx"></API>
