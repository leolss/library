/*
 * @Author: liuyingying
 * @Date: 2021-09-22 11:09:08
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-22 17:24:34
 * @Description:
 */
import { createContext } from 'react';
import type { Tab } from './interface';

export interface TabContextProps {
  tabs: Tab[];
  prefixCls: string;
}
export default createContext<TabContextProps>({
  tabs: [],
  prefixCls: 'tabs',
});
