import React, { useMemo, forwardRef } from 'react';
import { ViewProps } from './interface';

import './index.less';

// TODO ref类型待确认
const View = forwardRef<any, ViewProps>((props, ref) => {
  const { tag = 'div' } = props;
  const renderer = useMemo(() => {
    const dom = React.createElement(tag, { ref });
    return dom;
  }, [tag]);
  return renderer;
});
View.displayName = 'View';
export default View;
