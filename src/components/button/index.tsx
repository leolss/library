/*
 * @Author: 姚嘉琦
 * @Date: 2021-09-13 19:39:35
 * @Email: yaojiaqi1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 10:32:27
 * @Description:  Button
 */
import React, { memo, useMemo, useCallback } from 'react';
import { createNamespace } from '@/utils/create';
import { Throttle } from '@/utils/debounced';
import classnames from 'classnames';

import type { ButtonProps } from './interface';
import './index.less';

const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const [name, bem] = createNamespace('button');

  const {
    unit = 'px',
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
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    borderRadius,
    color,
    extraStyle,
    children,
    onClick,
  } = props;

  // 判断是数字还是百分比
  const formatUnit = useCallback((value: any) => {
    if (value) {
      if (!isNaN(value)) {
        return value + unit;
      }

      const valueArray = value
        .trim()
        .split(' ')
        .map((item: any) => {
          return !isNaN(item) ? item + unit : item;
        });

      return valueArray.join(' ');
    }
  }, []);

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
      width: formatUnit(width),
      height: formatUnit(height),
      borderRadius: formatUnit(borderRadius),
      margin: formatUnit(margin),
      marginTop: formatUnit(marginTop),
      marginRight: formatUnit(marginRight),
      marginBottom: formatUnit(marginBottom),
      marginLeft: formatUnit(marginLeft),
      padding: formatUnit(padding),
      paddingTop: formatUnit(paddingTop),
      paddingRight: formatUnit(paddingRight),
      paddingBottom: formatUnit(paddingBottom),
      paddingLeft: formatUnit(paddingLeft),
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
  }, [width, height, borderRadius, plain, color, extraStyle]);

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
      style={{ ...styles, ...extraStyle }}
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
