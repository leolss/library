/*
 * @Author: liuyingying
 * @Date: 2021-09-18 09:57:02
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 15:50:48
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
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
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
  } = props;

  // 最外层类名
  const classes = useMemo(() => {
    return classnames(bem([{ lineFeed, lineNum }]), className);
  }, [className]);

  // 判断是数字还是百分比
  const formatUnit = useCallback((value: any) => {
    if (value) {
      return typeof value === 'string' && value.indexOf('%')
        ? value
        : value + 'px';
    }
  }, []);

  // 样式
  const styles: React.CSSProperties = useMemo(() => {
    let style: React.CSSProperties = {
      width: formatUnit(width),
      height: formatUnit(height),
      maxWidth: formatUnit(maxWidth),
      minWidth: formatUnit(minWidth),
      lineHeight: formatUnit(lineHeight),
      textAlign: textAlign,
      textDecoration: textDecoration,
      color: color,
      fontSize: formatUnit(fontSize),
      fontWeight: fontWeight,
      backgroundColor: backgroundColor,
      WebkitLineClamp: lineNum,
      marginTop: formatUnit(marginTop),
      marginRight: formatUnit(marginRight),
      marginBottom: formatUnit(marginBottom),
      marginLeft: formatUnit(marginLeft),
      paddingTop: formatUnit(paddingTop),
      paddingRight: formatUnit(paddingRight),
      paddingBottom: formatUnit(paddingBottom),
      paddingLeft: formatUnit(paddingLeft),
    };

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
  }, [extraStyle]);

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
      style={{ ...styles, ...extraStyle }}
      onClick={click}
    >
      {children}
    </div>
  );
});

Text.displayName = 'Text';
export default Text;
