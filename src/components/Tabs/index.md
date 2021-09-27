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
import React, { useCallback } from 'react';
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

### 标签滚动

```tsx
<Tabs activeKey="tab1">
  {Array(8)
    .fill(null)
    .map((item, index) => (
      <TabPane key={`tab${index + 1}`} label={`Tab${index + 1}`}>
        选项卡 - {`tab${index + 1}`}
      </TabPane>
    ))}
</Tabs>
```

### 标签下面扩展内容

```tsx
import React, { useMemo } from 'react';
import { Tabs, TabPane } from 'library';

const RenderHeaderSlot = useMemo(() => {
  return <div style={{ padding: '10px' }}>headerSlot内容</div>;
}, []);

export default () => {
  <Tabs headerSlot={RenderHeaderSlot}>
    <TabPane key="tab1" label="Tab1">
      第一个选项卡 - tab1
    </TabPane>
    <TabPane key="tab2" label="Tab2">
      第二个选项卡 - tab2
    </TabPane>
    <TabPane key="tab3" label="Tab3">
      第三个选项卡 - tab3
    </TabPane>
  </Tabs>;
};
```

### 每个标签下面的扩展内容

```tsx
import React from 'react';
import { Tabs, TabPane, Badge } from 'library';

export default () => {
  <Tabs>
    <TabPane key="tab1" label="Tab1" tabSlot={<Badge dot />}>
      第一个选项卡 - tab1
    </TabPane>
    <TabPane
      key="tab2"
      label="Tab2"
      tabSlot={<Badge text={77} overflowCount={55} />}
    >
      第二个选项卡 - tab2
    </TabPane>
    <TabPane
      key="tab3"
      label="Tab3"
      tabSlot={
        <Badge
          text="NEW"
          style={{ backgroundColor: '#21b68a', borderRadius: 2 }}
        />
      }
    >
      第三个选项卡 - tab3
    </TabPane>
  </Tabs>;
};
```

<code src="./demo.tsx"  identifier="tabs-demo-phone" phone></code>
<API src="./index.tsx"></API>
