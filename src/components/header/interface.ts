/*
 * @Author: your name
 * @Date: 2021-09-23 14:02:45
 * @LastEditTime: 2021-09-27 17:38:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \library\src\components\header\interface.ts
 */
export interface StyleProps {
  justifyContent: string;
}

export interface HeaderProps {
  /**
   * @description 返回
   * @default  -1
   */
  goBack?: () => void;
  /**
   * @description 搜索
   * @default  null
   */
  search?: () => void;
  /**
   * @description 关闭
   * @default  false
   */
  close?: () => void;
  /**
   * @description 标题
   * @default  快乐小header
   */
  title?: String;
  /**
   * @description 图标
   * @default  null
   */
  Icon?: any;
  /**
   * @description 字体大小
   * @default  16
   */
  fontSize?: number;
  /**
   * @description 是否居中
   * @default  center
   */
  titleAlign?: 'start' | 'center' | 'end';
}
