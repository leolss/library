/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-09 15:10:03
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-09-15 14:13:56
 * @Description: 全局global
 */
declare module '*.css';
declare module '*.less';

interface BaseProps {
  /**
   * @description 额外的类名
   * @default --
   */
  className?: string;

  /**
   * @description 额外的style
   * @default {}
   */
  extraStyle?: React.CSSProperties;

  /**
   * @description children
   * @default {}
   */
  children?: React.ReactNode;

  /**
   * @description Ref对象
   * @default null
   */
  // TODO forwardRef 通过转发ref可以不传递 待确认props传递Ref的区别
  // ref?: React.RefObject<any>
}
