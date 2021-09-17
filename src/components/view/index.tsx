/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-14 14:37:24
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-17 16:06:35
 * @Description: View组件
 */
import React, { forwardRef, useMemo, useCallback } from 'react';
import { ViewProps } from './interface';
import { createNamespace } from '@/utils/create';
import classnames from 'classnames';

import './index.less';

const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
  const [name, bem] = createNamespace('view');
  const {
    className,
    extraStyle = {},
    children,
    direction,
    align,
    justify,
    nowrap,
    onClick,
  } = props;

  const classes = useMemo(() => {
    return classnames(
      bem({
        [`direction-${direction}`]: direction,
        [`align-${align}`]: align,
        [`justify-${justify}`]: justify,
        nowrap,
      }),
      className,
    );
  }, [className, align, justify]);

  const onClickHandler = useCallback(() => {
    onClick && onClick();
  }, [onclick]);

  return (
    <div
      ref={ref}
      className={classes}
      style={extraStyle}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
});
View.displayName = 'View';
export default View;
