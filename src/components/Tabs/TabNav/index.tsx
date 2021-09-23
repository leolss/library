/*
 * @Author: liuyingying
 * @Date: 2021-09-22 13:44:37
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 15:26:58
 * @Description:
 */
import * as React from 'react';
import { useState, useMemo, useContext } from 'react';
import classNames from 'classnames';
import { createNamespace } from '@/utils/create';
import TabNode from './TabNode';

import { TabNavListProps } from './interface';
import TabContext from '../TabContext';

function TabNavList(
  { activeKey, animated, onClick }: TabNavListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { prefixCls, tabs } = useContext(TabContext);

  const tabNodes: React.ReactElement[] = useMemo(() => {
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

  const [wrapPrefix] = createNamespace(`${prefixCls}-nav-wrap`);

  const [name] = createNamespace(`${prefixCls}`);
  return (
    <div ref={ref} className={classNames(name)}>
      <div className={classNames(wrapPrefix)}>
        <div className={`${name}-nav-list`}>
          {tabNodes}
          <div
            className={classNames(`${name}-ink-bar`, {
              [`${name}-ink-bar-animated`]: animated.inkBar,
            })}
            style={inkStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
