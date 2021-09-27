/*
 * @Author: liuyingying
 * @Date: 2021-09-22 13:44:37
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-26 18:12:46
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

  const scrollTimeout = (result: number) => {};

  const onTabScroll = (key: React.Key) => {
    const navBoxObj = navRef?.current;
    const navListObj = navListRef?.current;
    const navObj = getNavListRef(key)?.current;
    let result = 0;

    if (
      navObj.offsetLeft >
      navBoxObj.offsetWidth / 2 - navObj.offsetWidth / 2
    ) {
      result =
        navObj.offsetLeft - navBoxObj.offsetWidth / 2 + navObj.offsetWidth / 2;
    } else {
      result = 0;
    }

    navListObj.scrollLeft = result;
  };

  const renderTabNodes: React.ReactElement[] = useMemo(() => {
    return tabs.map((tab) => {
      const { key } = tab;
      return (
        <TabNode
          ref={getNavListRef(key)}
          prefixCls={prefixCls}
          key={key}
          tab={tab}
          active={key === activeKey}
          onClick={(e) => {
            onClick(key, e);
            onTabScroll(key);
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
