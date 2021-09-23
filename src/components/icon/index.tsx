/*
 * @Author: 李闪闪
 * @Date: 2021-09-17 19:13:20
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-09-23 13:58:52
 * @Description:
 */
import classnames from 'classnames';
import React, { useEffect } from 'react';
import loadSprite from './loadSprite';
import { IconPropsType } from './interface';
import { Omit } from '@/utils/types';
import { createNamespace } from '@/utils/create';
import './index.less';
export type SvgProps = Omit<React.HTMLProps<SVGSVGElement>, 'size' | 'type'>;
export interface IconProps extends IconPropsType, SvgProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}
const Icon: React.FC<IconProps> = (props: IconProps) => {
  const [name, bem] = createNamespace('icon');
  const { type, className, size = 'md', ...restProps } = props;
  const cls = classnames(className, name, bem(type + ''), bem(size + ''));
  useEffect(() => {
    loadSprite();
  }, []);
  return (
    <>
      <svg className={cls} {...(restProps as any)}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </>
  );
};
Icon.displayName = 'Icon';
export default Icon;
