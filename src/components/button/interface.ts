/*
 * @Author: liuyingying
 * @Date: 2021-09-16 11:14:47
 * @Email: liuyingying1@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-17 10:09:05
 * @Description:
 */
export interface ButtonProps extends BaseProps {
  /**
   * @description 按钮类型
   * @default primary
   */
  type?: 'primary' | 'info' | 'default' | 'danger' | 'warning' | 'success';

  /**
   * @description 按钮尺寸
   * @default normal
   */
  size?: 'normal' | 'large' | 'small' | 'mini';
  /**
   * @description 朴素按钮
   * @default false
   */
  plain?: boolean;

  /**
   * @description 按钮图标
   * @default --
   */
  icon?: string;

  /**
   * @description loading状态
   * @default false
   */
  loading?: boolean;

  /**
   * @description disabled状态
   * @default false
   */
  disabled?: boolean;
}
