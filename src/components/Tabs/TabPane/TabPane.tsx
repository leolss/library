/*
 * @Author: liuyingying
 * @Date: 2021-09-22 11:18:51
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 16:48:12
 * @Description:
 */
import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import type { TabPaneProps } from './interface';
import { createNamespace } from '@/utils/create';

const TabPane: React.FC<TabPaneProps> = memo(
  ({
    prefixCls,
    className,
    extraStyle,
    active,
    animated,
    tabKey,
    children,
  }: TabPaneProps) => {
    const [name, bem] = createNamespace(`${prefixCls}-content`);

    const mergedStyle: React.CSSProperties = {};
    if (!active) {
      if (animated) {
        mergedStyle.visibility = 'hidden';
        mergedStyle.height = 0;
        mergedStyle.overflowY = 'hidden';
      } else {
        mergedStyle.display = 'none';
      }
    }

    return (
      <div
        style={{ ...mergedStyle, ...extraStyle }}
        className={classNames(
          `${name}-${tabKey}`,
          { [`${name}--active`]: active },
          className,
        )}
      >
        {active && children}
      </div>
    );
  },
);

export default TabPane;
