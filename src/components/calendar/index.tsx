/*
 * @Author: 李闪闪
 * @Date: 2021-09-24 09:53:38
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-27 17:27:05
 * @Description:
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Calendar as RMCalendar } from 'rmc-calendar';
import { getComponentLocale } from '@/utils/getLocale';
import { CalendarProps } from './interface';
import Icon from '../icon';
import '@/components/icon/index.less';
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
    console.log(props, ':props===');
    console.log(context, ':context====');
    const locale = getComponentLocale(props, context, 'Calendar', () =>
      require('./locale/zh_CN'),
    );
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
