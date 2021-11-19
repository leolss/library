import React, { useState } from 'react';
import { Input } from 'library';

const Demo: React.FC = () => {
  const titleStyle: React.CSSProperties = {
    margin: 0,
    padding: '32px 16px 16px',
    color: 'rgba(69, 90, 100, 0.6)',
    fontSize: '14px',
    fontWeight: 'normal',
    background: '#f7f8fa',
  };
  const bgStyle: React.CSSProperties = {};

  const [value, setValue] = useState('defaultValue');

  return (
    <>
      <h2 style={titleStyle}>基础用法</h2>
      <Input
        placeholder="请输入文本"
        value={value}
        onChange={(val: any) => {
          setValue(val);
        }}
      />
      <Input type="tel" placeholder="请输入数字" />

      <h2 style={titleStyle}>输入框内容对齐</h2>
      <Input label="文本" placeholder="左对齐（默认）" />
      <Input label="文本" placeholder="右对齐" textAlign="right" />
      <Input
        label="订单号"
        placeholder="请输入"
        textAlign="right"
        type="tel"
        value="11323456789"
      />

      <h2 style={titleStyle}>自定义类型</h2>
      <Input label="姓名" placeholder="请输入" className="inputname" />
      <Input label="手机号" placeholder="请输入" maxLength="11" />
    </>
  );
};

export default Demo;
