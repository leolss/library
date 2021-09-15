export interface ButtonProps extends BaseProps {
  /**
   * @description 按钮类型
   * @default primary
   */
  type?: 'primary' | 'info' | 'default' | 'danger' | 'warning' | 'success';

  /**
   * @description 按钮尺寸
   * @default normal
   */
  size?: 'normal' | 'largfe' | 'small';

  /**
   * @description 按钮图标
   * @default --
   */
  icon?: string;

  /**
   * @description loading状态
   * @default false
   */
  loading?: boolean;

  /**
   * @description disabled状态
   * @default false
   */
  disabled?: boolean;
}
