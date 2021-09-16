/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-14 14:37:24
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-16 16:22:24
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
   * @default start
   */
  justify?: 'start' | 'center' | 'end' | 'baseline';

  /**
   * @description 垂直方向
   * @default start
   */
  align?: 'start' | 'center' | 'end' | 'baseline';
}
