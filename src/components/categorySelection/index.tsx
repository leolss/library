/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-10-13 15:50:40
 * @Description:
 */
import React, {
  memo,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import { createNamespace } from '@/utils/create';
import classNames from 'classnames';
import CategoryContext from './categoryContext';

import type { CategorySelectionProps } from './interface';
import './index.less';

function parseActiveValue(children: React.ReactNode, v: string | number) {
  return React.Children.map(
    children as React.ReactElement,
    (node: React.ReactElement) => {
      return (node.props?.value == v && node.props?.disabled) || null;
    },
  ).join('');
}

const CategorySelection: React.FC<CategorySelectionProps> = memo((props) => {
  const {
    title,
    multiple = false,
    activeValue,
    className = '',
    children,
    onChange,
    ...restProps
  } = props;

  const [finalValue, setFinalValue] = useState(() => {
    return !multiple
      ? activeValue || ''
      : (activeValue instanceof Array && activeValue) || [];
  });
  const { prefixCls } = useContext(CategoryContext);
  const [name] = createNamespace(`${prefixCls}`);
  const [selectionName, selectionBen] = createNamespace(
    `${prefixCls}-selection`,
  );

  useEffect(() => {
    setFinalValue(() =>
      !multiple
        ? activeValue || ''
        : (activeValue instanceof Array && activeValue) || [],
    );
  }, [multiple, activeValue]);

  useEffect(() => {
    // 单选： 默认选中的值是 disabled 状态，activeValue 置空
    if (
      !multiple &&
      parseActiveValue(children, finalValue as string | number)
    ) {
      setFinalValue('');
    }

    if (multiple) {
    }
  }, [children, finalValue, multiple]);

  /**
   * 选中标签滚动到可视范围中间位置
   * 根据 ID 获取当前选中元素
   */
  useEffect(() => {
    const activeObj = document.getElementById(`${name}_${finalValue}`) as any;

    if (activeObj && React.Children.count(children) > 4) {
      activeObj.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [finalValue, name]);

  /**
   * 切换内容后调用的事件
   */
  const onTabClick = useCallback(
    (v, sort) => {
      if (!multiple) {
        setFinalValue(v);
        onChange?.(v, sort);
      } else {
        let nowValueArr = [...(finalValue as (string | number)[])];
        const fIndex = nowValueArr.indexOf(v);

        if (fIndex != -1 && (!sort || sort === '')) {
          nowValueArr = nowValueArr.filter((item) => item != v);
        } else {
          nowValueArr.push(v);
          nowValueArr = [...new Set(nowValueArr)];
        }

        setFinalValue(() => {
          return [...nowValueArr];
        });

        onChange?.(v, sort, nowValueArr);
      }
    },
    [multiple, finalValue],
  );

  return (
    <CategoryContext.Provider
      value={{ multiple, finalValue, onTabClick, prefixCls }}
    >
      <div className={classNames(selectionName, className)} {...restProps}>
        {title && (
          <div className={classNames(selectionBen('title'))}>
            <span>{title}</span>
          </div>
        )}
        <div className={classNames(selectionBen('list'))}>{children}</div>
      </div>
    </CategoryContext.Provider>
  );
});

CategorySelection.displayName = 'CategorySelection';
export default CategorySelection;
