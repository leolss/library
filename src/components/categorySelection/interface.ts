/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 17:57:52
 * @Description:
 */
export interface CategorySelectionProps extends BaseProps {
  /**
   * @description 显示的标题
   */
  title?: string;
  /**
   * @description 选中的值
   */
  activeValue?: string | Object;
  /**
   * @description 是否是多选
   * @default false
   */
  multiple?: boolean;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 更改状态时调用的方法
   * @type Function
   */
  onChange?: (id: string, slot?: string) => void;
}
