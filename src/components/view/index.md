---
title: View
nav:
  title: Components
  path: /components
---

## Foo

Demo:

```tsx
import React,{useRef,createRef,useEffect} from 'react';
import { View } from 'library';
export default () =>{ 
  const ref = useRef()
  useEffect(() => {
    console.log(ref.current)
  })
 return <View className="jdd-view" ref={ref}>我是view </View>
}
```

<API src="./index.tsx"></API>

