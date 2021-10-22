/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 10:55:50
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-21 16:04:00
 * @Description:
 */
import localeProps from './localeProps';
// export type modeFit = 'datetime' | 'date' | 'year' | 'month' | 'time';
export interface DatePickerProps extends BaseProps {
  /**
   * @description 当前选中时间
   * @default --
   */
  value?: Date;
  /**
   * @description 日期选择的类型, 可以是日期date,时间time,日期+时间datetime,年year,月month
   * @default date
   */
  mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
  /**
   * @description 最小可选日期
   * @default new Date(2000, 1, 1, 0, 0, 0)
   */
  minDate?: Date;
  /**
   * @description 最大可选日期
   * @default new Date(2030, 1, 1, 23, 59, 59)
   */
  maxDate?: Date;
  /**
   * @description 时间发生变化的回调函数
   * @default --
   */
  onChange?: (value: Object) => void;
  /**
   * @description 每列 picker 改变时的回调
   * @default --
   */
  onValueChange?: (vals: any, index: number) => void;
  /**
   * @description visible
   * @default --
   */
  visible?: boolean;
  /**
   * @description locale
   * @default --
   */
  locale?: localeProps;
  /**
   * @description 分钟数递增步长设置
   * @default 1
   */
  minuteStep?: number;
  /**
   * @description 是否不可用
   * @default --
   */
  disabled?: boolean;
  /**
   * @description 格式化选中的值 (对应 mode 下格式分别为:YYYY-MM-DD,HH:mm,YYYY-MM-DD HH:mm)
   * @default --
   */
  format?: string | ((value: Date) => string);
  /**
   * @description 显示文案
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
   * @description 弹框的标题
   * @default --
   */
  title?: React.ReactNode;
  /**
   * @description class前缀
   * @default jdd-picker
   */
  prefixCls?: string;
  /**
   * @description 样式类名
   * @default --
   */
  className?: string;
  /**
   * @description 12小时制
   * @default false
   */
  use12Hours?: boolean;
  /**
   * @description 点击选中时执行的回调
   * @default --
   */
  onOk?: (val: any) => void;
  /**
   * @description 点击取消时执行的回调
   * @default --
   */
  onDismiss?: () => void;
}
