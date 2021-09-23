/*
 * @Author: liuyingying
 * @Date: 2021-09-22 10:58:39
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 15:57:48
 * @Description:
 */
import type { TabPaneProps } from './TabPane/interface';

export interface Tab extends TabPaneProps {
  key: string;
  node: React.ReactElement;
}
export interface TabsProps extends BaseProps {
  /**
   * @description 当前激活 tab 面板的 key
   */
  activeKey?: string;
  /**
   * @description 是否使用动画切换 Tabs
   * @type boolean
   * @default false
   */
  animated?: boolean;
  /**
   * @description 点击事件，返回选中的key
   * @type MouseEvent
   */
  onClick?: (activeKey: string, e: React.MouseEvent) => void;
}
