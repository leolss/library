/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 11:25:32
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-21 15:56:33
 * @Description:
 */
import DatePickerLocale from './DatePickerLocale';
export default interface localeProps {
  /**
   * @description okText
   * @default --
   */
  okText: string;
  /**
   * @description dismissText
   * @default --
   */
  dismissText: string;
  /**
   * @description extra
   * @default --
   */
  extra: string;
  /**
   * @description DatePickerLocale
   * @default --
   */
  DatePickerLocale: DatePickerLocale;
}
