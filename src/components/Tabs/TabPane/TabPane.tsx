/*
 * @Author: liuyingying
 * @Date: 2021-09-22 11:18:51
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 14:46:28
 * @Description:
 */
import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { TabPaneProps } from './interface';
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
    const [name, bem] = createNamespace(prefixCls);

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

    // 最外层类名
    const classes = useMemo(() => {
      return classNames(bem([`${name}-${tabKey}`, { active }]), className);
    }, [active, className]);

    return (
      <div style={{ ...mergedStyle, ...extraStyle }} className={classes}>
        {active && children}
      </div>
    );
  },
);

export default TabPane;
