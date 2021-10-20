/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 11:29:11
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-19 14:06:17
 * @Description:
 */
export default interface DatePickerLocale {
  /**
   * @description year
   * @default --
   */
  year: string;
  /**
   * @description month
   * @default --
   */
  month: string;
  /**
   * @description day
   * @default --
   */
  day: string;
  /**
   * @description hour
   * @default --
   */
  hour: string;
  /**
   * @description minute
   * @default --
   */
  minute: string;
  /**
   * @description am
   * @default --
   */
  am?: string;
  /**
   * @description pm
   * @default --
   */
  pm?: string;
}
