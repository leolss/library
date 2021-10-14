/*
 * @Author: liuyingying
 * @Date: 2021-09-18 09:57:02
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 16:05:12
 * @Description:
 */
import React, { memo, useMemo, useCallback } from 'react';
import { createNamespace } from '@/utils/create';
import classnames from 'classnames';

import type { TextProps } from './interface';
import './index.less';

const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const [name, bem] = createNamespace('text');
  const {
    unit = 'px',
    width,
    height,
    maxWidth,
    minWidth,
    lineHeight,
    textAlign,
    textDecoration,
    color,
    fontSize,
    fontWeight,
    backgroundColor,
    lineFeed,
    lineNum,
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
    showBorder = false,
    borderWidth = 1,
    borderColor = '#ddd',
    borderStyle = 'solid',
    borderRadius,
    block = false,
    className,
    extraStyle,
    children,
    onClick,
    style = {},
    ...restProps
  } = props;

  // 最外层类名
  const classes = useMemo(() => {
    return classnames(bem([{ lineFeed, lineNum }]), className);
  }, [className]);

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

  // 样式
  const styles: React.CSSProperties = useMemo(() => {
    let style: React.CSSProperties = {
      textAlign: textAlign,
      textDecoration: textDecoration,
      color: color,
      fontWeight: fontWeight,
      backgroundColor: backgroundColor,
      WebkitLineClamp: lineNum,
    };

    const attrs: Object = {
      width,
      height,
      maxWidth,
      minWidth,
      lineHeight,
      fontSize,
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
    };

    Object.keys(attrs).forEach((item: string) => {
      const nowItem = item as keyof typeof attrs;
      if (attrs[nowItem]) {
        style[nowItem] = formatUnit(attrs[nowItem]);
      }
    });

    if (showBorder) {
      style['borderWidth'] = formatUnit(borderWidth);
      style['borderColor'] = borderColor;
      style['borderStyle'] = borderStyle;
      style['borderRadius'] = formatUnit(borderRadius);
    }
    if (block) {
      style['display'] = 'block';
    }

    style = Object.assign({}, style, extraStyle);

    return style;
  }, []);

  const click = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (onClick) {
        e.stopPropagation();
        onClick(e);
      }
    },
    [onClick],
  );

  return (
    <div
      className={classes}
      style={{ ...styles, ...extraStyle, ...style }}
      onClick={click}
    >
      {children}
    </div>
  );
});

Text.displayName = 'Text';
export default Text;
