/*
 * @Author: 李闪闪
 * @Date: 2021-09-17 19:27:17
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-18 10:10:12
 * @Description:
 */

export interface BadgePropsTypes extends BaseProps {
  /**
   * @description 大小，可选 large small
   * @default small
   */
  size?: string;
  /**
   * @description 展示的数字或文案，当为数字时候，大于 overflowCount时显示为 ${overflowCount}+，为 0 时隐藏
   * @default -
   */
  text?: string | number;
  /**
   * @description 置于角落
   * @default false
   */
  corner?: boolean;
  /**
   * @description 不展示数字，只有一个小红点
   * @default false
   */
  dot?: boolean;
  /**
   * @description 展示封顶的数字值
   * @default 99
   */
  overflowCount?: number;
  /**
   * @description 营销样式
   * @default false
   */
  hot?: boolean;
}
