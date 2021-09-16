/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-14 14:37:24
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-16 15:25:30
 * @Description: View组件
 */
import React, { forwardRef, useMemo } from 'react';
import { ViewProps } from './interface';
import { createNamespace } from '@/utils/create';
import classnames from 'classnames';

import './index.less';

const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
  const [name, bem] = createNamespace('view');
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
View.displayName = 'View';
export default View;
