/*
 * @Author: liuyingying
 * @Date: 2021-09-16 11:14:47
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-18 16:28:22
 * @Description:
 */

export interface StyleProps {
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
