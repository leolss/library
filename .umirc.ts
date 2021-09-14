/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-10 13:47:27
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-14 13:22:40
 * @Description: 配置文件
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'library',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
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
