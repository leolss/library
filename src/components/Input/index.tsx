import React, { useState, useEffect } from 'react';
import { InputProps } from './interface';
import './index.less';
import { Icon } from 'library';
import classnames from 'classnames';

const Input: React.FC<InputProps> = ({
  onChange,
  type = 'text',
  value,
  label,
  className,
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
        <input type={type} onChange={change} ref={ref} {...baseProps} />
        {val && (
          <span className="btn-after">
            <Icon
              onClick={clearVal}
              className="clearBtnIcon"
              type="cross-circle-o"
            />
          </span>
        )}
      </div>
      <hr />
    </div>
  );
};
Input.displayName = 'Input';
export default Input;
