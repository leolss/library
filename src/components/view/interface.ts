/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-14 14:37:24
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-14 14:43:01
 * @Description: API
 */

export interface ViewProps extends BaseProps {
  /**
   * @description 标签
   * @default div
   */
  tag?: keyof React.ReactHTML;
}