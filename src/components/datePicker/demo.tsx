/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 18:02:08
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-19 18:06:26
 * @Description:
 */
import * as React from 'react';
import { DatePicker } from 'library';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(
    maxDate.getFullYear(),
    maxDate.getMonth(),
    maxDate.getDate(),
  );
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = (n) => (n < 10 ? `0${n}` : n);
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
const CustomChildren = ({ extra, onClick, children }) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: '#fff',
      height: '45px',
      lineHeight: '45px',
      padding: '0 15px',
    }}
  >
    {children}
    <span style={{ float: 'right', color: '#888' }}>{extra}</span>
  </div>
);

class Demo extends React.Component {
  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  };
  render() {
    return (
      <div className="date-picker-list" style={{ backgroundColor: 'white' }}>
        <DatePicker
          value={this.state.date}
          onChange={(date) => this.setState({ date })}
        >
          <CustomChildren>Datetime</CustomChildren>
        </DatePicker>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={this.state.date}
          onChange={(date) => this.setState({ date })}
        >
          <CustomChildren>Date</CustomChildren>
        </DatePicker>

        <DatePicker
          mode="time"
          minuteStep={2}
          use12Hours
          value={this.state.time}
          onChange={(time) => this.setState({ time })}
        >
          <CustomChildren>Time (am/pm)</CustomChildren>
        </DatePicker>
        <DatePicker
          mode="time"
          minDate={minDate}
          maxDate={maxDate}
          value={this.state.time}
          onChange={(time) => this.setState({ time })}
        >
          <CustomChildren>Limited time</CustomChildren>
        </DatePicker>

        <DatePicker
          visible={this.state.visible}
          value={this.state.dpValue}
          onOk={(date) => this.setState({ dpValue: date, visible: false })}
          onDismiss={() => this.setState({ visible: false })}
        />

        <DatePicker
          mode="time"
          format="HH:mm"
          title="Select Time"
          value={this.state.customChildValue}
          onChange={(v) => this.setState({ customChildValue: v })}
          extra="click to choose"
        >
          <CustomChildren>With customized children</CustomChildren>
        </DatePicker>
      </div>
    );
  }
}
export default Demo;
