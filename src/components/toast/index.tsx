/*
 * @Author: 李闪闪
 * @Date: 2021-09-13 16:41:56
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-15 16:18:17
 * @Description:
 */
import classnames from 'classnames';
import * as React from 'react';
import Notification from 'rmc-notification';
import { createNamespace } from '@/utils/create';
import { ToastProps } from './interface';

//import Icon from '../icon';
import './index.less';

const SHORT = 3;

interface IToastConfig {
  duration: ToastProps['duration'];
  mask: ToastProps['mask'];
}
interface ToastOptions {
  content: ToastProps['content'];
  onClose: ToastProps['onClose'];
}
const toastOtions: ToastOptions = {
  content: undefined,
  onClose: undefined,
};
const config: IToastConfig = {
  duration: SHORT,
  mask: true,
};
let messageInstance: any;
let messageNeedHide: boolean;
const [name, bem] = createNamespace('toast');
function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void,
) {
  (Notification as any).newInstance(
    {
      style: {}, // clear rmc-notification default style
      transitionName: 'am-fade',
      className: classnames({
        [bem('mask') + '']: mask,
        [bem('nomask') + '']: !mask,
      }),
    },
    (notification: any) => callback && callback(notification),
  );
}
function notice(
  content = toastOtions.content,
  type: string,
  duration = config.duration,
  onClose = toastOtions.onClose,
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
          {/*
            <Icon type={iconType} size="lg" />
            */}
          <div className={bem('text-info') + ''}>{content}</div>
        </div>
      ) : (
        <div className={bem('text') + ''} role="alert" aria-live="assertive">
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
export default {
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
