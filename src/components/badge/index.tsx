/*
 * @Author: 李闪闪
 * @Date: 2021-09-17 19:27:17
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-18 11:00:01
 * @Description:
 */
import classnames from 'classnames';
import React from 'react';
import { BadgePropsTypes } from './interface';
import { createNamespace } from '@/utils/create';
import './index.less';
interface BadgeProps extends BadgePropsTypes {
  prefixCls?: string;
  className?: string;
  hot?: boolean;
  style?: React.CSSProperties;
}
const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const [name, bem] = createNamespace('badge');
  let {
    className,
    prefixCls,
    children,
    text,
    size,
    overflowCount,
    dot,
    corner,
    hot,
    ...restProps
  } = props;
  overflowCount = overflowCount as number;
  text =
    typeof text === 'number' && text > overflowCount
      ? `${overflowCount}+`
      : text;
  if (dot) text = '';
  const scrollNumberCls = classnames({
    [`${bem('dot')}`]: dot,
    [`${bem('dot-large')}`]: dot && size === 'large',
    [`${bem('text')}`]: !dot && !corner,
    [`${bem('corner')}`]: corner,
    [`${bem('corner-large')}`]: corner && size === 'large',
  });

  const badgeCls = classnames('jdd-badge', className, {
    [`${bem('not-a-wrapper')}`]: !children,
    [`${bem('corner-wrapper')}`]: corner,
    [`${bem('hot')}`]: !!hot,
    [`${bem('corner-wrapper-large')}`]: corner && size === 'large',
  });

  return (
    <span className={badgeCls}>
      {children}
      {(text || dot) && (
        <sup className={scrollNumberCls} {...restProps}>
          {text}
        </sup>
      )}
    </span>
  );
};
Badge.displayName = 'Badge';
export default Badge;
