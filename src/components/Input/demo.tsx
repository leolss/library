import React, { useState } from 'react';
import { Input } from 'library';

const Demo: React.FC = () => {
  const titleStyle: React.CSSProperties = {
    margin: '20px 0 10px',
    padding: 0,
    color: '#455a6499',
    fontSize: '14px',
    fontWeight: 'normal',
  };
  const bgStyle: React.CSSProperties = {
    background: '#F2F2F2',
  };

  const [str, setStr] = useState('defaultValue');

  return (
    <>
      <h2 style={titleStyle}>文本输入框</h2>
      <Input
        placeholder="请输入"
        value={str}
        onChange={(val: any) => {
          setStr(val);
          console.log('++++++', val);
        }}
      />
      <h2 style={titleStyle}>数字输入框</h2>
      <Input type="tel" placeholder="请输入" />
    </>
  );
};

export default Demo;
