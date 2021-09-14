/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 15:10:57
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-13 16:58:53
 * @Description: 生成文件模板脚本
 */

const fs = require('fs');
const path = require('path');
// 组件名
const { name } = require('minimist')(process.argv.slice(2));
if (!name) {
  console.log('请输入组件名称');
  console.log('eg: npm run generate:component --name newComponent');
  return;
}
// 首字母大写
const Name = name.charAt(0).toUpperCase() + name.slice(1);

// 目标目录
const targetPath = path.join(`${__dirname}/src/components`, name);
if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath);
} else {
  console.log('目录已存在');
  return;
}

//写入文件
let tsxStr = `
import React from 'react';
import { ${Name}Props } from './interface';
import './index.less';

const ${Name}: React.FC<${Name}Props> = () => <h1>Hello,world</h1>;
${Name}.displayName = '${Name}';
export default ${Name};
`;
fs.writeFileSync(`${targetPath}/index.tsx`, tsxStr, { encoding: 'utf8' });

let tsStr = `
export interface ${Name}Props {
  /**
   * @description 额外的类名
   * @default -
   */
  className?: string;
}
`;
fs.writeFileSync(`${targetPath}/interface.ts`, tsStr, { encoding: 'utf8' });

let mdStr = `---
title: ${Name}
nav:
  title: Components
  path: /components
---

## Foo

Demo:

\`\`\`tsx
import React from 'react';
import { ${Name} } from 'library';

export default () => <${Name} className="jdd-${name}"></${Name}>;
\`\`\`

<API src="./index.tsx"></API>

`;
fs.writeFileSync(`${targetPath}/index.md`, mdStr, { encoding: 'utf8' });

let styleStr = `.jdd-${name}{

}
`;
fs.writeFileSync(`${targetPath}/index.less`, styleStr, { encoding: 'utf8' });

// 导出生成的组件
const fileStr = fs.readFileSync(`src/index.ts`);
fs.writeFileSync(
  `src/index.ts`,
  `${fileStr}\nexport { default as ${Name} } from './components/${name}';`,
  { encoding: 'utf8' },
);
