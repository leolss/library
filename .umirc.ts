/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-10 13:47:27
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-16 16:36:53
 * @Description: 配置文件
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Smart Design',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // API解析配置
  apiParser: {
    propFilter: {
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
  resolve: {
    // markdown默认不渲染代码块
    passivePreview: true,
  },
  // 导航
  navs: {
    'en-US': [null],
    'zh-CN': [null],
  },
});
