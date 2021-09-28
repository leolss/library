/*
 * @Author: liuyingying
 * @Date: 2021-09-22 11:04:22
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 15:01:52
 * @Description:
 */
export interface TabPaneListProps extends BaseProps {
  activeKey: React.Key;
  animated?: boolean;
}

export interface TabPaneProps extends BaseProps {
  /**
   * @description 唯一标识
   */
  key?: React.Key;
  /**
   * @description 显示文字
   */
  label?: string;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选项卡内容中的扩展
   */
  tabSlot?: any;

  prefixCls?: string;
  tabKey?: string;
  animated?: boolean;
  active?: boolean;
}
