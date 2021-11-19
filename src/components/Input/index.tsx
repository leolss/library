import React, { useState, useEffect } from 'react';
import { InputProps } from './interface';
import './index.less';
import Icon from '@/components/icon';
import classnames from 'classnames';

const Input: React.FC<InputProps> = ({
  onChange,
  type = 'text',
  value,
  label,
  className,
  textAlign,
  append,
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
    // <div className="jdd-Input">
    <div className={classnames('jdd-Input', className)}>
      <div className="input-warpper">
        {label && <label>{label}</label>}
        <input
          type={type}
          onChange={change}
          ref={ref}
          {...baseProps}
          style={{ textAlign }}
        />

        <span className="btn-after">
          {val && (
            <Icon
              onClick={clearVal}
              className="clearBtnIcon"
              type="cross-circle-o"
            />
          )}
          <span className="append">{append} </span>
        </span>
      </div>
      <hr />
    </div>
  );
};
Input.displayName = 'Input';
export default Input;
