export interface InputProps extends BaseProps {
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
   * @description 字段标题
   * @type string
   * @default --
   */
  label?: String;
  /**
   * @description 输入内容时触发
   * @default --
   */
  onChange?: (value: any) => void;

  value?: any;
  className?: any;
  append?: any;
}
