/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 15:10:57
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-15 14:32:54
 * @Description: 生成文件模板脚本
 */

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
function getComponentConfig() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称',
      validate: function (val) {
        if (!val) return ' 请输入组件名称';
        return true;
      },
    },
    {
      type: 'list',
      name: 'type',
      message: '请选择生成组件类型',
      choices: [
        {
          name: '基于React.FC 风格组件',
          value: '1',
        },
        {
          name: '基于React.forwardRef 风格组件,适用于转发Ref、获取Dom',
          value: '2',
        },
      ],
    },
  ]);
}

getComponentConfig().then((res) => {
  const { name, type } = res;
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
  let tsxStr =
    type === '1'
      ? `import React from 'react';
import { ${Name}Props } from './interface';
import './index.less';

const ${Name}: React.FC<${Name}Props> = () => <h1>Hello,world</h1>;
${Name}.displayName = '${Name}';
export default ${Name};
`
      : `import React, { forwardRef, useMemo } from 'react';
      import { ${Name}Props } from './interface';
      import { createNamespace } from '@/utils/create';
      import classnames from 'classnames';

      import './index.less';

      const ${Name} = forwardRef<HTMLDivElement, ${Name}Props>((props, ref) => {
        const [name, bem] = createNamespace('${name}');
        const { className, extraStyle = {}, children } = props;

        const classes = useMemo(() => {
          return classnames(bem([]), className);
        }, [className]);

        return (
          <div ref={ref} className={classes} style={extraStyle}>
            {children}
          </div>
        );
      });
      ${Name}.displayName = '${Name}';
      export default ${Name};
`;
  fs.writeFileSync(`${targetPath}/index.tsx`, tsxStr, { encoding: 'utf8' });

  let tsStr = `
export interface ${Name}Props extends BaseProps {
  /**
   * @description props示范 必须要参照此格式书写注释以生成文档
   * @default --
   */
  props?: string;
}
`;
  fs.writeFileSync(`${targetPath}/interface.ts`, tsStr, { encoding: 'utf8' });

  let mdStr =
    type === '1'
      ? `---
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

`
      : `---
      title: ${Name}
      nav:
        title: Components
        path: /components
---

## ${Name}

Demo:

\`\`\`tsx
import React, { useEffect, useRef} from 'react';
import { ${Name} } from 'library';
const ref =  useRef()
export default () => <${Name} ref={ref}>我是${Name}</${Name}>;
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
});
