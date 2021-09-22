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
import { Badge, View } from 'library';

export default () => (
  <>
    <View align="center">
      <Badge dot>
        <span
          style={{
            width: '26px',
            height: '26px',
            background: '#ddd',
            display: 'inline-block',
          }}
        />
      </Badge>
      <span style={{ marginLeft: 12 }}>Dot badge</span>
    </View>
    <br />
    <View align="center" justify="between">
      <View justify="start">
        <span
          style={{
            width: '26px',
            height: '26px',
            background: '#ddd',
            display: 'inline-block',
          }}
        />
        <span style={{ marginLeft: 12 }}>content</span>
      </View>
      <Badge text={77} overflowCount={55} />
    </View>
    <br />
    <div>
      <Badge text={'促'} corner>
        <div style={{ height: '50px', width: '200px' }}>Use corner prop</div>
      </Badge>
    </div>
    <View>
      <Badge text={0} style={{ marginLeft: 12 }}>
        Text number 0
      </Badge>
      <Badge text={'new'} style={{ marginLeft: 12 }} />
    </View>
    <br />
    <View align="center" justify="between">
      <p>Custo corner</p>
      <Badge text={'促'} />
    </View>
    <br />
    <View>
      Marketing:
      <Badge text="减" hot style={{ marginLeft: 12 }} />
      <Badge text="惠" hot style={{ marginLeft: 12 }} />
      <Badge text="免" hot style={{ marginLeft: 12 }} />
      <Badge text="反" hot style={{ marginLeft: 12 }} />
      <Badge text="HOT" hot style={{ marginLeft: 12 }} />
    </View>
    <br />
    <View>
      Customize
      <Badge
        text="券"
        style={{
          marginLeft: 12,
          padding: '0 3px',
          backgroundColor: '#f19736',
          borderRadius: 2,
        }}
      />
      <Badge
        text="NEW"
        style={{
          marginLeft: 12,
          padding: '0 3px',
          backgroundColor: '#21b68a',
          borderRadius: 2,
        }}
      />
      <Badge
        text="自动缴费"
        style={{
          marginLeft: 12,
          padding: '0 3px',
          backgroundColor: '#fff',
          borderRadius: 2,
          color: '#f19736',
          border: '1px solid #f19736',
        }}
      />
    </View>
  </>
);
```

<API src="./index.tsx"></API>
