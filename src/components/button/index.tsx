/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 19:39:35
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-17 10:55:01
 * @Description:  Button
 */
import React, { useMemo } from 'react';
import { createNamespace } from '@/utils/create';
import { ButtonProps } from './interface';
import classnames from 'classnames';
import './index.less';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [name, bem] = createNamespace('button');

  const {
    type = 'default',
    size = 'normal',
    plain = false,
    className,
    disabled = false,
    loading = false,
    loadingType = 'circle',
    extraStyle,
    children,
  } = props;
  console.log(props);

  const classes = useMemo(() => {
    return classnames(
      bem([type, size, { plain, disabled, loading }]),
      className,
    );
  }, [type, size, disabled, loading, className]);

  const renderLoad = useMemo(() => {
    if (loading) {
      const numObj = {
        circle: 8,
        line: 4,
        turn: 2,
      };
      const toppicNow = (numObj[loadingType] && loadingType) || 'circle';
      const num = numObj[loadingType];

      return (
        <div
          className={[
            name + '-loading-style',
            name + '-loading-' + toppicNow,
          ].join(' ')}
        >
          {Array(num)
            .fill('')
            .map((item, index) => (
              <span key={index} />
            ))}
        </div>
      );
    }
  }, [loading]);

  return (
    <div className={classes} style={extraStyle}>
      <div className={name + '-content'}>
        {renderLoad}
        {children && <span className={name + '-text'}>{children}</span>}
      </div>
    </div>
  );
};

Button.displayName = 'Button';
export default Button;
