/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-10 13:47:27
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-11-19 17:10:03
 * @Description: 配置文件
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'JDD Design',
  favicon:
    'https://storage.360buyimg.com/jdd-web-yinp/image/assets/%E4%BA%BF%E5%86%9C%E6%89%B9logo.png?Expires=3782378757&AccessKey=2pD6LmpoRGa4Z7wB&Signature=8L2DBcyIqQazhyUMyHBjPYOq7Hc%3D',
  logo: 'https://storage.360buyimg.com/jdd-web-yinp/image/assets/%E4%BA%BF%E5%86%9C%E6%89%B9logo.png?Expires=3782378757&AccessKey=2pD6LmpoRGa4Z7wB&Signature=8L2DBcyIqQazhyUMyHBjPYOq7Hc%3D',
  outputPath: 'docs-dist',
  mode: 'site',
  // API解析配置
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: false,
      // 忽略没有描述的属性
      skipPropsWithoutDoc: true,
    },
  },
  // 国际化
  locale: {
    default: 'zh-CN',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // 导航
  navs: {
    'en-US': [null],
    'zh-CN': [null],
  },
  /**
   * 菜单
   * @see
   *
   */
  // TODO 配置菜单
  // menus: {
  //   '/en-US/components': [
  //     {
  //       title: 'Architecture Design',
  //       children: ['components/index.en-US.md'],
  //     },
  //     {
  //       title: 'General',
  //       children: ['components/foo/index.md', 'components/button/index.md'],
  //     },
  //   ],
  //   '/components': [
  //     {
  //       title: '架构设计',
  //       children: ['components/index.md'],
  //     },
  //     {
  //       title: '通用',
  //       children: ['components/foo/index.md', 'components/button/index.md'],
  //     },
  //   ],
  // },

  // themeConfig: {
  //   hd: {
  //     // umi-hd 的 750 高清方案（默认值）
  //     rules: [{ mode: 'vw', options: [100, 750] }]
  //   },
  //   /**
  //    * 通过 webpack-chain 的 API 修改 webpack 配置。
  //    * @see https://d.umijs.org/zh-CN/config#chainwebpack
  //    */
  //   // chainWebpack() { },
  //   /**
  //  * 按需加载
  //  * @see https://d.umijs.org/zh-CN/config#dynamicimport
  //  */
  //   dynamicImport: true,
  //   /**
  //    * 配置额外需要做 babel 编译的 npm 包或目录。
  //    * @see https://d.umijs.org/zh-CN/config#extrababelincludes
  //    */
  //   extraBabelIncludes: [],
  //   /**
  //    * 配置额外的Babel插件
  //    * @see https://d.umijs.org/zh-CN/config#extrababelplugins
  //    */
  //   extraBabelPlugins: [],
  //   /**
  //    * 配置额外的CSS插件
  //    * @see https://d.umijs.org/zh-CN/config#extrapostcssplugins
  //    */
  //   extraPostCSSPlugins: [],
  //   /**
  //    * 配置额外的 meta 标签。数组中可以配置key:value形式的对象。
  //    * @see https://d.umijs.org/zh-CN/config#metas
  //    */
  //   metas: []
  // }
});
