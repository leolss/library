/*
 * @Author: 李闪闪
 * @Date: 2021-09-13 16:41:56
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-15 10:23:28
 * @Description:
 */
import React from 'react';
import { ToastProps } from './interface';
import { Toast } from './function-call';
import type { ToastType, ToastPosition } from './Toast';
import './index.less';

//const Toast: React.FC<ToastProps> = () => <h1>Hello,world</h1>;
//Toast.displayName = 'Toast';
export default Toast;
export { Toast };
export type { ToastType, ToastProps, ToastPosition };
