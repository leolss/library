---
title: Calendar
nav:
  title: Components
  path: /components
---

用于选择日期区间。

### 规则

- 显示日历以用来选择日期或日期区间。

<code  src="./demo.tsx"  identifier="Calendar-demo-phone" phone></code>

### 代码演示

```tsx
import React, { useState } from 'react';
import { Calendar, View, Icon, Text } from 'library';
// import zhCN from './locale/zh_CN';
// import enUS from './locale/en_US';

interface Props {}
const extra = {
  '2021/08/15': { info: '不可选', disable: true },
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = {
  info: 'disable',
  disable: true,
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = {
  info: 'disable',
  disable: true,
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = {
  info: 'disable',
  disable: true,
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = {
  info: '不可选',
  disable: true,
};

Object.keys(extra).forEach((key) => {
  const info = extra[key];
  const date = new Date(key);
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info;
  }
});

export default () => {
  const [En, setEn] = useState(false);
  const [show, setShow] = useState(false);
  const [config, setConfig] = useState({});
  const [startTime, setStartTime] = useState(undefined);
  const [endTime, setEndTime] = useState(undefined);
  const changeLanguage = () => {
    setEn(!En);
  };
  const originbodyScrollY =
    document.getElementsByTagName('body')[0].style.overflowY;
  const onSelectHasDisableDate = (dates: any) => {
    console.warn('onSelectHasDisableDate', dates);
  };

  const onConfirm = (
    startTime: React.SetStateAction<undefined>,
    endTime: React.SetStateAction<undefined>,
  ) => {
    document.getElementsByTagName('body')[0].style.overflowY =
      originbodyScrollY;
    setShow(false);
    setStartTime(startTime);
    setEndTime(endTime);
  };

  const onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY =
      originbodyScrollY;
    setShow(false);
    setStartTime(undefined);
    setEndTime(undefined);
  };
  const renderBtn = (
    zh: {} | null | undefined,
    en: {} | null | undefined,
    config = {},
  ) => {
    config['locale'] = En ? enUS : zhCN;

    return (
      <div
        style={{
          borderBottom: '1px solid #eee',
          height: '40px',
          lineHeight: '40px',
        }}
      >
        <View
          justify="between"
          align="center"
          onClick={() => {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            setShow(true);
            setConfig(config);
          }}
        >
          <Text>{En ? en : zh}</Text>
          <Icon type="right"></Icon>
        </View>
      </div>
    );
  };
  const getDateExtra = (date: any) => extra[+date];

  return (
    <div className="calendar-list" style={{ padding: '10px' }}>
      <Text color="#455a6499">日历事例</Text>
      {renderBtn('选择日期区间', 'Select Date Range')}
      {renderBtn('选择日期时间区间', 'Select DateTime Range', {
        pickTime: true,
      })}
      {renderBtn('选择日期', 'Select Date', { type: 'one' })}
      {renderBtn('选择日期时间', 'Select DateTime', {
        type: 'one',
        pickTime: true,
      })}
      {renderBtn('选择日期区间(快捷)', 'Select Date Range (Shortcut)', {
        showShortcut: true,
      })}
      {renderBtn('选择日期时间区间(快捷)', 'Select DateTime Range (Shortcut)', {
        pickTime: true,
        showShortcut: true,
      })}
      {renderBtn('大行距', 'XL row size', { rowSize: 'xl' })}
      {renderBtn('不无限滚动', 'infinite: false', { infinite: false })}
      {renderBtn('水平进入', 'Horizontal enter', {
        enterDirection: 'horizontal',
      })}
      {renderBtn('默认选择范围', 'Selected Date Range', {
        defaultValue: [new Date(+now - 86400000), new Date(+now - 345600000)],
      })}
      <Calendar
        {...config}
        visible={show}
        onCancel={onCancel}
        onSelectHasDisableDate={onSelectHasDisableDate}
        getDateExtra={getDateExtra}
        defaultDate={now}
        minDate={new Date(+now - 5184000000)}
        maxDate={new Date(+now + 31536000000)}
      />
    </div>
  );
};
```

<!-- ## API -->

<API src="./index.tsx"></API>

<!-- | 属性                   | 说明                                       | 类型                                                                    | 默认值          | 必选                                               |
| ---------------------- | ------------------------------------------ | ----------------------------------------------------------------------- | --------------- | -------------------------------------------------- | --- | ----- |
| enterDirection         | 入场方向 vertical: 垂直 horizontal: 水平   | 'horizontal' \| 'vertical'                                              | vertical        | false                                              |
| locale                 | 本地化                                     | Models.Locale                                                           |                 | false                                              |
| onCancel               | 关闭时回调                                 | () => void                                                              |                 | false                                              |
| onConfirm              | 确认时回调                                 | (startDateTime?: Date, endDateTime?: Date) => void                      |                 | false                                              |
| pickTime               | 是否选择时间                               | boolean                                                                 | false           | false                                              |
| prefixCls              | 样式前缀                                   | string                                                                  | rmc-calendar    | false                                              |
| renderShortcut         | 替换快捷选择栏 需要设置 showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode |                 | false                                              |
| renderHeader           | 替换标题栏                                 | () => React.ReactNode                                                   |                 | false                                              |
| showShortcut           | 快捷日期选择                               | boolean                                                                 | false           | false                                              |
| title                  | header title                               | string                                                                  | {locale.title}  | false                                              |
| type                   | 选择类型 one: 单日 range: 日期区间         | 'one' \| 'range'                                                        | range           | false                                              |
| visible                | 是否显示                                   | boolean                                                                 | false           | false                                              |
| defaultDate            | 显示开始日期                               | Date                                                                    | today           | false                                              |
| getDateExtra           | 日期扩展数据                               | (date: Date) => Models.ExtraData                                        |                 | false                                              |
| infiniteOpt            | 无限滚动优化（大范围选择）                 | boolean                                                                 | false           | false                                              |
| initalMonths           | 初始化月个数                               | number                                                                  | 6               | false                                              |
| maxDate                | 最大日期                                   | Date                                                                    |                 | false                                              |
| minDate                | 最小日期                                   | Date                                                                    |                 | false                                              |
| onSelect               | 选择区间回调                               | (date: Date, state?: \[Date                                             | undefined, Date | undefined\]) => \[Date, Date\] \| \[Date\] \| void |     | false |
| onSelectHasDisableDate | 选择区间包含不可用日期                     | (date: Date[]) => void                                                  |                 | false                                              |
| rowSize                | 行大小                                     | 'normal' \| 'xl'                                                        |                 | false                                              |
| defaultValue           | 默认日历选择范围                           | \[Date, Date\] \| \[Date\]                                              |                 | false                                              |
| defaultTimeValue       | 默认时间选择值                             | Date                                                                    |                 | false                                              | -->
