/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 17:53:19
 * @Description:
 */
/*
 * @Author: liuyingying
 * @Date: 2021-09-27 16:03:07
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-27 16:12:12
 * @Description:
 */
import React, { memo } from 'react';
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
  } = props;
  const [name, ben] = createNamespace('category-selection');

  return (
    <CategoryContext.Provider value={{ multiple, activeValue }}>
      <div className={classNames(name, className)} style={style}>
        {title && (
          <div className="__category-title">
            <span>{title}</span>
          </div>
        )}
        <div className="__category-list">{children}</div>
      </div>
    </CategoryContext.Provider>
  );
});

CategorySelection.displayName = 'CategorySelection';
export default CategorySelection;
