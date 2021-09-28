/*
 * @Author: liuyingying
 * @Date: 2021-09-16 11:14:47
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 19:00:36
 * @Description:
 */

export interface StyleProps {
  /**
   * @description 设置单位
   * @default px
   */
  unit?: string;
  /**
   * @description 设置按钮宽度
   * @default --
   */
  width?: number;
  /**
   * @description 设置按钮高度
   * @default --
   */
  height?: number;
  /**
   * @description 设置按钮圆角
   * @default 2px
   */
  borderRadius?: number;
  /**
   * @description 设置按钮主题色
   * @default --
   */
  color?: string;
  /**
   * @description 设置文本的外边距，可以是数字｜百分比｜有单位
   */
  margin?: number | string;
  /**
   * @description 设置文本的上外边距，可以是数字｜百分比｜有单位
   */
  marginTop?: number | string;
  /**
   * @description 设置文本的右外边距，可以是数字｜百分比｜有单位
   */
  marginRight?: number | string;
  /**
   * @description 设置文本的左外边距，可以是数字｜百分比｜有单位
   */
  marginBottom?: number | string;
  /**
   * @description 设置文本的下外边距，可以是数字｜百分比｜有单位
   */
  marginLeft?: number | string;
  /**
   * @description 设置文本的内边距，可以是数字｜百分比｜有单位
   */
  padding?: number | string;
  /**
   * @description 设置文本的上内边距，可以是数字｜百分比｜有单位
   */
  paddingTop?: number | string;
  /**
   * @description 设置文本的右内边距，可以是数字｜百分比｜有单位
   */
  paddingRight?: number | string;
  /**
   * @description 设置文本的左内边距，可以是数字｜百分比｜有单位
   */
  paddingBottom?: number | string;
  /**
   * @description 设置文本的下内边距，可以是数字｜百分比｜有单位
   */
  paddingLeft?: number | string;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
}

export interface EventProps {
  /**
   * @description 点击事件
   * @type event
   * @default --
   */
  onClick?: (e: React.MouseEvent) => void;
}

export interface ButtonProps extends BaseProps, StyleProps, EventProps {
  /**
   * @description 设置按钮类型
   * @type primary、default、danger、warning、success
   * @default primary
   */
  type?: 'primary' | 'default' | 'danger' | 'warning' | 'success';

  /**
   * @description 设置按钮尺寸, 可选四种类型
   * @type normal、large、small、mini
   * @default normal
   */
  size?: 'normal' | 'large' | 'small' | 'mini';
  /**
   * @description 是否为朴素按钮
   * @default false
   */
  plain?: boolean;

  /**
   * @description 设置按钮图标（待添加）
   * @type search、edit
   * @default --
   */
  icon?: string;

  /**
   * @description 是否显示加载动画
   * @default false
   */
  loading?: boolean;

  /**
   * @description 设置按钮加载图标类型，可选三种类型
   * @type circle、turn、line
   * @default circle
   */
  loadingType?: 'circle' | 'turn' | 'line';
  /**
   * @description 是否是块级元素
   * @default false
   */
  block?: boolean;

  /**
   * @description 是否是禁用状态
   * @default false
   */
  disabled?: boolean;
}
