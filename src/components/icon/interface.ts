/*
 * @Author: 李闪闪
 * @Date: 2021-09-17 19:13:20
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-23 11:07:13
 * @Description:
 */
export interface IconPropsType extends BaseProps {
  /**
   * @description 内置 icon 名称
   * @default --
   */
  type: string;
  /**
   * @description 图标大小
   * @default md
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /**
   * @description 图标颜色
   * @default '#000'
   */
  color?: string;
}
