/*
 * @Author: liuyingying
 * @Date: 2021-09-27 17:52:01
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 14:03:22
 * @Description:
 */
import { createContext } from 'react';

export interface CategoryContextProps {
  prefixCls?: string;
  finalValue?: string | number | Array<string | number>;
  multiple?: boolean;
  onTabClick: (id: any, slot?: string) => void;
}

export default createContext<CategoryContextProps>({
  prefixCls: 'category',
  multiple: false,
  finalValue: '',
  onTabClick: () => {},
});
