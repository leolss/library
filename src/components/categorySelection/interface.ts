/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-10-13 15:54:23
 * @Description:
 */

interface activeValueType {}

export interface CategorySelectionProps extends BaseProps {
  /**
   * @description 选中的值，类型为 string 或者 number; multiple 为 true 时，类型为 Array<string|number>
   * @type string | number | Array<string|number>
   */
  activeValue?: string | number | Array<string | number>;
  /**
   * @description 显示的标题
   */
  title?: string;
  /**
   * @description 是否是多选
   * @default false
   */
  multiple?: boolean;
  /**
   * @description 更改状态时调用的方法, 返回当前点击value, sort('', 'desc', 'asc'), result(多选时存在，数组)
   * @type Function
   */
  onChange?: (
    id: string | number,
    sort?: string,
    result?: Array<string | number>,
  ) => void;
}
