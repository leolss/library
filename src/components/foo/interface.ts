/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-10 13:48:44
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-10 18:13:47
 * @Description: FooApi
 */
export interface FooProps {
  /**
   * @description 额外的类名
   * @default -
   */
  className?: string;

  /**
   * @description 标签
   * @default div
   */
  tag?: keyof React.ReactHTML;
}
