/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-14 14:37:24
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-17 16:23:58
 * @Description: API
 */

export interface ViewProps extends BaseProps {
  /**
   * @description 方向
   * @default row
   */
  direction?: 'row' | 'column';
  /**
   * @description  水平方向
   * @default start
   */
  justify?: 'start' | 'center' | 'end' | 'baseline';

  /**
   * @description 垂直方向
   * @default start
   */
  align?: 'start' | 'center' | 'end' | 'baseline';

  /**
   * @description 指定 flex 元素单行显示还是多行显示
   * @default --
   */
  nowrap?: boolean;

  /**
   * @description 点击事件
   * @default --
   */
  onClick?: () => void;
}
