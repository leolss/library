/*
 * @Author: liuyingying
 * @Date: 2021-09-22 13:44:37
 * @Email: liuyingying1@jd.com
 * @LastEditors: liuyingying
 * @LastEditTime: 2021-09-23 14:58:01
 * @Description:
 */
import * as React from 'react';
import { useCallback, useMemo, forwardRef, ReactElement } from 'react';
import classNames from 'classnames';
import { TabNodeProps } from './interface';
import { createNamespace } from '@/utils/create';

function TabNode(
  {
    prefixCls,
    active,
    tab: { key, label, disabled },
    onClick,
    className,
  }: TabNodeProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const [name, bem] = createNamespace(`${prefixCls}-tab`);

  const onTabClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) {
        return;
      }
      onClick(e);
    },
    [disabled, onClick],
  );

  // 最外层类名
  const tabClassNames = useMemo(() => {
    return classNames(bem([{ active, disabled }]), className);
  }, [active, disabled, className]);

  const node: ReactElement = (
    <div key={key} ref={ref} className={tabClassNames} onClick={onTabClick}>
      <div
        className={`${name}-btn`}
        onClick={(e) => {
          e.stopPropagation();
          onTabClick(e);
        }}
      >
        {label}
      </div>
    </div>
  );

  return node;
}

export default forwardRef(TabNode);
