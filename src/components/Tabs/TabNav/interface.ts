/*
 * @Author: liuyingying
 * @Date: 2021-09-22 16:43:45
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 15:05:41
 * @Description:
 */
import type { Tab, AnimatedConfig } from '../interface';

export interface TabNodeProps extends BaseProps {
  prefixCls: string;
  tab: Tab;
  active: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface TabNavListProps extends BaseProps {
  activeKey: string;
  animated?: AnimatedConfig;
  onClick: (
    activeKey: React.Key,
    e: React.MouseEvent | React.KeyboardEvent,
  ) => void;
}
