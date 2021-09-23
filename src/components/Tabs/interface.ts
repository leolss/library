/*
 * @Author: liuyingying
 * @Date: 2021-09-22 10:58:39
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 15:12:30
 * @Description:
 */
import type { TabPaneProps } from './TabPane/interface';

export interface Tab extends TabPaneProps {
  key: string;
  node: React.ReactElement;
}

export interface AnimatedConfig {
  inkBar?: boolean;
  tabPane?: boolean;
}

export interface TabsProps extends BaseProps {
  /**
   * @description 当前激活 tab 面板的 key
   */
  activeKey?: string;
  /**
   * @description 是否使用动画切换 Tabs
   * @type boolean | { inkBar: boolean; tabPane: boolean; }
   * @default { inkBar: true; tabPane: false; }
   */
  animated?: boolean | AnimatedConfig;
  onChange?: (activeKey: string) => void;
  /**
   * @description 点击事件，返回选中的key
   * @type MouseEvent
   */
  onClick?: (activeKey: string, e: React.MouseEvent) => void;
}
