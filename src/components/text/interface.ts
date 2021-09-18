/*
 * @Author: liuyingying
 * @Date: 2021-09-18 09:57:02
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-18 16:16:27
 * @Description:
 */
export interface StyleProps {
  /**
   * @description 设置宽度, 可以是数字或者百分比
   * @type number ｜ string
   */
  width?: number | string;
  /**
   * @description 设置高度, 可以是数字或者百分比
   * @type number ｜ string
   */
  height?: number | string;
  /**
   * @description 设置最大高度, 可以是数字或者百分比
   * @type number ｜ string
   */
  maxWidth?: number | string;
  /**
   * @description 设置最小高度, 可以是数字或者百分比
   * @type number ｜ string
   */
  minWidth?: number | string;
  /**
   * @description 设置行高
   */
  lineHeight?: number;
  /**
   * @description 设置横向对齐
   * @type left、center、right
   * @default 继承
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * @description 设置添加到文本的修饰
   * @type none、underline(文本下的一条线)、overline(文本上的一条线)、line-through(穿过文本下的一条线)
   * @default none
   */
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  /**
   * @description 设置文本的颜色
   * @default 继承
   */
  color?: string;
  /**
   * @description 设置字号大小
   * @default 继承
   */
  fontSize?: number;
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
   * @description 设置文字内容是否换行显示，默认换行
   * @default false
   */
  lineFeed?: boolean;
  /**
   * @description 设置text组件的文字内容展示几行，超过设置行数的内容将隐藏，展示三个点
   */
  lineNum?: number;
  /**
   * @description 设置文本的上外边距
   */
  marginTop?: number;
  /**
   * @description 设置文本的右外边距
   */
  marginRight?: number;
  /**
   * @description 设置文本的左外边距
   */
  marginBottom?: number;
  /**
   * @description 设置文本的下外边距
   */
  marginLeft?: number;
  /**
   * @description 设置文本的上内边距
   */
  paddingTop?: number;
  /**
   * @description 设置文本的右内边距
   */
  paddingRight?: number;
  /**
   * @description 设置文本的左内边距
   */
  paddingBottom?: number;
  /**
   * @description 设置文本的下内边距
   */
  paddingLeft?: number;
  /**
   * @description 是否显示边框
   * @default false
   */
  showBorder?: boolean;
  /**
   * @description 设置边框宽度, showBorder为true设置有效
   * @default 1
   */
  borderWidth?: number;
  /**
   * @description 设置边框颜色, showBorder为true设置有效
   * @default #ddd
   */
  borderColor?: string;
  /**
   * @description 设置边框样式,showBorder为true设置有效
   * @type solid(实线)、dashed(虚线)、dotted(点状边框)、double(双线, 需要配合width使用)、groove(3D 凹槽边框)、ridge(3D 垄状边框)、inset(3D inset 边框)、outset(3D outset 边框)
   * @default solid
   */
  borderStyle?:
    | string
    | 'solid'
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset';
  /**
   * @description 设置边框圆角,showBorder为true设置有效
   * @default none
   */
  borderRadius?: number;
  /**
   * @description 是否为块级元素
   * @default false
   */
  block?: boolean;
}

export interface TextProps extends BaseProps, StyleProps {
  /**
   * @description 设置点击事件
   * @type MouseEvent
   */
  onClick?: (e: React.MouseEvent) => void;
}
