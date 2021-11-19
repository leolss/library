export interface InputProps extends BaseProps {
  /**
   * @description props示范 必须要参照此格式书写注释以生成文档
   * @default --
   */
  onChange?: (value: any) => void;
  type?: 'text' | 'tel';
  value?: any;
  label?: any;
  classNames?: any;
}
