# Smart Design

## 快速上手

安装依赖,

```bash
$ npm i
#or
$ yarn i
```

启动开发环境,

```bash
$ npm start
```

构建文档,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

Generate a component

```bash
$ npm run generate:component [name]
```

### 目录结构

- docs --- 文档
- docs-dist --- 文档生产
- src
  - .umi
  - .umi-production
  - components --- 组件文件夹
    - button
      - index.tsx --- 组件逻辑
      - index.md --- 组件文档
      - index.less --- 组件样式
      - interface.ts --- 组件 API
    - foo
    - ···
  - styles
    - global.less --- 全局样式
    - theme.less --- 组件主题
    - index.ts --- 出口文件
    - ···
  - utils --- 工具类
    - create.ts --- class 生成器
    - ···
  - index.ts --- 出口文件
- .umirc --- dumi 配置文件
- .fatherrc.ts --- father-build 的配置文件，用于组件库打包
- typings.d.ts --- 全局 typescript 类型

### 组件规范

- 不要修改 全局样式、主题色 相关内容,需要改动时早会沟通.
- 组件书写到 src/components 中.暂时没做分包处理.推荐使用命令生成模板.命名跟随`camelCase`规范.
- 组件可以参照 `vant | antd` 风格编写
- 不建议使用 style 编写组件样式、保留`extraStyle`props.
- 推荐使用 `createNamespace`方法 生成样式(基于 vant)
- 组件注意处理监听、穿透、冒泡等问题
- `typescript` 类型 避免大量使用 `any`

### 写在最后

日常开发时候,只需要关注 src/components 即可
如果我想写一个名为 view 的组件,终端输入

```bash
  # npm run generate:components [name]
  # 可变参数 name 为组件名,遵循小驼峰写法 如: camelCase
  $ npm run generate:components view
```

系统会自动在 src/components 生成 view 文件夹,包含四个文件

- view
  - index.tsx --- 组件逻辑
  - index.md --- 组件文档
  - index.less --- 组件样式
  - interface.ts --- 组件 API

组件产出不需要关心 API 的书写,会根据 interface.ts 自动生成文档.复杂组件需要编写 demo 的情况需要在组件对应的文档编写代码块.Demo 应将组件 API 介绍详尽.
建议安装 [TS in Markdown](https://marketplace.visualstudio.com/items?itemName=amour1688.ts-in-markdown)
注意 markdown 尽量不要添加头部注释.会使 dumi 错误识别,不能成功构建.
另外,本项目对移动端做了额外适配.demo 需要移动端演示时,需要添加 preview 标记,如下所示

```tsx | preview
import React, { useRef } from 'react';
import { View } from 'library';
const ref = useRef();
export default () => (
  <View ref={ref} tag="div">
    2222
  </View>
);
```

定义组件接口时,注意书写文档注释.必须字段: 属性名、描述、类型、默认值(无默认值填充 --)

```ts
export interface ViewProps extends BaseProps {
  /**
   * @description 描述
   * @default --
   */
  props?: string;
}
```

更多 API 注解参考[react-docgen-typescrip](https://github.com/styleguidist/react-docgen-typescript#example)

本文档 集成 `plugin-locale`,目前支持中英双语言.有兴趣可以搞一搞

祝大家开发愉快,有问题及时沟通反馈.
