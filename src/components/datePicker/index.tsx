/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 10:55:50
 * @Email: lishanshan6@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-11-18 16:23:27
 * @Description:
 */
import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import { DatePickerProps } from './interface';
import { formatFn, getComponentLocale } from './utils';
import zh_CN from './locale/zh_CN';
import './index.less';
export interface PropsType extends DatePickerProps {
  prefixCls?: string;
  className?: string;
  use12Hours?: boolean;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  onOk?: (x: any) => void;
  onVisibleChange?: (visible: boolean) => void;
}
const DatePicker: React.FC<PropsType> = (props) => {
  DatePicker.defaultProps = {
    mode: 'datetime',
    prefixCls: 'jdd-picker',
    pickerPrefixCls: 'jdd-picker-col',
    popupPrefixCls: 'jdd-picker-popup',
    minuteStep: 1,
    use12Hours: false,
  };
  DatePicker.contextTypes = {
    antLocale: PropTypes.object,
  };
  const [scrollValue, setScrollValue] = useState(undefined);
  const onScrollValue = (v: any) => {
    setScrollValue(v);
  };
  const onOk = (v: any) => {
    if (scrollValue !== undefined) {
      setScrollValue(v);
    }
    if (props.onChange) {
      props.onChange(v);
    }
    if (props.onOk) {
      props.onOk(v);
    }
  };
  const onVisibleChange = (visible: boolean) => {
    setScrollValue(undefined);
    if (props.onVisibleChange) {
      props.onVisibleChange(visible);
    }
  };
  const fixOnOk = (picker: any) => {
    if (picker) {
      picker.onOk = onOk;
    }
  };
  const locale = getComponentLocale(props, context, 'DatePicker', () => zh_CN);
  const { okText, dismissText, extra, DatePickerLocale } = locale;
  const datePicker = (
    <RCDatePicker
      minuteStep={props.minuteStep}
      locale={DatePickerLocale}
      minDate={props.minDate}
      maxDate={props.maxDate}
      mode={props.mode}
      pickerPrefixCls={props.pickerPrefixCls}
      prefixCls={props.prefixCls}
      defaultDate={props.value || new Date()}
      use12Hours={props.use12Hours}
      onValueChange={props.onValueChange}
      onScrollChange={onScrollValue}
    />
  );
  return (
    <PopupDatePicker
      datePicker={datePicker}
      WrapComponent="div"
      transitionName="jdd-slide-up"
      maskTransitionName="jdd-fade"
      {...(props as any)}
      prefixCls={props.popupPrefixCls}
      date={props.value || new Date()}
      dismissText={props.dismissText || dismissText}
      okText={props.okText || okText}
      ref={fixOnOk}
      onVisibleChange={onVisibleChange}
    >
      {props.children &&
        React.isValidElement(props.children) &&
        React.cloneElement<{ extra?: string }>(props.children, {
          extra: props.value
            ? formatFn(props, props.value)
            : props.extra || extra,
        })}
    </PopupDatePicker>
  );
};
DatePicker.displayName = 'DatePicker';
export default DatePicker;
function context(
  props: React.PropsWithChildren<PropsType>,
  context: any,
  arg2: string,
  arg3: () => any,
) {
  throw new Error('Function not implemented.');
}
