import React, { useState, useEffect } from 'react';
import { InputProps } from './interface';
import './index.less';
import { Icon } from 'library';

const Input: React.FC<InputProps> = ({
  onChange,
  type = 'text',
  value,
  label,
  ...baseProps
}) => {
  const [val, setVal] = useState(value ? value : '');
  const ref: any = React.createRef();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valNew = e.target.value;
    if (onChange) onChange(valNew);
    setVal(valNew);
  };
  const clearVal = () => {
    setVal('');
  };
  // dom值联动修改
  useEffect(() => {
    ref.current.value = val;
  }, [val]);

  return (
    <div className="jdd-Input">
      <div className="input-warpper">
        {label && <label>{label}</label>}
        <input type={type} onChange={change} ref={ref} {...baseProps} />
        {val && (
          <Icon
            onClick={clearVal}
            className="clearBtnIcon"
            type="cross-circle-o"
          />
        )}
      </div>
      <hr
        style={{ border: 0, borderTop: '.5px solid #eaf0fb', margin: '0 10px' }}
      />
    </div>
  );
};
Input.displayName = 'Input';
export default Input;
