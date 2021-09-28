/*
 * @Author: liuyingying
 * @Date: 2021-09-27 17:52:01
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 10:14:53
 * @Description:
 */
import { createContext } from 'react';
export interface CategoryContextProps {
  multiple?: boolean;
  activeValue?: string | Object;
  onChange?: (id: string, slot?: string) => void;
}
export default createContext<CategoryContextProps>({
  multiple: false,
  activeValue: '',
  onChange: (id, slot) => {},
});
