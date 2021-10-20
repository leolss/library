/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:07:45
 * @Email: liuyingying1@jd.com
 * @LastEditors: 姚嘉琦
 * @LastEditTime: 2021-10-20 10:44:32
 * @Description:
 */
import React, {
  useCallback,
  memo,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import { createNamespace } from '@/utils/create';
import classNames from 'classnames';
import CategoryContext from '../categoryContext';
import Icon from '../../icon';

import type { CategoryProps } from './interface';

const Category: React.FC<CategoryProps> = memo((props: CategoryProps) => {
  const {
    label,
    value,
    disabled = false,
    showSort = false,
    selected = '',
    slot,

    unit = 'px',
    width,
    height,
    maxWidth,
    minWidth,
    textAlign,
    fontSize,
    fontWeight,
    backgroundColor,
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

    className,
    children,
  } = props;

  const { prefixCls, multiple, finalValue, onTabClick } =
    useContext(CategoryContext);
  const [name, ben] = createNamespace(prefixCls as string);
  const [selectValue, setSelectValue] = useState(selected);

  const isEqualValue = useMemo(() => {
    return !multiple
      ? value === finalValue
      : (finalValue as (string | number)[])?.indexOf(
          value as string | number,
        ) != -1;
  }, [multiple, value, finalValue]);

  /**
   * 更改后调用的事件，并修改升序降序状态
   */
  const click = useCallback(() => {
    if (disabled) {
      return;
    }

    if (showSort) {
      let nowSelectValue = selected;

      if (
        !finalValue ||
        finalValue === '' ||
        (finalValue as Array<string | number>).length == 0 ||
        isEqualValue
      ) {
        if (multiple) {
          if (!selectValue || selectValue === '') {
            nowSelectValue = 'asc';
          } else {
            nowSelectValue = selectValue === 'asc' ? 'desc' : '';
          }
        } else {
          nowSelectValue =
            !selectValue || selectValue === '' || selectValue == 'desc'
              ? 'asc'
              : 'desc';
        }
      }

      setSelectValue(nowSelectValue);
      onTabClick(value, nowSelectValue);
    } else {
      onTabClick(value);
    }
  }, [
    selected,
    disabled,
    showSort,
    isEqualValue,
    value,
    selectValue,
    finalValue,
    multiple,
  ]);

  /**
   * 排序图标dom
   */
  const renderCategoryIcons = useMemo(() => {
    if (isEqualValue) {
      return <Icon type={selectValue === 'asc' ? 'up' : 'down'} size="xxs" />;
    }

    return (
      <>
        <Icon type="up" size="xxs" style={{ margin: '-4px 0' }} />
        <Icon type="down" size="xxs" style={{ margin: '-4px 0' }} />
      </>
    );
  }, [selectValue, isEqualValue, value]);

  /**
   * 最外层类名
   */
  const classes = useMemo(() => {
    return classNames(
      ben([isEqualValue && 'selected', { disabled }]),
      className,
    );
  }, [className, isEqualValue, value, disabled]);

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
      fontWeight: fontWeight,
      backgroundColor: backgroundColor,
    };

    const attrs: Object = {
      width,
      height,
      maxWidth,
      minWidth,
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
      borderRadius,
    };

    Object.keys(attrs).forEach((item: string) => {
      const nowItem = item as keyof typeof attrs;
      if (attrs[nowItem]) {
        style[nowItem] = formatUnit(attrs[nowItem]);
      }
    });

    return style;
  }, []);

  return (
    <div
      id={`${name}_${value}`}
      className={classes}
      onClick={click}
      style={styles}
    >
      {label || children}
      {showSort && (
        <div className={classNames(ben('sort'))}>{renderCategoryIcons}</div>
      )}
      {!showSort && slot}
    </div>
  );
});

export default Category;
