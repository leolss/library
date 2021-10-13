/*
 * @Author: liuyingying
 * @Date: 2021-09-22 10:58:39
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-10-13 13:50:54
 * @Description:
 */
import type { TabPaneProps } from './TabPane/interface';

export interface Tab extends TabPaneProps {
  key: React.Key;
  style: React.CSSProperties;
  node: React.ReactElement;
}
export interface TabsProps extends BaseProps {
  /**
   * @description 当前激活 tab 面板的 key
   */
  activeKey?: React.Key;
  /**
   * @description 是否使用动画切换 Tabs
   * @type boolean
   * @default false
   */
  animated?: boolean;
  /**
   * @description 扩展内容，显示在切换标签下面
   */
  headerSlot?: any;
  /**
   * @description 点击事件，返回选中的key
   * @type MouseEvent
   */
  onClick?: (activeKey: React.Key, e: React.MouseEvent) => void;
  /**
   * @description 切换调用的事件，返回选中的key
   * @type Function
   */
  onChange?: (activeKey: React.Key) => void;
}
