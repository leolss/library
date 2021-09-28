export interface CategoryStyle {
  /**
   * @description 单位
   * @default px
   */
  unit?: string;
  /**
   * @description 设置宽度, 可以是数字｜百分比｜有单位
   * @type number ｜ string
   */
  width?: number | string;
  /**
   * @description 设置高度, 可以是数字｜百分比｜有单位
   * @type number ｜ string
   */
  height?: number | string;
  /**
   * @description 设置最大高度, 可以是数字｜百分比｜有单位
   * @type number ｜ string
   */
  maxWidth?: number | string;
  /**
   * @description 设置最小高度, 可以是数字｜百分比｜有单位
   * @type number ｜ string
   */
  minWidth?: number | string;
  /**
   * @description 设置横向对齐
   * @type left、center、right
   * @default 继承
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * @description 设置字号大小，可以是数字｜百分比｜有单位
   * @default 继承
   */
  fontSize?: number | string;
  /**
   * @description 设置文本的粗细
   * @type 100、200、300、400(等同于normal)、500、600、700(等同于bold)、800、900、normal、bold、bolder、lighter、inherit
   * @default normal
   */
  fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter' | 'inherit';
  /**
   * @description 设置背景色
   */
  backgroundColor?: string;
  /**
   * @description 设置外边距，可以是数字｜百分比｜有单位
   */
  margin?: number | string;
  /**
   * @description 设置上外边距，可以是数字｜百分比｜有单位
   */
  marginTop?: number | string;
  /**
   * @description 设置右外边距，可以是数字｜百分比｜有单位
   */
  marginRight?: number | string;
  /**
   * @description 设置左外边距，可以是数字｜百分比｜有单位
   */
  marginBottom?: number | string;
  /**
   * @description 设置下外边距，可以是数字｜百分比｜有单位
   */
  marginLeft?: number | string;
  /**
   * @description 设置内边距，可以是数字｜百分比｜有单位
   */
  padding?: number | string;
  /**
   * @description 设置上内边距，可以是数字｜百分比｜有单位
   */
  paddingTop?: number | string;
  /**
   * @description 设置右内边距，可以是数字｜百分比｜有单位
   */
  paddingRight?: number | string;
  /**
   * @description 设置左内边距，可以是数字｜百分比｜有单位
   */
  paddingBottom?: number | string;
  /**
   * @description 设置下内边距，可以是数字｜百分比｜有单位
   */
  paddingLeft?: number | string;
  /**
   * @description 设置边框圆角，可以是数字｜百分比｜有单位, showBorder为true设置有效
   * @default 2
   */
  borderRadius?: number | string;
}

export interface CategoryProps extends BaseProps, CategoryStyle {
  /**
   * @description 唯一标识
   */
  value?: string | number;
  /**
   * @description 显示文本
   */
  label?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否显示生序降序图标
   * @default false
   */
  showSort?: boolean;
  /**
   * @description 选中的是生序还是降序
   * @type null | desc | asc
   */
  selected?: string | 'desc' | 'asc';
  /**
   * @description 扩展内容
   */
  slot?: any;
}
