/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 14:48:32
 * @Description:
 */

export interface CategorySelectionProps extends BaseProps {
  /**
   * @description 选中的值
   */
  activeValue?: string | number | Array<string | number>;
  /**
   * @description 是否是多选
   * @default false
   */
  multiple?: boolean;
  /**
   * @description 显示的标题
   */
  title?: string;

  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 更改状态时调用的方法
   * @type Function
   */
  onChange?: (id: any, slot?: string) => void;
}
