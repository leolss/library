/*
 * @Author: your name
 * @Date: 2021-09-27 18:35:54
 * @LastEditTime: 2021-09-28 15:56:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\noData\interface.ts
 */
export interface Props {
  /**
   * @description 显示文字
   * @default  string | undefined | 暂无数据 |
   */
  label?: string;
  /**
   * @description 高度
   * @default number
   */
  height?: number;
  /**
   * @description 是否显示边框
   * @default boolean 默认 false
   */
  showBorder?: boolean;
  /**
   * @description 上边距
   * @default number
   */
  top?: number;
  /**
   * @description 下边距
   * @default number
   */
  bottom?: number;
  /**
   * @description 默认图
   * @default string
   */
  imgUrl?: string;
  /**
   * @description 图片宽度
   * @default number
   */
  imgWidth?: number;
  /**
   * @description 图片高度
   * @default number
   */
  imgHeight?: number;
  /**
   * @description 扩展类名
   * @default  string
   */
  className?: string;
}
