/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 10:55:50
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-19 18:08:48
 * @Description:
 */
import localeProps from './localeProps';
export type modeFit = 'datetime' | 'date' | 'year' | 'month' | 'time';
export interface DatePickerProps extends BaseProps {
  /**
   * @description props示范 必须要参照此格式书写注释以生成文档
   * @default --
   */
  value?: Date;
  /**
   * @description mode
   * @default --
   */
  mode?: modeFit;
  /**
   * @description minDate
   * @default --
   */
  minDate?: Date;
  /**
   * @description maxDate
   * @default --
   */
  maxDate?: Date;
  /**
   * @description onChange
   * @default --
   */
  onChange?: (value: Date) => void;
  /**
   * @description onValueChange
   * @default --
   */
  onValueChange?: (vals: any, index: number) => void;
  /**
   * @description visible
   * @default --
   */
  visible?: boolean;
  /**
   * @description onDismiss
   * @default --
   */
  onDismiss?: () => void;
  /**
   * @description locale
   * @default --
   */
  locale?: localeProps;
  /**
   * @description minuteStep
   * @default --
   */
  minuteStep?: number;
  /**
   * @description disabled
   * @default --
   */
  disabled?: boolean;
  /**
   * @description format
   * @default --
   */
  format?: string | ((value: Date) => string);
  /**
   * @description extra
   * @default --
   */
  extra?: string;
  /**
   * @description dismissText
   * @default --
   */
  dismissText?: React.ReactNode;
  /**
   * @description disabled
   * @default --
   */
  okText?: React.ReactNode;
  /**
   * @description disabled
   * @default --
   */
  title?: React.ReactNode;
}
