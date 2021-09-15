/*
 * @Author: liuyingying
 * @Date: 2021-09-14 16:18:03
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-15 10:06:16
 * @Description:
 */

export interface RadioStyles {
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}

export interface RadioProps extends RadioStyles {
  checked?: boolean;
  disabled?: boolean;
  text?: string;

  onClick?: () => void;

  children?: React.ReactNode;

  /**
   * @description 额外的类名
   * @default -
   */
  className?: string;
}
