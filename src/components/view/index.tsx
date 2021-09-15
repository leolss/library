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
