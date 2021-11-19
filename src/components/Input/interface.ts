export interface InputProps extends BaseProps {
  /**
   * @description 输入值
   * @type string
   * @default --
   */
  value?: any;

  /**
   * @description 输入内容时触发
   * @default --
   */
  onChange?: (value: any) => void;

  /**
   * @description 字段标题
   * @type string
   * @default --
   */
  label?: String;

  /**
   * @description 类型
   * @type 'text' | 'tel'
   * @default text
   */
  type?: 'text' | 'tel';

  /**
   * @description 对齐方式
   * @type 'left' | 'right'
   * @default left
   */
  textAlign?: 'left' | 'right';

  /**
   * @description 额外的操作按钮插槽
   * @type jsx
   * @default --
   */
  append?: any;

  /**
   * @description 添加自定义类名
   * @default --
   */
  className?: string;
}
