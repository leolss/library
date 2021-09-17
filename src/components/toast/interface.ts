/*
 * @Author: 李闪闪
 * @Date: 2021-09-16 09:47:56
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-16 09:48:51
 * @Description:
 */
//import { ToastType, ToastPosition } from './Toast';
import * as React from 'react';
export interface ToastProps {
  /**
   * @description 额外的类名
   * @default --
   */
  content?: React.ReactNode;
  /**
   * @description 关闭后回调
   * @default -
   */
  onClose?: Function;
  /**
   * @description 自动关闭的延时，单位秒
   * @default 3
   */
  duration?: number;
  /**
   * @description 是否显示透明蒙层，防止触摸穿透
   * @default true
   */
  mask?: Boolean;
}
