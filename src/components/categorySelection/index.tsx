/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 16:28:47
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

const CategorySelection: React.FC<CategorySelectionProps> = memo((props) => {
  const {
    title,
    multiple = false,
    activeValue,
    className = '',
    children,
    style = {},
    onChange,
  } = props;

  const [finalValue, setFinalValue] = useState(activeValue);
  const { prefixCls } = useContext(CategoryContext);
  const [name] = createNamespace(`${prefixCls}`);
  const [selectionName, selectionBen] = createNamespace(
    `${prefixCls}-selection`,
  );

  /**
   * 若选中的是 disabled 状态，activeValue 置空
   */
  useEffect(() => {
    React.Children.map(
      children as React.ReactElement,
      (child: React.ReactElement) => {
        if (child.props?.value == finalValue && child.props?.disabled) {
          setFinalValue('');
        }
      },
    );
  }, [children]);

  /**
   * 选中标签滚动到可视范围中间位置
   * 根据 ID 获取当前选中元素
   */
  useEffect(() => {
    const activeObj = document.getElementById(`${name}_${finalValue}`) as any;

    if (activeObj && (children as Array<React.ReactElement>).length > 4) {
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
  const onTabClick = useCallback((v, sort) => {
    onChange?.(v, sort);
    setFinalValue(v);
  }, []);

  return (
    <CategoryContext.Provider
      value={{ multiple, finalValue, onTabClick, prefixCls }}
    >
      <div className={classNames(selectionName, className)} style={style}>
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
