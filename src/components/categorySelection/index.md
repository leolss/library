---
title: CategorySelection
nav:
  title: Components
  path: /components
---

## Foo

Demo:

```tsx | phone
import React from 'react';
import { CategorySelection, Category } from 'library';

export default () => (
  <CategorySelection title="分类标题" activeValue={1}>
    <Category value="1" label="销量" />
    <Category value="2" label="好评" disabled />
    <Category value="3" label="销量3" />
    <Category value="4" label="销量4" />
    <Category value="5" label="销量5" />
    <Category value="6" label="销量6" />
    <Category value="7" label="销量7" />
    <Category value="8" label="销量8" />
  </CategorySelection>
);
```

<API src="./index.tsx"></API>

## catetory

<API src="./category/index.tsx" title="sdfs"></API>
