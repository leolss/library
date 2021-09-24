/*
 * @Author: liuyingying
 * @Date: 2021-09-22 16:43:45
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 19:26:15
 * @Description:
 */
import type { Tab } from '../interface';

export interface TabNodeProps extends BaseProps {
  prefixCls: string;
  tab: Tab;
  active: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface TabNavListProps extends BaseProps {
  activeKey: React.Key;
  animated?: boolean;
  onClick: (activeKey: React.Key, e: React.MouseEvent) => void;
}
