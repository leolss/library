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
      <hr
        style={{ border: 0, borderTop: '.5px solid #eaf0fb', margin: '0 10px' }}
      />
      <Input type="tel" placeholder="请输入数字" />

      <h2 style={titleStyle}>自定义类型</h2>
    </>
  );
};

export default Demo;
