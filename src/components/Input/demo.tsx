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

  const [str, setStr] = useState('defaultValue');

  return (
    <>
      <h2 style={titleStyle}>文本输入框</h2>
      <Input
        placeholder="请输入"
        value={str}
        onChange={(val: any) => {
          setStr(val);
        }}
      />
      <h2 style={titleStyle}>数字输入框</h2>
      <Input type="tel" placeholder="请输入" />
    </>
  );
};

export default Demo;
