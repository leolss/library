/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-14 14:37:24
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-17 10:37:53
 * @Description: API
 */

export interface ViewProps extends BaseProps {
  /**
   * @description 标签
   * @default div
   */
  tag?: React.ReactHTML;

  /**
   * @description  水平方向
   * @default --
   */
  justify?: 'start' | 'center' | 'end' | 'baseline' | 'between' | 'around';

  /**
   * @description 垂直方向
   * @default --
   */
  align?: 'start' | 'center' | 'end' | 'baseline';

  /**
   * @description 单行显示还是多行显示
   * @default --
   */
  nowrap?: boolean;

  /**
   * @description 点击事件
   * @default --
   */
  onClick?: () => void;
}
