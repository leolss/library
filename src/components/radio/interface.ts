/*
 * @Author: liuyingying
 * @Date: 2021-09-14 16:18:03
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-15 14:54:12
 * @Description:
 */

export interface RadioStyles {
  /**
   * @description 宽度
   * @default 26
   */
  width?: number;
  /**
   * @description 高度
   * @default 26
   */
  height?: number;
  /**
   * @description 选中的背景色
   * @default #4B5FE1
   */
  backgroundColor?: string;
  /**
   * @description 选中的对号颜色
   * @default #fff
   */
  color?: string;
  /**
   * @description 未选中的边框颜色
   * @default #4B5FE1
   */
  borderColor?: string;
}

export interface RadioProps extends RadioStyles {
  /**
   * @description 是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 单选框文案
   * @default 空
   */
  text?: string;
  /**
   * @description 选中的值
   * @default 空
   */
  value?: string | number | boolean;
  /**
   * @description 点击事件
   * @default --
   */
  onClick?: () => void;

  children?: React.ReactNode;

  /**
   * @description 额外的类名
   * @default --
   */
  className?: string;
}
