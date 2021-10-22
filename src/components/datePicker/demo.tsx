/*
 * @Author: 李闪闪
 * @Date: 2021-10-19 18:02:08
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-10-21 15:24:24
 * @Description:
 */
import React, { useState } from 'react';
import { DatePicker, Text } from 'library';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
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
const Demo: React.FC<any> = (props) => {
  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);
  const [utcDate, setUtcDate] = useState(utcNow);
  const [customChildValue, setCustomChildValue] = useState(null);
  return (
    <div className="date-picker-list" style={{ backgroundColor: 'white' }}>
      <Text
        color="#455a6499"
        paddingTop={30}
        paddingBottom={10}
        paddingLeft={10}
      >
        DatePicker的用法
      </Text>
      <DatePicker value={date} onChange={(date) => setDate(date)}>
        <CustomChildren>Datetime</CustomChildren>
      </DatePicker>
      <DatePicker
        mode="date"
        title="Select Date"
        extra="Optional"
        value={date}
        onChange={(date) => setDate(date)}
      >
        <CustomChildren>Date</CustomChildren>
      </DatePicker>

      <DatePicker
        mode="time"
        minuteStep={2}
        use12Hours
        value={time}
        onChange={(time) => setTime(time)}
      >
        <CustomChildren>Time (am/pm)</CustomChildren>
      </DatePicker>
      <DatePicker
        mode="time"
        minDate={minDate}
        maxDate={maxDate}
        value={time}
        onChange={(time) => setTime(time)}
      >
        <CustomChildren>Limited time</CustomChildren>
      </DatePicker>
      <DatePicker
        mode="time"
        format={(val) => `UTC Time: ${formatDate(val).split(' ')[1]}`}
        value={utcDate}
        onChange={(date) => setUtcDate(date)}
      >
        <CustomChildren>UTC time</CustomChildren>
      </DatePicker>
      <DatePicker
        mode="time"
        format="HH:mm"
        title="Select Time"
        value={customChildValue}
        onChange={(v) => setCustomChildValue(v)}
        extra="click to choose"
      >
        <CustomChildren>With customized children</CustomChildren>
      </DatePicker>
    </div>
  );
};
export default Demo;
