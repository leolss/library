---
title: Image
nav:
  title: Components
  path: /components
---

<code  src="./demo.tsx"  identifier="Image-demo-phone" phone></code>

## Foo

Demo:

```tsx
import React from 'react';
import { View, Text, Image, Toast } from 'library';

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';
export default () => {
  const fallback = <p>我加载失败了...</p>;
  const placeholder = <p>我在加载中...</p>;
  return (
    <>
      <Text paddingTop={10}>基础用法</Text>
      <Image src={demoSrc} fallback={fallback}></Image>
      <div>
        <View direction="column">
          <Text paddingTop={10}>fit填充模式</Text>
          <Image
            src={demoSrc}
            width={100}
            height={100}
            fit="fit"
            onClick={() => {
              Toast.info('我是点击事件');
            }}
          />
        </View>
        <View direction="column">
          <Text paddingTop={10}>contain填充模式</Text>
          <Image
            src={demoSrc}
            width={100}
            height={100}
            alt="wo shi tu pian"
            fit="contain"
          />
        </View>
        <View direction="column">
          <Text paddingBottom={10}>cover填充模式</Text>
          <Image src={demoSrc} width={100} height={100} fit="cover" />
        </View>
        <View direction="column">
          <Text paddingTop={10}>scale-down填充模式</Text>
          <Image
            src={demoSrc}
            width={100}
            height={100}
            fit="scale-down"
            placeholder={placeholder}
          />
        </View>
        <View direction="column">
          <Text paddingTop={10}>none填充模式</Text>
          <Image src={demoSrc} width={100} height={100} fit="none" />
        </View>
        <Text paddingTop={10}>自定义圆角</Text>
        <div>
          <span style={{ paddingLeft: '10px' }}></span>
          <Image
            style={{ borderRadius: 4 }}
            src={demoSrc}
            width={64}
            height={64}
            fit="cover"
          />
          <span style={{ paddingLeft: '10px' }}></span>
          <Image
            style={{ borderRadius: 8 }}
            src={demoSrc}
            width={64}
            height={64}
            fit="cover"
          />
          <span style={{ paddingLeft: '10px' }}></span>
          <Image
            style={{ borderRadius: 32 }}
            src={demoSrc}
            width={64}
            height={64}
            fit="cover"
          />
        </div>
        <Text paddingTop={10}>加载失败</Text>
        <div>
          <Image
            src="/404"
            width={100}
            height={100}
            onError={() => {
              Toast.fail('没有找到图片');
            }}
          />
        </div>
      </div>
    </>
  );
};
```

<API src="./index.tsx"></API>
