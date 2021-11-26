---
title: DatePicker
subtitle: 日期选择
nav:
  title: Components
  path: /components
---

# DatePicker 日期选择

用于选择日期或者时间。

### 规则

- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。

<code  src="./demo.tsx"  identifier="datePicker-demo-phone" phone></code>

## 代码演示

```tsx
import React, { useState } from 'react';
import { DatePicker } from 'library';

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
export default () => {
  const [date, setDate] = useState(now);
  const [time, setTime] = useState(now);
  const [utcDate, setUtcDate] = useState(utcNow);
  const [customChildValue, setCustomChildValue] = useState(null);
  return (
    <div className="date-picker-list" style={{ backgroundColor: 'white' }}>
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
```

<API src="./index.tsx"></API>
