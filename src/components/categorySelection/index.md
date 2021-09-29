---
title: CategorySelection
nav:
  title: Components
  path: /components
---

## Foo

### 常规使用

```tsx | pure
<CategorySelection title="常规使用">
  <Category value="1" label="销量" />
  <Category value="2" label="好评" />
</CategorySelection>
```

### 默认选中

```tsx | pure
<CategorySelection title="默认选中" activeValue="2">
  <Category value="1" label="销量" />
  <Category value="2" label="好评" />
  <Category value="3" label="信用" />
</CategorySelection>
```

### 禁用状态

```tsx | pure
<CategorySelection title="禁用状态">
  <Category value="1" label="销量" />
  <Category value="2" label="好评" disabled />
  <Category value="3" label="信用" />
</CategorySelection>
```

### 升序降序

###### showSort 为 true 时才会显示升序降序按钮，selected 才会有效

###### 选中当前标签，selected 默认为 desc

```tsx | pure
<CategorySelection title="升序降序" activeValue="1">
  <Category value="1" label="销量" showSort />
  <Category value="2" label="好评" showSort selected="asc" />
  <Category value="3" label="信用" />
</CategorySelection>
```

### 多个标签

```tsx | pure
<CategorySelection title="多个标签" activeValue="5">
  {Array(8)
    .fill(null)
    .map((item, index) => (
      <Category key={index} value={`${index + 1}`} label={`标签${index + 1}`} />
    ))}
</CategorySelection>
```

### 内容扩展

```tsx | pure
import { CategorySelection, Category, Badge } from 'library';

<CategorySelection title="内容扩展" activeValue="1">
  <Category value="1" label="销量" slot={<Badge dot />} />
  <Category
    value="2"
    label="好评"
    slot={<Badge text={77} overflowCount={55} />}
  />
  <Category value="3" label="信用" />
</CategorySelection>;
```

### 多选标签

```tsx | pure
<CategorySelection title="多选标签" multiple>
  <Category value="1" label="销量" />
  <Category value="2" label="好评" />
  <Category value="3" label="信用" />
</CategorySelection>
```

### 多选标签

```tsx | pure
<CategorySelection title="多选标签" multiple>
  <Category value="1" label="销量" showSort />
  <Category value="2" label="好评" showSort />
  <Category value="3" label="信用" />
</CategorySelection>
```

<code src="./demo.tsx" identifier="demo-categoryselection-phone" phone></code>

<API src="./index.tsx"></API>
<API src="./category/index.tsx" title="sdfs"></API>
