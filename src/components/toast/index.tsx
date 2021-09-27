/*
 * @Author: 李闪闪
 * @Date: 2021-09-13 16:41:56
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-23 09:42:24
 * @Description:
 */
import classnames from 'classnames';
import * as React from 'react';
import Notification from 'rmc-notification';
import { createNamespace } from '@/utils/create';
import { ToastProps } from './interface';

import Icon from '../icon';
import './index.less';

const SHORT = 3;

interface IToastConfig {
  duration: number;
  mask: boolean;
}
const config: IToastConfig = {
  duration: SHORT,
  mask: true,
};
let messageInstance: any;
let messageNeedHide: boolean;
const [prefixCls, bem] = createNamespace('toast');
function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void,
) {
  (Notification as any).newInstance(
    {
      prefixCls,
      style: {}, // clear rmc-notification default style
      transitionName: 'am-fade',
      className: classnames({
        [`${bem(['mask'])}`]: mask,
        [`${bem(['nomask'])}`]: !mask,
      }),
    },
    (notification: any) => callback && callback(notification),
  );
}
function notice(
  content: React.ReactNode,
  type: string,
  duration = config.duration,
  onClose: (() => void) | undefined | null,
  mask = config.mask,
) {
  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'success',
    fail: 'fail',
    offline: 'dislike',
    loading: 'loading',
  };
  const iconType = iconTypes[type];
  messageNeedHide = false;
  getMessageInstance(mask, (notification) => {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }

    if (messageNeedHide) {
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;

    notification.notice({
      duration,
      style: {},
      content: !!iconType ? (
        <div
          className={bem('text') + ' ' + bem('text-icon')}
          role="alert"
          aria-live="assertive"
        >
          <Icon type={iconType} size="lg" />
          <img src="" />
          <div className={`${bem('text-info')}`}>{content}</div>
        </div>
      ) : (
        <div className={`${bem('text')}`} role="alert" aria-live="assertive">
          <div>{content}</div>
        </div>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose();
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  });
}
const Toast = {
  SHORT,
  LONG: 8,
  show(content: React.ReactNode, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask } = conf;
    config.duration = duration;
    if (mask === false) {
      config.mask = false;
    }
  },
};

// const Toast = (props: ToastProps) => toast

//Toast.displayName = 'Toast';
export default Toast;
