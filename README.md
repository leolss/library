# library

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
  * docs --- 文档
  * docs-dist --- 文档生产
  * src
    * .umi
    * .umi-production
    * components --- 组件文件夹
      * button
        * index.tsx --- 组件逻辑
        * index.md --- 组件文档
        * index.less --- 组件样式
        * interface.ts --- 组件API
      * foo
      * ···
    * styles
      * global.less --- 全局样式
      * theme.less --- 组件主题
      * index.ts --- 出口文件
      * ···
    * utils --- 工具类
      * create.ts --- class生成器
      * ···
    * index.ts --- 出口文件
* .umirc --- dumi 配置文件
* .fatherrc.ts --- father-build 的配置文件，用于组件库打包
* typings.d.ts --- 全局typescript类型

### 组件规范

* 不要修改 全局样式、主题色 相关内容,需要改动时早会沟通.
* 组件书写到src/components中.暂时没做分包处理.推荐使用命令生成模板.命名跟随`camelCase`规范.
* 组件可以参照 赵成献 分享风格编写
* 不建议使用style编写组件样式、保留`extraStyle`props.
* 推荐使用 `createNamespace`方法 生成样式(基于vant)
* 组件注意处理监听、穿透、冒泡等问题
* `typescript` 类型 避免大量使用 `any`


### 写在最后

日常开发时候,只需要关注src/components 即可
如果我想写一个名为 view的组件,终端输入
``` bash
  # npm run generate:components [name]
  # 可变参数 name 为组件名,遵循小驼峰写法 如: camelCase
  $ npm run generate:components view
```
系统会自动在src/components生成 view文件夹,包含四个文件
* view
  * index.tsx --- 组件逻辑
  * index.md --- 组件文档
  * index.less --- 组件样式
  * interface.ts --- 组件API

组件产出不需要关心API的书写,会根据interface.ts自动生成文档.复杂组件需要编写demo的情况需要在组件对应的文档编写代码块
建议安装 [TS in Markdown](https://marketplace.visualstudio.com/items?itemName=amour1688.ts-in-markdown)
注意markdown 尽量不要添加头部注释.会使dumi错误识别,不能成功构建.

本文档 集成 `plugin-locale`,目前支持中英双语言.有兴趣可以搞一搞

祝大家开发愉快,有问题及时沟通反馈.
