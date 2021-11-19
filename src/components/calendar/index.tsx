/*
 * @Author: 李闪闪
 * @Date: 2021-09-24 09:53:38
 * @Email: lishanshan6@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-11-18 16:24:10
 * @Description:
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Calendar as RMCalendar } from 'rmc-calendar';
import { getComponentLocale } from '@/utils/getLocale';
import { CalendarProps } from './interface';
import Icon from '../icon';
import zh_CN from './locale/zh_CN';

import './index.less';

class Calendar extends React.Component<CalendarProps, any> {
  static defaultProps = {
    prefixCls: 'jdd-calendar',
    timePickerPrefixCls: 'jdd-picker',
    timePickerPickerPrefixCls: 'jdd-picker-col',
  };
  static contextTypes = {
    antLocale: PropTypes.object,
  };
  render() {
    const { props, context } = this;
    const locale = getComponentLocale(props, context, 'Calendar', () => zh_CN);
    const Header = RMCalendar.DefaultHeader;

    return (
      <RMCalendar
        locale={locale}
        // tslint:disable-next-line:jsx-no-multiline-js
        renderHeader={(headerProps) => (
          <Header {...headerProps} closeIcon={<Icon type="cross" />} />
        )}
        {...props}
      />
    );
  }
}
// Calendar.displayName = 'Calendar';
export default Calendar;
