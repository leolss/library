export interface CategoryProps extends BaseProps {
  /**
   * @description 唯一标识
   */
  value?: string;
  /**
   * @description 显示文本
   */
  label?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  slot?: boolean;
  selected?: string;
  width?: number;
  onChange?: (id: string, slot?: string) => void;
}
