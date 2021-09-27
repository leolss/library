/*
 * @Author: liuyingying
 * @Date: 2021-09-22 13:44:37
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 15:30:34
 * @Description:
 */
import * as React from 'react';
import {
  useState,
  useMemo,
  useContext,
  useRef,
  useCallback,
  createRef,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { createNamespace } from '@/utils/create';
import TabNode from './TabNode';

import type { TabNavListProps } from './interface';
import TabContext from '../TabContext';

function TabNavList(
  { activeKey, onClick }: TabNavListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { prefixCls, tabs } = useContext(TabContext);
  const navRef = useRef(null);
  const navListRef = useRef(null);
  const navListRefs = useRef(
    new Map<React.Key, React.RefObject<HTMLDivElement>>(),
  );

  const getNavListRef = useCallback((key: React.Key) => {
    if (!navListRefs.current.has(key)) {
      navListRefs.current.set(key, createRef<HTMLDivElement>());
    }

    return navListRefs.current.get(key);
  }, []);

  useEffect(() => {
    getNavListRef(activeKey)?.current?.scrollIntoView({
      inline: tabs[tabs.length - 1].key === activeKey ? 'nearest' : 'center',
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [activeKey, tabs]);

  const renderTabNodes: React.ReactElement[] = useMemo(() => {
    return tabs.map((tab) => {
      const { key, tabSlot, style } = tab;
      return (
        <TabNode
          ref={getNavListRef(key)}
          prefixCls={prefixCls}
          key={key}
          tab={tab}
          tabSlot={tabSlot}
          active={key === activeKey}
          style={style}
          onClick={(e) => {
            onClick(key, e);
          }}
        />
      );
    });
  }, [tabs, prefixCls, activeKey, onClick]);

  const [name] = createNamespace(prefixCls);

  return (
    <div ref={navRef} className={classNames(`${name}-nav`)}>
      <div ref={navListRef} className={`${name}-nav-list`}>
        {renderTabNodes}
      </div>
    </div>
  );
}

export default React.forwardRef(TabNavList);
