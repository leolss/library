/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-09 15:10:03
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-13 20:31:52
 * @Description: 全局global
 */
declare module '*.css';
declare module '*.less';

interface BaseProps {
  /**
   * @description 额外的类名
   * @default -
   */
  className?: string;

  /**
   * @description 额外的style
   * @default {}
   */
  extraStyle?: React.CSSProperties

  /**
   * @description children
   * @default {}
   */
  children?: React.ReactNode

  /**
   * @description Ref对象
   * @default null
   */
  ref?: React.RefObject<any>
}
