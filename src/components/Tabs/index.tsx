/*
 * @Author: liuyingying
 * @Date: 2021-09-22 10:58:39
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 16:07:11
 * @Description:
 */
import React, {
  forwardRef,
  useMemo,
  useState,
  useContext,
  useCallback,
} from 'react';
import { createNamespace } from '@/utils/create';
import classNames from 'classnames';
import TabPaneList from './TabPane/TabPaneList';
import TabPane from './TabPane/TabPane';
import TabNavList from './TabNav';
import TabContext from './TabContext';
import type { Tab, TabsProps, AnimatedConfig } from './interface';

import './index.less';

function parseTabList(children: React.ReactElement): Tab[] {
  return React.Children.map(children, (node: React.ReactElement) => {
    if (React.isValidElement(node)) {
      const key = node.key !== undefined ? String(node.key) : undefined;
      return {
        key,
        ...node.props,
        node,
      };
    }

    return null;
  }).filter((tab: any) => tab);
}

function TabsFn(
  { activeKey, animated = false, className, children, onClick }: TabsProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { prefixCls } = useContext(TabContext);
  const [name, bem] = createNamespace(prefixCls);
  const tabs = parseTabList(children);
  const [finalActiveKey, setFinalActiveKey] = useState(
    () => activeKey || tabs[0]?.key,
  );

  const onTabClick = useCallback((key: string, e: React.MouseEvent) => {
    onClick?.(key, e);
    setFinalActiveKey(key);
  }, []);

  // 最外层类名
  const divClasses = useMemo(() => {
    return classNames(name, className);
  }, [className]);

  const sharedProps = {
    activeKey: finalActiveKey,
    animated: animated,
  };

  const tabNavBarProps = {
    ...sharedProps,
    onClick: onTabClick,
  };

  return (
    <TabContext.Provider value={{ tabs, prefixCls }}>
      <div ref={ref} className={divClasses}>
        <TabNavList {...tabNavBarProps} />
        <TabPaneList {...sharedProps} />
      </div>
    </TabContext.Provider>
  );
}

const Tabs = forwardRef(TabsFn);

export { TabPane };
export default Tabs;
