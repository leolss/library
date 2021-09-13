/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-10 13:47:27
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-13 15:50:04
 * @Description: Foo Componet
 */

import React, { useMemo } from 'react';
import { FooProps } from './interface';
import { getLocale } from 'umi';
import './index.less';

const Foo: React.FC<FooProps> = (props) => {
  console.log(getLocale());
  const { className, tag = 'div', children } = props;
  const el = useMemo(
    () => React.createElement(tag, { className, children }),
    [className, children],
  );
  return el;
};
Foo.displayName = 'Foo';
export default Foo;
