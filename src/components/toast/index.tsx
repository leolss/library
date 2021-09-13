import React from 'react';
import { ToastProps } from './interface';
import './index.less';

const Toast: React.FC<ToastProps> = () => <h1>Hello,world</h1>;
Toast.displayName = 'Toast';
export default Toast;
