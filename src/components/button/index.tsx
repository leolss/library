/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 19:39:35
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-17 18:18:41
 * @Description:  Button
 */
import React, { memo, useMemo, useCallback } from 'react';
import { createNamespace } from '@/utils/create';
import { Throttle } from '@/utils/debounced';
import { ButtonProps } from './interface';
import classnames from 'classnames';
import './index.less';

const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const [name, bem] = createNamespace('button');

  const {
    type = 'default',
    size = 'normal',
    plain = false,
    className,
    disabled = false,
    loading = false,
    block = false,
    loadingType = 'circle',
    icon,
    width,
    height,
    borderRadius,
    color,
    extraStyle,
    children,
    onClick,
  } = props;

  // 最外层类名
  const classes = useMemo(() => {
    return classnames(
      bem([type, size, { plain, disabled, loading, block }]),
      className,
    );
  }, [type, size, disabled, loading, className]);

  // styles
  const styles: React.CSSProperties = useMemo(() => {
    let style: React.CSSProperties = {
      width: width + 'px',
      height: height + 'px',
      borderRadius: borderRadius + 'px',
    };

    if (color) {
      if (plain) {
        style['color'] = color;
      } else {
        style['backgroundColor'] = color;
      }

      style['borderColor'] = color;
    }

    style = Object.assign({}, style, extraStyle);

    return style;
  }, [borderRadius]);

  // click 节流
  const throttleClick = useMemo(() => {
    if (onClick) {
      return new Throttle().use(onClick, 500);
    } else {
      return () => {};
    }
  }, [onClick]);

  const click = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation;
      throttleClick();
    },
    [throttleClick],
  );

  const disabledClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );

  // icon
  const renderIcon = useMemo(() => {
    return (
      <i
        className={[name + '-icon-style', name + '-icon-' + icon].join(' ')}
      ></i>
    );
  }, [icon]);

  // loading图标类型
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
  }, [loading, loadingType]);

  return (
    <div
      className={classes}
      style={styles}
      onClick={disabled || loading ? disabledClick : click}
    >
      <div className={name + '-content'}>
        {renderLoad}
        {!loading && icon && renderIcon}
        {children && <span className={name + '-text'}>{children}</span>}
      </div>
    </div>
  );
});

Button.displayName = 'Button';
export default Button;
