/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 19:39:35
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-14 17:39:55
 * @Description:  Button
 */
import React, { useMemo } from 'react';
import { createNamespace } from '@/utils/create';
import { ButtonProps } from './interface';
import classnames from 'classnames';

import './index.less';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [name, bem] = createNamespace('button');

  const {
    type = 'primary',
    size = 'normal',
    className,
    disabled = false,
    loading = false,
    extraStyle,
    children,
  } = props;

  const classes = useMemo(() => {
    return classnames(bem([type, size, { disabled, loading }]), className);
  }, [type, size, disabled, loading, className]);

  return (
    <div className={classes} style={extraStyle}>
      {children}
    </div>
  );
};
Button.displayName = 'Button';
export default Button;
