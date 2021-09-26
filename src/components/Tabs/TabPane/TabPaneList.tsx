/*
 * @Author: liuyingying
 * @Date: 2021-09-22 11:07:29
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-26 10:08:20
 * @Description:
 */
import React, { memo, useMemo, useRef, useEffect } from 'react';
import classNames from 'classnames';
import TabContext from '../TabContext';
import type { TabPaneListProps } from './interface';
import { createNamespace } from '@/utils/create';

const TabPaneList: React.FC<TabPaneListProps> = memo(
  ({ activeKey, animated }: TabPaneListProps) => {
    const { prefixCls, tabs } = React.useContext(TabContext);
    const [name, bem] = createNamespace(`${prefixCls}-content`);
    const activeIndex = useMemo(() => {
      return tabs.findIndex((tab) => tab.key === activeKey);
    }, [tabs]);

    const contentClass = useMemo(() => {
      return classNames(bem([animated && 'animated']));
    }, []);

    const animatedStyle: React.CSSProperties = {
      transform: `translateX(-${activeIndex * 100 + '%'})`,
    };

    return (
      <div className={contentClass} style={animatedStyle}>
        {tabs.map((tab: any) => {
          return React.cloneElement(tab.node, {
            key: tab.key,
            prefixCls,
            tabKey: tab.key,
            animated: animated,
            active: tab.key === activeKey,
          });
        })}
      </div>
    );
  },
);

export default TabPaneList;
