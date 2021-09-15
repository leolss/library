/*
 * @Author: 李闪闪
 * @Date: 2021-09-14 15:23:25
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-15 10:58:23
 * @Description:
 */
import React, { useMemo } from 'react';
import { ToastProps } from './interface';
const inBrowser = typeof window !== 'undefined';
function Toast(options: string | ToastProps = {}) {
  if (!inBrowser) {
    return {};
  }
}
export { Toast };
