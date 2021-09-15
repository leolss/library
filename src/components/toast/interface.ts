//import { ToastType, ToastPosition } from './Toast';
import * as React from 'react';
export interface ToastProps {
  /**
   * @description 提示类型，可选值为 loading success fail html
   * @default -
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
