/*
 * @Author: 李闪闪
 * @Date: 2021-09-09 15:16:43
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-28 11:32:42
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { Calendar, View, Icon, Text } from 'library';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import './index.less';

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
const Demo: React.FC<any> = React.memo((props: Props) => {
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
});

export default Demo;
