/*
 * @Author: your name
 * @Date: 2021-09-16 17:57:38
 * @LastEditTime: 2021-09-17 10:22:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\header\interface.ts
 */
export interface headerProps {
  /**
   * @description 返回
   * @default --
   */
  goBack?: () => void;
  /**
   * @description 查询
   * @default --
   */
  search?: () => void;
  /**
   * @description 关闭
   * @default --
   */
  close?: () => void;
  /**
   * @description 图标
   * @default --
   */
  Icon?: any;
  /**
   * @description 字体大小
   * @default --
   */
  fontSize?: number;
  /**
   * @description 居左|居中|居右
   * @default --
   */
  titleAlign?: 'start' | 'center' | 'end';
}

export interface StyleProps {
  /**
   * @description 样式容器
   * @default --
   */
  justifyContent: string;
}
