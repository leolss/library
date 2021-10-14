/*
 * @Author: 李闪闪
 * @Date: 2021-10-11 17:27:45
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-13 16:38:58
 * @Description:
 */
import React, { ReactNode } from 'react';
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface InterfaceProps extends BaseProps {
  /**
   * @description 组件点击事件
   * @default --
   */
  onClick?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * @description 加载失败事件
   * @default --
   */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * @description 通过设置src，来指定需要展示的图片
   * @default --
   */
  src?: string;
  /**
   * @description 图片说明
   */
  alt?: string;
  /**
   * @description 设置图片展示宽度
   * @default --
   */
  width?: number;
  /**
   * @description 设置图片展示高度
   * @default --
   */
  height?: number;
  /**
   * @description 图片填充方式
   */
  fit?: ImageFit;
  /**
   * @description 加载时的占位
   */
  placeholder?: ReactNode;
  /**
   * @description 加载失败的占位
   */
  fallback?: ReactNode;
}
