/*
 * @Author: liuyingying
 * @Date: 2021-09-22 13:44:37
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 17:01:43
 * @Description:
 */
import * as React from 'react';
import { useState, useMemo, useContext } from 'react';
import classNames from 'classnames';
import { createNamespace } from '@/utils/create';
import TabNode from './TabNode';

import type { TabNavListProps } from './interface';
import TabContext from '../TabContext';

function TabNavList(
  { activeKey, animated, onClick }: TabNavListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { prefixCls, tabs } = useContext(TabContext);

  const renderTabNodes: React.ReactElement[] = useMemo(() => {
    return tabs.map((tab) => {
      const { key } = tab;
      return (
        <TabNode
          prefixCls={prefixCls}
          key={key}
          tab={tab}
          active={key === activeKey}
          onClick={(e) => {
            onClick(key, e);
          }}
        />
      );
    });
  }, [tabs, prefixCls, activeKey, onClick]);

  const [inkStyle, setInkStyle] = useState<React.CSSProperties>();

  const [name] = createNamespace(prefixCls);

  return (
    <div className={classNames(`${name}-nav`)}>
      <div className={`${name}-nav-list`}>
        {renderTabNodes}
        <div className={classNames(`${name}-tab-active`)} style={inkStyle} />
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
