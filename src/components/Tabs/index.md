---
title: Tabs
nav:
  title: Components
  path: /components
---

## Tabs

### 默认选中第一个

```tsx
<Tabs>
  <TabPane key="tab1" label="Tab1">
    第一个选项卡 - tab1
  </TabPane>
  <TabPane key="tab2" label="Tab2">
    第二个选项卡 - tab2
  </TabPane>
  <TabPane key="tab3" label="Tab3">
    第三个选项卡 - tab3
  </TabPane>
</Tabs>
```

### 选中非第一个

```tsx
<Tabs activeKey="tab3">
  <TabPane key="tab1" label="Tab1">
    第一个选项卡 - tab1
  </TabPane>
  <TabPane key="tab2" label="Tab2">
    第二个选项卡 - tab2
  </TabPane>
  <TabPane key="tab3" label="Tab3">
    第三个选项卡 - tab3
  </TabPane>
  <TabPane key="tab4" label="Tab4">
    第四个选项卡 - tab4
  </TabPane>
</Tabs>
```

### 禁用标签

```tsx
<Tabs activeKey="tab1">
  <TabPane key="tab1" label="Tab1">
    第一个选项卡 - tab1
  </TabPane>
  <TabPane key="tab2" label="Tab2" disabled>
    第二个选项卡 - tab2
  </TabPane>
  <TabPane key="tab3" label="Tab3">
    第三个选项卡 - tab3
  </TabPane>
</Tabs>
```

### 切换动画

```tsx
<Tabs activeKey="tab1" animated>
  <TabPane key="tab1" label="Tab1">
    第一个选项卡 - tab1
  </TabPane>
  <TabPane key="tab2" label="Tab2">
    第二个选项卡 - tab2
  </TabPane>
  <TabPane key="tab3" label="Tab3">
    第三个选项卡 - tab3
  </TabPane>
  <TabPane key="tab4" label="Tab4">
    第四个选项卡 - tab4
  </TabPane>
</Tabs>
```

### 点击事件

```tsx
import React, { seCallback } from 'react';
import { Tabs, TabPane, Toast } from 'library';

const onClickTab = useCallback((key, e) => {
  Toast.info(key);
}, []);

export default () => {
  <Tabs activeKey="tab1" onClick={onClickTab}>
    <TabPane key="tab1" label="Tab1">
      第一个选项卡 - tab1
    </TabPane>
    <TabPane key="tab2" label="Tab2">
      第二个选项卡 - tab2
    </TabPane>
    <TabPane key="tab3" label="Tab3">
      第三个选项卡 - tab3
    </TabPane>
    <TabPane key="tab4" label="Tab4">
      第四个选项卡 - tab4
    </TabPane>
  </Tabs>;
};
```

<code src="./demo.tsx"  identifier="tabs-demo-phone" phone></code>
<API src="./index.tsx"></API>
