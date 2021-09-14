import React, { useMemo } from 'react';
import { createNamespace } from '@/utils/create';
import { ButtonProps } from './interface';
import classnames from 'classnames';

import './index.less';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [name, bem] = createNamespace('button');

  const {
    ref,
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
    <div ref={ref} className={classes} style={extraStyle}>
      {children}
    </div>
  );
};
Button.displayName = 'Button';
export default Button;
