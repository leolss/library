/*
 * @Author: liuyingying
 * @Date: 2021-09-27 17:52:01
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 17:57:10
 * @Description:
 */
import { createContext } from 'react';
export interface CategoryContextProps {
  multiple?: boolean;
  activeValue?: string | Object;
}
export default createContext<CategoryContextProps>({
  multiple: false,
  activeValue: '',
});
