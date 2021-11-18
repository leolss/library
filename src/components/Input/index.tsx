import React from 'react';
import { InputProps } from './interface';
import './index.less';

const Input: React.FC<InputProps> = ({
  onChange,
  type = 'text',
  ...baseProps
}) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (onChange) onChange(val);
  };
  return (
    <div className="jdd-Input">
      <input type={type} onChange={change} {...baseProps} />
      <i>x</i>
    </div>
  );
};
Input.displayName = 'Input';
export default Input;
