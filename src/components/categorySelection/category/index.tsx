/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:07:45
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-28 10:25:37
 * @Description:
 */
import React, { useCallback, memo, useState, useMemo, useContext } from 'react';
import { createNamespace } from '@/utils/create';
import classNames from 'classnames';
import CategoryContext from '../categoryContext';

import type { CategoryProps } from './interface';

const Category: React.FC<CategoryProps> = memo((props: CategoryProps) => {
  const {
    label,
    value,
    disabled,
    showIcon,

    slot,
    className,
    selected,
    onChange,
    width,
    children,
    ...restProps
  } = props;

  const [name, ben] = createNamespace('category');
  const [isDesc, setIsDesc] = useState(true);
  const { multiple, activeValue } = useContext(CategoryContext);

  const click = useCallback(() => {
    if (disabled) {
      return;
    }
    onChange(value, '');
  }, [slot, isDesc, disabled]);

  const renderCategoryIcons = useMemo(() => {}, []);

  // 最外层类名
  const classes = useMemo(() => {
    return classNames(
      ben([activeValue == value && 'selected', { disabled }]),
      className,
    );
  }, [className]);

  return (
    <div className={classes} onClick={click} {...restProps}>
      {label || children}
      {slot && <div className="_category_slot"></div>}
    </div>
  );
});
console.log(Category);
export default Category;
