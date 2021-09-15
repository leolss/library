/*
 * @Author: liuyingying
 * @Date: 2021-09-14 16:32:34
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-15 10:04:54
 * @Description:
 */
import React, { useMemo } from 'react';
import { RadioProps } from './interface';
import classnames from 'classnames';
import { createNamespace } from '@/utils/create';
import CheckedImg from './components/checked';
import NoCheckImg from './components/nocheck';
import './index.less';

const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  const [name, bem] = createNamespace('radio');
  const {
    width,
    height,
    backgroundColor,
    color,
    borderColor,
    checked,
    disabled,
    text,
    children,
    className,
    onClick,
  } = props;

  const classes = useMemo(() => {
    return classnames(bem([{ disabled }]), className);
  }, [disabled, className]);

  return (
    <div className={classes} onClick={onClick}>
      {checked ? (
        <CheckedImg
          width={width}
          height={height}
          color={color}
          backgroundColor={backgroundColor}
        />
      ) : (
        <NoCheckImg width={width} height={height} borderColor={borderColor} />
      )}
      <span className="jdd-radio-label">{text ? text : children}</span>
    </div>
  );
};
Radio.displayName = 'Radio';
export default Radio;
