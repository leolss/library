/*
 * @Author: liuyingying
 * @Date: 2021-09-22 11:07:29
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 14:35:55
 * @Description:
 */
import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import TabContext from '../TabContext';
import { TabPaneListProps } from './interface';
import { createNamespace } from '@/utils/create';

const TabPaneList: React.FC<TabPaneListProps> = memo(
  ({ activeKey, animated }: TabPaneListProps) => {
    const { prefixCls, tabs } = React.useContext(TabContext);
    const tabPaneAnimated = animated.tabPane;
    const [name, bem] = createNamespace(`${prefixCls}-content`);

    const contentClass = useMemo(() => {
      return classNames(bem([tabPaneAnimated && 'animated']));
    }, []);

    return (
      <div className={classNames(`${name}-box`)}>
        <div className={contentClass}>
          {tabs.map((tab: any) => {
            return React.cloneElement(tab.node, {
              key: tab.key,
              prefixCls,
              tabKey: tab.key,
              animated: tabPaneAnimated,
              active: tab.key === activeKey,
            });
          })}
        </div>
      </div>
    );
  },
);

export default TabPaneList;
