import { ToastType, ToastPosition } from './Toast';
export interface ToastProps {
  /**
   * @description 自定义类名
   * @default -
   */
  className?: string | Array<any> | object;
  /**
   * @description 自定义图标，支持传入图标名称或图片链接
   * @default -
   */
  icon?: string;
  /**
   * @description 提示类型，可选值为 loading success fail html
   * @default text
   */
  type?: ToastType;
  /**
   * @description 是否显示背景遮罩层
   * @default false
   */
  overlay?: boolean;
  /**
   * @description 文本内容，支持通过\n换行
   * @default ''
   */
  message?: string;
  /**
   * @description 图标大小，如 20px 2em，默认单位为 px
   * @default 36px
   */
  iconSize?: number | string;
  /**
   * @description 关闭时的回调函数
   * @default -
   */
  onClose?: Function;
  /**
   * @description 完全展示后的回调函数
   * @default -
   */
  onOpened?: Function;
  /**
   * @description 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number;
  /**
   * @description 指定挂载的节点，等同于 Teleport 组件的 to 属性
   * @default body
   */
  teleport?: string | Element;
  /**
   * @description 位置，可选值为 top bottom
   * @default middle
   */
  position?: ToastPosition;
  /**
   * @description 动画类名，等价于 transition 的name属性
   * @default
   */
  transition?: string;
}
